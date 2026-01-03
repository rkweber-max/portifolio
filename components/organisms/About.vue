<template>
  <section id="about" class="py-20 px-4 bg-slate-50">
    <div class="max-w-6xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="0"
        class="text-center mb-16"
      >
        <h2 class="mb-4 text-3xl md:text-4xl font-bold text-slate-900">Sobre Mim</h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          Desenvolvedor apaixonado por criar soluções robustas e eficientes, 
          com experiência em arquitetura de sistemas e desenvolvimento de aplicações escaláveis.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in highlights"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="index * 100"
          class="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
            <component :is="item.icon" class="w-6 h-6 text-blue-600" />
          </div>
          <h3 class="mb-2 text-slate-900">{{ item.title }}</h3>
          <p class="text-slate-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code, Database, Briefcase } from 'lucide-vue-next'

const highlights = [
  {
    icon: Code,
    title: 'Backend Especialista',
    description: 'Foco principal em desenvolvimento backend com PHP, Golang e Java',
  },
  {
    icon: Briefcase,
    title: 'Full Stack Atual',
    description: 'Trabalhando em projetos completos com Vue3 e Nuxt no frontend',
  },
  {
    icon: Database,
    title: 'Setor Financeiro',
    description: 'Experiência sólida em sistemas e aplicações para o mercado financeiro',
  },
]
</script>

