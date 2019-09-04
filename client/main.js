import { onPageLoad } from 'meteor/server-render'
import App from '/imports/ui/App.svelte'

onPageLoad(() => {
  /* eslint-disable no-new */
  new App({
    target: document.getElementById('root'),
    hydrate: true
  })
})
