<script>
import { Tracker } from 'meteor/tracker'
import { Router, Link, Route } from 'svelte-routing'
import Loadable from 'svelte-loadable'
import MainLayout from './layouts/MainLayout.svelte'

export let url = ''
</script>

<Router url="{url}">
  <MainLayout>
    <Route path="pages/:slug" let:params>
      <Loadable loader={() => import('./pages/Page.svelte')} slug={params.slug}>
        <div slot="loading">Loading...</div>
      </Loadable>
    </Route>
    <Route path="/">
      <Loadable loader={() => import('./home/Home.svelte')} />
    </Route>
  </MainLayout>
</Router>
