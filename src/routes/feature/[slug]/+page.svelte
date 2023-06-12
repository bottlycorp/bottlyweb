<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="flex text-[#DDDDDD] font-semibold text-xl md:text-3xl justify-center mb-3 mt-5">
  <span class="flex-col">
    {data.title}
  </span>
</h1>

<div class="flex text-[#E6E6E6] font-normal text-sm md:text-xl justify-center items-center text-center">
  {data.description}
</div>

{#if data.image}
  <div class="flex justify-center items-center mt-5 px-3">
    <img src={data.image} alt="cc" class="h-auto rounded-lg transition ease-in duration-300 group-hover:blur" />
  </div>
{/if}