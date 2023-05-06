<script lang="ts">
  import type { ButtonColor, ButtonType } from "./button.types";
  import clsx from "clsx";

  export let type: ButtonType = "button";
  export let color: ButtonColor = "transparent";
  export let disabled: boolean = false;
  export let onClick: () => void = () => {};

  $: style = clsx("flex gap-3 items-center rounded-[5px] px-4 pt-1 pb-1 text-sm font-medium border-none", {
    "bg-primary": color === "primary",
    "bg-primary cursor-not-allowed": color === "primary" && disabled,
    "bg-secondary": color === "secondary",
    "bg-secondary cursor-not-allowed": color === "secondary" && disabled,
    "bg-danger": color === "danger",
    "bg-danger cursor-not-allowed": color === "danger" && disabled,
    "bg-gold": color === "gold",
    "bg-gold cursor-not-allowed": color === "gold" && disabled,
    "bg-transparent text-white": color === "transparent",
    "bg-transparent cursor-not-allowed text-white": color === "transparent" && disabled
  });
</script>

<button class="{style}" type={type} disabled={disabled} on:click={onClick}>
  <slot />
</button>