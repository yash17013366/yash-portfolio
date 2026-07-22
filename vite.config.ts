// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import type { Plugin } from "vite";

const galleryModuleId = "virtual:project-gallery-manifest";
const resolvedGalleryModuleId = `\0${galleryModuleId}`;

function projectGalleryManifest(): Plugin {
  const projectsDirectory = join(process.cwd(), "public", "projects");
  const getManifest = () => {
    if (!existsSync(projectsDirectory)) return {};
    return Object.fromEntries(
      readdirSync(projectsDirectory, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((folder) => {
          const folderPath = join(projectsDirectory, folder.name);
          const images = readdirSync(folderPath, { withFileTypes: true })
            .filter((entry) => entry.isFile() && /\.(avif|gif|jpe?g|png|webp)$/i.test(entry.name))
            .map((entry) => entry.name)
            .sort((a, b) => {
              const rank = (name: string) => /^cover\./i.test(name) ? 0 : 1;
              return rank(a) - rank(b) || a.localeCompare(b, undefined, { numeric: true });
            })
            .map((file) => `/${relative(join(process.cwd(), "public"), join(folderPath, file)).split(sep).join("/")}`);
          return [folder.name, images];
        }),
    );
  };

  return {
    name: "project-gallery-manifest",
    resolveId(id) { return id === galleryModuleId ? resolvedGalleryModuleId : undefined; },
    load(id) { return id === resolvedGalleryModuleId ? `export const projectImageManifest = ${JSON.stringify(getManifest())};` : undefined; },
    configureServer(server) {
      server.watcher.add(projectsDirectory);
      server.watcher.on("all", (_event, file) => {
        if (!file.startsWith(projectsDirectory)) return;
        const module = server.moduleGraph.getModuleById(resolvedGalleryModuleId);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: "full-reload" });
      });
    },
  };
}

export default defineConfig({
  vite: { plugins: [projectGalleryManifest()] },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
