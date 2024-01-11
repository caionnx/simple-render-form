<template>
  <h2>
    {{ id }}
  </h2>
</template>

<script lang="ts" setup>
  import { type ElementContent } from '../common/types';

  defineProps<ElementContent>()
</script>

<style>

</style>