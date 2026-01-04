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
        <h2 class="mb-4 text-3xl md:text-4xl font-bold text-slate-900">
          Projetos em Destaque
        </h2>
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
import { Github, ExternalLink } from "lucide-vue-next";

const projects = [
  {
    title: "API de Pagamentos (Projeto Pessoal)",
    description:
      "API de checkout de pagamentos desenvolvida em Golang, com foco em performance, organização de camadas e boas práticas de backend. Projeto voltado para estudo e simulação de fluxo real de pagamentos.",
    tags: ["Golang", "REST API", "Docker"],
    github: "https://github.com/rkweber-max/checkout-backend",
    demo: null,
  },
  {
    title: "Consulta de Pedidos por Phone Number",
    description:
      "Serviço backend em Golang para consulta de pedidos a partir do número de telefone, com autenticação via API Key, paginação, filtros e controle de limite de requisições.",
    tags: ["Golang", "REST API", "Pagination", "API Key"],
    github: null,
    demo: null,
  },
  {
    title: "Comunicação entre Sistemas com SQS",
    description:
      "Implementação de comunicação assíncrona entre sistemas utilizando AWS SQS, garantindo desacoplamento, confiabilidade e processamento seguro de eventos.",
    tags: ["PHP", "Laravel", "AWS SQS", "Mensageria"],
    github: null,
    demo: null,
  },
  {
    title: "Automação de Criação de Credenciais",
    description:
      "Automação de fluxo para criação e gestão de credenciais, com backend em Laravel e frontend em Vue.js, reduzindo processos manuais e erros operacionais.",
    tags: ["PHP", "Laravel", "Vue.js", "Automação"],
    github: null,
    demo: null,
  },
  {
    title: "CRUD de Usuários em Golang (Projeto Pessoal)",
    description:
      "Aplicação backend em Golang aplicando conceitos de organização de código, orientação a objetos, camadas e operações CRUD completas.",
    tags: ["Golang", "CRUD", "Clean Code"],
    github: "https://github.com/rkweber-max/go-object-oriented",
    demo: null,
  },
  {
    title: "Integração entre Sistemas em Java (Projeto Pessoal)",
    description:
      "Projeto em Java focado na integração entre sistemas, consumo e envio de dados entre serviços distintos, explorando conceitos de arquitetura e comunicação entre aplicações.",
    tags: ["Java", "Integrações", "Backend"],
    github: "https://github.com/rkweber05/Boss-Mundo-2-StrangerStrings",
    demo: null,
  },
];
</script>
