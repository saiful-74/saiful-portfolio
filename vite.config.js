import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite is the build tool. The two plugins add React and Tailwind CSS support.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
