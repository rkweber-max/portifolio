<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="delay"
    class="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
  >
    <h3 class="mb-3 text-slate-900">{{ title }}</h3>
    <p class="text-slate-600 mb-4">{{ description }}</p>
    
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex gap-4">
      <a
        :href="github"
        class="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
      >
        <Github class="w-4 h-4" />
        <span class="text-sm">Código</span>
      </a>
      <a
        :href="demo"
        class="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
      >
        <ExternalLink class="w-4 h-4" />
        <span class="text-sm">Demo</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github, ExternalLink } from 'lucide-vue-next'

interface Props {
  title: string
  description: string
  tags: string[]
  github: string
  demo: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 0
})
</script>

