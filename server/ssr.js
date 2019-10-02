import { WebApp } from 'meteor/webapp'
import { FastRender } from 'meteor/staringatlights:fast-render'
import { preloadAll } from 'meteor/npdev:svelte-loadable'
import App from '/imports/ui/App.svelte'

preloadAll().then(() => FastRender.onPageLoad((sink) => {
  const loadableHandle = {}
  const { html, css, head } = App.render({ loadableHandle, url: sink.request.url.pathname })

  WebApp.addHtmlAttributeHook(() => ({
    lang: 'en'
  }))

  sink.appendToHead(`<style>${css.code}</style>`)
  sink.appendToHead(head)
  sink.renderIntoElementById('root', html)
  sink.appendToBody(loadableHandle.toScriptTag())
}))
