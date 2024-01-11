<template>
  <div>
    <h1>Edit render form</h1>
    <br />
    <v-btn @click="addItem" block>Add Item</v-btn>
    <v-table theme="light">
    <thead>
      <tr>
        <th class="text-left">
          Type
        </th>
        <th class="text-left">
          Id
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Default
        </th>
        <th class="text-left">
          Required
        </th>
        <th class="text-left">
          Actions
        </th>
      </tr>
    </thead>
    <draggable v-model="list" tag="tbody" item-key="name">
        <template #item="{ element }">
          <tr>
            <td scope="row">
              <v-select
                v-model="element.type"
                :items="itemTypes"
              ></v-select>
            </td>
            <td :colspan="element.type !== ElementRenderTypes.DIVIDER ? '1' : '4'">
              <v-text-field :rules="inputRules" v-model="element.content.id"></v-text-field>
            </td>
            <template v-if="element.type !== ElementRenderTypes.DIVIDER">
              <td><v-text-field v-model="element.content.itemName"></v-text-field></td>
              <td>
                <component :is="element.type !== ElementRenderTypes.CHECKBOX ? VTextField : VCheckbox" :type="element.type" v-model="element.content.default"></component>
              </td>
              <td><v-checkbox v-model="element.content.isRequired"></v-checkbox></td>
            </template>
            <td>Drag | <button @click="removeItem(element._id)">Delete</button></td>
          </tr>
        </template>
      </draggable>
  </v-table>
  <br />
  <v-btn @click="generateBase64" block>Generate Base64</v-btn>
  <v-textarea readonly v-model="base64State"></v-textarea>
  </div>
</template>

<script lang="ts" setup>
  import draggable from "vuedraggable";
  import { ref } from 'vue'
  import { Buffer } from 'buffer'
  import { ElementRenderTypes, type Element } from '../common/types';
  import { VCheckbox, VTextField } from 'vuetify/lib/components/index.mjs';

  const list = ref<Element[]>([]);
  const base64State = ref('');
  const itemTypes: (keyof typeof ElementRenderTypes)[] = [ElementRenderTypes.DIVIDER, ElementRenderTypes.NUMBER, ElementRenderTypes.INPUT, ElementRenderTypes.CHECKBOX];
  let addedItemsIndex = 0;

  const addItem = () => {
    addedItemsIndex++;
    list.value.push({ 
      _id: Math.random().toString(), 
      type: ElementRenderTypes.DIVIDER,
      content: {id: addedItemsIndex.toString(), itemName: "", default: "", isRequired: true},
    });
  }

  const removeItem = (id: Element["_id"]) => {
    list.value = list.value.filter(item => item._id !== id);
  }

  const generateBase64 = () => {
    const json = JSON.stringify(list.value);
    base64State.value = Buffer.from(json).toString("base64");
  }

  const inputRules = [
    (value: string) => !!value || 'This is required.',
    (value: string) =>  list.value.filter(item => item.content.id === value).length > 1 ? 'This should be unique.' : true,
  ];
</script>
