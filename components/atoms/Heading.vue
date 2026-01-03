<template>
  <component
    :is="tag"
    :class="[
      'mb-4',
      level === 1 ? 'text-4xl md:text-5xl font-bold' : '',
      level === 2 ? 'text-3xl md:text-4xl font-bold' : '',
      level === 3 ? 'text-2xl md:text-3xl font-semibold' : '',
      className
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  level?: 1 | 2 | 3
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  level: 2,
  className: ''
})

const tag = computed(() => `h${props.level}`)
</script>

