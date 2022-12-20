import { defineConfig ,loadEnv} from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from "svelte-preprocess";
import * as fs from "fs";
import * as path from "path";


/*
funktion um überflüssige ordner aus dist zu löschen die zur Dev Preview gehören...
 */
function stripSchwalbeDirs () {
  return {
    name: 'strip-schwalbe-dirs',
    resolveId (source) {
      return source === 'virtual-module' ? source : null
    },
    renderStart (outputOptions, inputOptions) {
      const outDir = outputOptions.dir
      const bundleDir = path.resolve(outDir, 'bundles')
      fs.rmdir(bundleDir, { recursive: true }, () => console.log(`Deleted ${bundleDir}`))
      const thumbnailDir = path.resolve(outDir, 'thumbnail')
      fs.rmdir(thumbnailDir, { recursive: true }, () => console.log(`Deleted ${thumbnailDir}`))
      const mediaDir = path.resolve(outDir, 'media')
      fs.rmdir(mediaDir, { recursive: true }, () => console.log(`Deleted ${mediaDir}`))
      const faDir = path.resolve(outDir, 'use.fontawesome.com')
      fs.rmdir(faDir, { recursive: true }, () => console.log(`Deleted ${faDir}`))
      const themeDir = path.resolve(outDir, 'theme')
      fs.rmdir(themeDir, { recursive: true }, () => console.log(`Deleted ${themeDir}`))
    }
  }
}




export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
  },
  plugins: [
    svelte({
      emitCss: false,
      preprocess: preprocess({
        scss: {includePaths: ['src/assets/scss'], prependData: `@use "src/assets/scss/_app";`},
        replace: [[/@publish\.domain/g, process.env.VITE_PUBLISH_DOMAIN ]], // @publish.domain mit env Variable ersetzen...
      })
    }),
    stripSchwalbeDirs()


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
}
