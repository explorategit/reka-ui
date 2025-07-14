<script lang="ts">
import type { Ref } from 'vue'
import type { ListboxItemEmits, ListboxItemProps } from '@/Listbox'
import { createContext, useForwardPropsEmits } from '@/shared'

export interface ColorSwatchPickerItemProps extends ListboxItemProps {
  value: string
}

export type ColorSwatchPickerItemEmits = ListboxItemEmits

export interface ColorSwatchPickerItemContext {
  color: Ref<string>
}

export const [injectColorSwatchPickerItemContext, provideColorSwatchPickerItemContext]
  = createContext<ColorSwatchPickerItemContext>('ColorSwatchPickerItem', 'ColorSwatchPickerItemContext')
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { ListboxItem } from '@/Listbox'

const props = defineProps<ColorSwatchPickerItemProps>()

const emits = defineEmits<ColorSwatchPickerItemEmits>()

const { value } = toRefs(props)

const forwarded = useForwardPropsEmits(props, emits)

provideColorSwatchPickerItemContext({
  color: value,
})
</script>

<template>
  <ListboxItem
    v-bind="forwarded"
    :style="{ '--reka-color-swatch-picker-item-color': value }"
  >
    <slot />
  </ListboxItem>
</template>
