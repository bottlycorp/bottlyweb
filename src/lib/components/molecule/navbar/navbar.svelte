<script lang="ts">
  import { Button } from "$lib/components/atomic/button";
  import { IconCrown, IconPlus } from "$lib/icons";
</script>

<div class="flex justify-between p-2">
  <div class="logo"><!-- LOL --></div>
  <div class="buttons flex">
    <Button color="gold" href="https://buy.stripe.com/cN228B0tr6ru5zifYY">
      <IconCrown color="black" />
      Upgrade
    </Button>

    <Button color="transparent" href="https://discord.com/application-directory/1076862546658738236">
      <IconPlus color="white" size={16} />
      Add to my server
    </Button>
  </div>
</div>