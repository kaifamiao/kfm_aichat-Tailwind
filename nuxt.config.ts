// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],  // Ensure this is included
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})


// export default defineNuxtConfig({
//   css: ['~/assets/css/main.css'],
//   modules: ['@pinia/nuxt'],
// })

// export default defineNuxtConfig({
//   css: ['~/assets/css/main.css'],
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: false },
//     modules: [
//       '@pinia/nuxt'
//   ],
//
// })

//
// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   css: ['~/assets/css/main.css'],
//   modules: [
//       '@pinia/nuxt'
//   ],
//
// })
