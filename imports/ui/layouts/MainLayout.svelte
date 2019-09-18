<script>
import { Link } from 'svelte-routing'
</script>

<style>
.main {
  padding: 10px;
}
</style>

<div class="main">
  <Link to="/admin">Admin</Link>
  <h1>User Tier</h1>
  <slot></slot>
</div>
