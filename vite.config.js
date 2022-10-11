import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
  },
  plugins: [
    svelte({
      emitCss: false,
      preprocess: preprocess({
        scss: {includePaths: ['src/assets/scss'], prependData: `@use "src/assets/scss/_app";`}
      })
    })
  ],
  build: {
    minify: true,
    lib: {
      entry: 'src/main.js',
      name: 'schwalbebikesoap',
      formats: ['umd'],
      fileName: (format) => `schwalbebikesoap_.${format}.js`
    },
  }
})
