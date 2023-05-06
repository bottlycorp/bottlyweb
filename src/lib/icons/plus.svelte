<script lang="ts">
  export let size: 16 | 24 | 32 | 48 = 24;
  export let color: "white" | "black" = "white";
</script>

<svg height={size} width={size} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 2V19" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 10H19" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>