<script lang="ts">
  import { onMount } from "svelte";
  import { domCookie } from "cookie-muncher";
  import { Navbar } from "$lib/components/molecule/navbar";
  import "../app.css";

  onMount(() => {
    const lang = navigator.language;
    domCookie.set({ name: "lang", value: lang })
  });
</script>

<Navbar />

<slot />