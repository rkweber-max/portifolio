<template>
  <span
    :class="[
      'px-3 py-1 text-sm rounded-full border',
      variant === 'default' ? 'bg-blue-50 text-blue-600 border-blue-100' : '',
      variant === 'dark' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : '',
      className
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'dark'
  className?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  className: ''
})
</script>

