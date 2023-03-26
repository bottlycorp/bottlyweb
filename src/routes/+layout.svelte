<script>
  import "../app.css";
  import { Navbar } from "$lib/components/molecules/navbar";
</script>

<Navbar />

<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <slot />
</div>