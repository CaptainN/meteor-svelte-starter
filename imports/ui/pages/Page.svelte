<script>
import { Pages } from '/imports/api/collections/pages'
import useTracker from '/imports/utils/useTracker'

export let slug = ''

let page

useTracker(() => {
  Meteor.subscribe('page', slug)
  page = Pages.findOne({ slug })
})
</script>

{#if page}
  <div>{@html page.content}</div>
{/if}
