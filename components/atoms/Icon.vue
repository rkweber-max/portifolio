<template>
  <component :is="icon" :class="['transition-colors', className]" />
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  icon: Component
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: ''
})
</script>

