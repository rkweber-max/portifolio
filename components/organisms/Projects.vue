<template>
  <section id="projects" class="py-20 px-4 bg-slate-50">
    <div class="max-w-6xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="0"
        class="text-center mb-16"
      >
        <h2 class="mb-4 text-3xl md:text-4xl font-bold text-slate-900">Projetos em Destaque</h2>
        <p class="text-slate-600">
          Alguns dos projetos que desenvolvi ao longo da minha carreira
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="index * 100"
          class="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
        >
          <h3 class="mb-3 text-slate-900">{{ project.title }}</h3>
          <p class="text-slate-600 mb-4">{{ project.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="(tag, tagIndex) in project.tags"
              :key="tagIndex"
              class="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex gap-4">
            <a
              :href="project.github"
              class="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Github class="w-4 h-4" />
              <span class="text-sm">Código</span>
            </a>
            <a
              :href="project.demo"
              class="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ExternalLink class="w-4 h-4" />
              <span class="text-sm">Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Github, ExternalLink } from 'lucide-vue-next'

const projects = [
  {
    title: 'Sistema de Gestão Financeira',
    description: 'Plataforma completa para gestão de transações financeiras com dashboard em tempo real, desenvolvida com Laravel e Vue 3.',
    tags: ['Laravel', 'Vue 3', 'MySQL', 'Redis'],
    github: '#',
    demo: '#',
  },
  {
    title: 'API de Pagamentos',
    description: 'API RESTful de alta performance para processamento de pagamentos, construída com Golang e microserviços.',
    tags: ['Golang', 'PostgreSQL', 'Docker', 'gRPC'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portal de Investimentos',
    description: 'Aplicação web para acompanhamento de investimentos com integração a APIs de mercado financeiro, usando Spring Boot.',
    tags: ['Spring Boot', 'Nuxt', 'MongoDB', 'Kafka'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Sistema de Autenticação',
    description: 'Solução de autenticação e autorização multi-tenant com JWT e OAuth2, desenvolvida em Java.',
    tags: ['Java', 'Spring Security', 'Redis', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados financeiros com gráficos e relatórios customizáveis.',
    tags: ['Vue 3', 'Chart.js', 'Laravel', 'MySQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Microserviço de Notificações',
    description: 'Sistema de notificações em tempo real com suporte a email, SMS e push notifications.',
    tags: ['Golang', 'RabbitMQ', 'WebSocket', 'Redis'],
    github: '#',
    demo: '#',
  },
]
</script>

