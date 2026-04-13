import { createSSRApp } from 'vue'
import {
  StartClient,
  configureHydrationSuppressions,
  hydrateStart,
} from '@tanstack/vue-start/client'
import { registerPlugins } from './plugins'

hydrateStart().then((router) => {
  const app = createSSRApp(StartClient, { router })
  configureHydrationSuppressions(app, router)

  // Register Vue plugins (Vuetify, etc.) before mounting
  registerPlugins(app)

  app.mount('#__app')
})
