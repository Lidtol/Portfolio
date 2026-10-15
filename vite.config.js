import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "base" debe coincidir con el nombre del repositorio para GitHub Pages:
// https://lidtol.github.io/Portfolio/
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
});
