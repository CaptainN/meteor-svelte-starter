import { Tracker } from 'meteor/tracker'
import { onDestroy } from 'svelte'

export default function (func) {
  const computation = Tracker.nonreactive(() =>
    Tracker.autorun(func)
  )
  onDestroy(() => {
    computation.stop()
  })
}
