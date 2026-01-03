<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="delay"
    class="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
  >
    <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
      <component :is="icon" class="w-6 h-6 text-blue-600" />
    </div>
    <h3 class="mb-2 text-slate-900">{{ title }}</h3>
    <p class="text-slate-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  icon: Component
  title: string
  description: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 0
})
</script>

