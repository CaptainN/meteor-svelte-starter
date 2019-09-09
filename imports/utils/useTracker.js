/* global Meteor */
import { Tracker } from 'meteor/tracker'
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
  return func()
}

export const track = Meteor.isClient
  ? trackClient
  : trackServer
