<script context="module">
import { register } from 'meteor/npdev:svelte-loadable'

// Loaders must be registered outside of the render tree.
const PageLoader = register({
  loader: () => import('./pages/Page.svelte'),
  resolve: () => require.resolve('./pages/Page.svelte')
})
const HomeLoader = register({
  loader: () => import('./home/Home.svelte'),
  resolve: () => require.resolve('./home/Home.svelte')
})
</script>

<script>
import { Router, Link, Route } from 'svelte-routing'
import { LoadableProvider, Loadable } from 'meteor/npdev:svelte-loadable'
import MainLayout from './layouts/MainLayout.svelte'

export let loadableHandle = {}
export let url = ''
</script>

<LoadableProvider handle={loadableHandle}>
  <Router url="{url}">
    <MainLayout>
      <Route path="/pages/:slug" let:params>
        <Loadable loader={PageLoader} slug={params.slug}>
          <div slot="loading">Loading...</div>
        </Loadable>
      </Route>
      <Route path="/">
        <Loadable loader={HomeLoader} />
      </Route>
    </MainLayout>
  </Router>
</LoadableProvider>
