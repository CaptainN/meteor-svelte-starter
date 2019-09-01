import { onPageLoad } from 'meteor/server-render'
import App from '/imports/ui/App.svelte'

onPageLoad(() => {
  new App({
    target: document.getElementById('root')
  })
})
