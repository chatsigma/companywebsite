import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as fs from 'fs';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-public-without-spaces',
      apply: 'build',
      closeBundle() {
        const publicDir = path.resolve(__dirname, 'public');
        const outDir = path.resolve(__dirname, 'dist');

        if (fs.existsSync(publicDir)) {
          const files = fs.readdirSync(publicDir);
          files.forEach(file => {
            // Skip files with spaces in their names
            if (file.includes(' ')) {
              console.log(`Skipping file with space: ${file}`);
              return;
            }
            const srcPath = path.join(publicDir, file);
            try {
              const stat = fs.statSync(srcPath);
              if (stat.isFile()) {
                const destPath = path.join(outDir, file);
                fs.copyFileSync(srcPath, destPath);
                console.log(`Copied: ${file}`);
              }
            } catch (err) {
              console.log(`Skipping problematic file: ${file}`);
            }
          });
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: false,
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif'],
  build: {
    target: 'es2015',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  server: {
    hmr: true,
  },
});
