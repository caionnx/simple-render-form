<template>
  <h1>
    Render page
  </h1>
  <br />
  <v-textarea label="Paste your encoded data" v-model="base64Data"></v-textarea>
  <v-btn @click="parseBase64" block>Render data</v-btn>
  <br />
  <div>
    <form>
      <component 
        v-for="element in renderState" 
        v-bind={...element.content}
        :elementType="element.type"
        :is="components[element.type]" 
        :key="element._id">
      </component>
      <v-btn
        type="submit"
        v-show="renderState.filter(element => element.type !== ElementRenderTypes.DIVIDER).length > 0"
        block>
        Submit form
      </v-btn>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { Buffer } from 'buffer'
  import { ref } from 'vue'
  import { ElementRenderTypes, type Element } from '~/common/types';
  import Divider from '~/components/Divider.vue';
  import DynamicInput from '~/components/DynamicInput.vue';

  type ComponentsList = {[key in keyof typeof ElementRenderTypes]: (typeof Divider | typeof DynamicInput)}

  const components: ComponentsList = {
    [ElementRenderTypes.DIVIDER]: Divider,
    [ElementRenderTypes.NUMBER]: DynamicInput,
    [ElementRenderTypes.CHECKBOX]: DynamicInput,
    [ElementRenderTypes.INPUT]: DynamicInput,
  }

  const base64Data = ref('');
  const renderState = ref<Element[]>([]);

  const parseBase64 = () => {
    const json = Buffer.from(base64Data.value, "base64").toString();
    renderState.value = JSON.parse(json);
  }
</script>
