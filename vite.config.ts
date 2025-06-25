import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { visualizer } from "rollup-plugin-visualizer";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/cv/',
  server: {
    port: 3000,
  },
  plugins: [react(), visualizer() as PluginOption],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
