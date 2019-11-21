<script>
import { PagesOffline } from '/imports/api/collections/pages'
import { track } from '/imports/utils/useTracker'

export let slug = ''

let page
let isReady

track(() => {
  isReady = Meteor.subscribe('page', slug).ready()
})

track(() => {
  page = PagesOffline.findOne({ slug })
})
</script>

{#if page}
  <div>{@html page.content}</div>
{:else if !isReady}
  <div>Loading</div>
{/if}
