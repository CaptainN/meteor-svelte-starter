import { FastRender } from 'meteor/staringatlights:fast-render'
import App from '/imports/ui/App.svelte'
import { loadHydratables } from 'meteor/npdev:svelte-loadable'

// wait for all loadables provided by ssr to load, then hydrate the app
loadHydratables().then(() => FastRender.onPageLoad(() => {
  /* eslint-disable no-new */
  new App({
    target: document.getElementById('root'),
    hydrate: true
  })
}))
