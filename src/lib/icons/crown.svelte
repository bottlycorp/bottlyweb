<script lang="ts">
  export let size: 16 | 24 | 32 | 48 = 24;
  export let color: "white" | "black" = "white";
</script>

<svg height={size} width={size} viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.5 2L21.5 11L29 5L26 20H5L2 5L9.5 11L15.5 2Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>