<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ColorSwatchPickerItem, ColorSwatchPickerItemIndicator, ColorSwatchPickerItemSwatch, ColorSwatchPickerRoot } from 'reka-ui'
import './styles.css'

const colors = [
  '#84CC16',
  '#F59E0B',
  '#0D6EFD',
  '#EC4899',
  '#F43F5E',
]
</script>

<template>
  <ColorSwatchPickerRoot class="root">
    <ColorSwatchPickerItem
      v-for="color in colors"
      :key="color"
      :value="color"
      class="item"
    >
      <ColorSwatchPickerItemSwatch
        class="swatch"
      />
      <ColorSwatchPickerItemIndicator class="indicator">
        <Icon icon="radix-icons:check" />
      </ColorSwatchPickerItemIndicator>
    </ColorSwatchPickerItem>
  </ColorSwatchPickerRoot>
</template>
