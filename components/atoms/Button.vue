<template>
  <button
    :class="[
      'px-8 py-3 rounded-lg transition-colors',
      variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white' : '',
      variant === 'secondary' ? 'bg-slate-700 hover:bg-slate-600 text-white' : '',
      variant === 'outline' ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600' : '',
      className
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  className: ''
})

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

