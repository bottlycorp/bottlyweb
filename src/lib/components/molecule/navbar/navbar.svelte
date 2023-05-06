<script lang="ts">
  import { Button } from "$lib/components/atomic/button";
  import { IconCrown, IconPlus } from "$lib/icons";
</script>

<div class="flex justify-between p-2">
  <div class="logo">
    <h3 class="font-semibold">Bottly</h3>
  </div>
  <div class="buttons flex">
    <Button color="gold">
      <IconCrown color="white" />
      Niveau supérieur
    </Button>

    <Button color="transparent">
      <IconPlus color="black" size={16} />
      Ajouter
    </Button>
  </div>
</div>