<template>
  <a
    :href="href"
    :target="target"
    :rel="rel"
    :class="[
      'p-3 rounded-lg transition-colors',
      variant === 'dark' ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white' : '',
      variant === 'light' ? 'bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600' : '',
      className
    ]"
  >
    <component :is="icon" class="w-6 h-6" />
  </a>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  href: string
  icon: Component
  variant?: 'dark' | 'light'
  target?: string
  rel?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'dark',
  target: '_self',
  rel: '',
  className: ''
})
</script>

