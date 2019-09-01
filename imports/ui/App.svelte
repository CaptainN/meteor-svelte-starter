<script>
import { Tracker } from 'meteor/tracker'
import { Router, Link, Route } from 'svelte-routing'
import MainLayout from './layouts/MainLayout.svelte'
import Home from './home/Home.svelte'
import Page from './pages/Page.svelte'

export let url = ''
</script>

<Router url="{url}">
  <Route path="pages/:slug" component="{Page}">
    <MainLayout>
      <Page pageSlug={params.slug} />
    </MainLayout>
  </Route>
  <Route path="/">
    <Home />
  </Route>
</Router>
