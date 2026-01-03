<template>
  <div>
    <div class="flex justify-between mb-2">
      <span class="text-slate-700">{{ name }}</span>
      <span class="text-slate-500">{{ level }}%</span>
    </div>
    <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
      <div
        v-motion
        :initial="{ width: 0 }"
        :visible="{ width: `${level}%` }"
        :delay="delay"
        class="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  level: number
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 0
})
</script>

