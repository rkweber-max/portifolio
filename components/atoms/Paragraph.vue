<template>
  <p :class="['text-slate-600', className]">
    <slot />
  </p>
</template>

<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: ''
})
</script>

