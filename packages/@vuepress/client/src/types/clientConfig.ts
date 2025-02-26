import type { App, ComponentOptions } from 'vue'
import type { Router } from 'vue-router'
import type { SiteDataRef } from '../composables'

/**
 * Configure vuepress client
 */
export interface ClientConfig {
  /**
   * An enhance function to be called after vue app instance and
   * vue-router instance has been created
   */
  enhance?: (context: {
    app: App
    router: Router
    siteData: SiteDataRef
  }) => void | Promise<void>

  /**
   * A function to be called inside the setup function of vue app
   */
  setup?: () => void

  /**
   * Components to be placed directly into the root node of vue app
   */
  rootComponents?: ComponentOptions[]
}
