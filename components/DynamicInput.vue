<template>
  <div>
    <component
      :is="elementType !== ElementRenderTypes.CHECKBOX ? VTextField : VCheckbox" 
      v-model=inputValue
      :type=elementType
      :name=id
      :required="isRequired ? 'true' : undefined"
      :label=itemName>
    </component>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { type ElementContent, ElementRenderTypes } from '../common/types';
  import { VCheckbox, VTextField } from 'vuetify/lib/components/index.mjs';

  const props = defineProps<ElementContent>()
  const inputValue = ref(props.default);
</script>
