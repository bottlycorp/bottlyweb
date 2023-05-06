<script lang="ts">
  import type { ButtonColor, ButtonType } from "./button.types";
  import clsx from "clsx";

  export let type: ButtonType = "button";
  export let color: ButtonColor = "transparent";
  export let disabled: boolean = false;
  export let onClick: () => void = () => {};

  $: style = clsx("flex gap-3 items-center rounded-[5px] px-4 pt-1 pb-1 text-sm font-medium border-none", {
    "bg-primary hover:bg-primary-1": color === "primary",
    "bg-primary hover:bg-primary-1 cursor-not-allowed": color === "primary" && disabled,
    "bg-secondary hover:bg-secondary-1": color === "secondary",
    "bg-secondary hover:bg-secondary-1 cursor-not-allowed": color === "secondary" && disabled,
    "bg-danger hover:bg-danger-1": color === "danger",
    "bg-danger hover:bg-danger-1 cursor-not-allowed": color === "danger" && disabled,
    "bg-gold hover:bg-gold-1": color === "gold",
    "bg-gold hover:bg-gold-1 cursor-not-allowed": color === "gold" && disabled,
    "bg-transparent text-white": color === "transparent",
    "bg-transparent cursor-not-allowed text-white": color === "transparent" && disabled
  });
</script>

<button class="{style}" type={type} disabled={disabled} on:click={onClick}>
  <slot />
</button>