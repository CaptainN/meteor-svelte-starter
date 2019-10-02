<script>
import { Pages } from '/imports/api/collections/pages'
import { track } from '/imports/utils/useTracker'

export let slug = ''

let page
let isReady

track(() => {
  isReady = Meteor.subscribe('page', slug).ready()
})

track(() => {
  page = Pages.findOne({ slug })
})
</script>

{#if !isReady}
  <div>Loading</div>
{:else if page}
  <div>{@html page.content}</div>
{/if}
