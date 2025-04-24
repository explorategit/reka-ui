<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { Ref } from 'vue'
import type { ImageLoadingStatus } from './utils'
import { createContext, useForwardExpose } from '@/shared'

export interface AvatarRootProps extends PrimitiveProps {}

export type AvatarRootContext = {
  imageLoadingStatus: Ref<ImageLoadingStatus>
}

export const [injectAvatarRootContext, provideAvatarRootContext]
  = createContext<AvatarRootContext>('AvatarRoot')

export default {
  compatConfig: {
    MODE: 3,
  },
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { ref } from 'vue'

withDefaults(defineProps<AvatarRootProps>(), {
  as: 'span',
})

useForwardExpose()

provideAvatarRootContext({
  imageLoadingStatus: ref<ImageLoadingStatus>('loading'),
})
</script>

<template>
  <Primitive
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
