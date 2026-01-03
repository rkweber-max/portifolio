<template>
  <a
    :href="href"
    :target="target"
    :rel="rel"
    class="p-6 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 transition-all group"
  >
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
        <component :is="icon" class="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <div class="text-slate-400 mb-1">{{ label }}</div>
        <div class="text-white">{{ value }}</div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  href: string
  icon: Component
  label: string
  value: string
  target?: string
  rel?: string
}

withDefaults(defineProps<Props>(), {
  target: '_self',
  rel: ''
})
</script>

