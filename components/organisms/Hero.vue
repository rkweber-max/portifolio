<template>
  <section
    class="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <div
      class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2RlfGVufDF8fHx8MTc2NzQ1MTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"
    />

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="0"
      >
        <span
          class="inline-block px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
        >
          Desenvolvedor Backend / Full Stack 
      </div>

      <h1
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="100"
        class="mb-6 text-white text-4xl md:text-5xl font-bold"
      >
        Rodrigo Kunzler Weber
      </h1>

      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="200"
        class="mb-8 text-slate-300 max-w-2xl mx-auto"
      >
        Desenvolvedor de software focado em Backend com sólida experiência em
        Full Stack, especializado em soluções para o mercado financeiro.
        Construindo sistemas robustos e escaláveis com as melhores tecnologias
        do mercado.
      </p>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="300"
        class="flex flex-wrap gap-4 justify-center mb-12"
      >
        <button
          @click="scrollToSection('contact')"
          class="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          Entre em Contato
        </button>
        <button
          @click="scrollToSection('projects')"
          class="px-8 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
        >
          Ver Projetos
        </button>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :delay="400"
        class="flex gap-6 justify-center"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <Github class="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <Linkedin class="w-6 h-6" />
        </a>
        <a
          href="mailto:rodrigo@example.com"
          class="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <Mail class="w-6 h-6" />
        </a>
      </div>
    </div>

    <button
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1 }"
      :delay="500"
      @click="scrollToSection('about')"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors"
    >
      <ChevronDown class="w-8 h-8 animate-bounce" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown, Github, Linkedin, Mail } from "lucide-vue-next";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>
