<script lang="ts">
  export let size: 16 | 24 | 32 | 48 = 24;
  export let color: "white" | "black" = "white";
</script>

<svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 19V12.5C8 11.5717 7.63125 10.6815 6.97487 10.0251C6.3185 9.36875 5.42826 9 4.5 9M4.5 9C3.57174 9 2.6815 9.36875 2.02513 10.0251C1.36875 10.6815 1 11.5717 1 12.5V19H19V13C19 11.9391 18.5786 10.9217 17.8284 10.1716C17.0783 9.42143 16.0609 9 15 9H4.5Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 9V1H14L16 3L14 5H10" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 13H5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
