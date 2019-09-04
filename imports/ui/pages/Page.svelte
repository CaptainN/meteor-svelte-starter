<script>
import { Pages } from '/imports/api/collections/pages'
import track from '/imports/utils/useTracker'

export let slug = ''

let page
let isReady
track(function () {
  isReady = Meteor.subscribe('page', slug).ready()
})
track(function () {
  page = Pages.findOne({ slug })
})
</script>

{#if !isReady}
  <div>Loading</div>
{/if}
{#if page}
  <div>{@html page.content}</div>
{/if}
