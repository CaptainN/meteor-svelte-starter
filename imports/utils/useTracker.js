/* global Meteor, Tracker */
import { onDestroy } from 'svelte'

function trackClient (func) {
  const computation = Tracker.nonreactive(() =>
    Tracker.autorun(func)
  )
  onDestroy(() => {
    computation.stop()
  })
}
function trackServer (func) {
  return Tracker.nonreactive(func)
}

export const track = Meteor.isClient
  ? trackClient
  : trackServer
