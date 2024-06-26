import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Asegúrate de importar path

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Define correctamente la ruta de alias
    }
  }
});
