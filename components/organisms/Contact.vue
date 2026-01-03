<template>
  <section id="contact" class="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div class="max-w-4xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="0"
        class="text-center mb-12"
      >
        <h2 class="mb-4 text-3xl md:text-4xl font-bold text-white">Vamos Trabalhar Juntos?</h2>
        <p class="text-slate-300 max-w-2xl mx-auto">
          Estou sempre aberto a discutir novos projetos, ideias criativas ou 
          oportunidades para fazer parte da sua visão.
        </p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="200"
        class="grid md:grid-cols-2 gap-6 mb-12"
      >
        <a
          href="mailto:rodrigo@example.com"
          class="p-6 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 transition-all group"
        >
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Mail class="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div class="text-slate-400 mb-1">Email</div>
              <div class="text-white">rodrigo@example.com</div>
            </div>
          </div>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-6 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 transition-all group"
        >
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Linkedin class="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div class="text-slate-400 mb-1">LinkedIn</div>
              <div class="text-white">Rodrigo Kunzler Weber</div>
            </div>
          </div>
        </a>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="300"
        class="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-all"
        >
          <Github class="w-5 h-5" />
          <span>GitHub Profile</span>
        </a>
        
        <button class="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors">
          <Download class="w-5 h-5" />
          <span>Download CV</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Linkedin, Github, Download } from 'lucide-vue-next'
</script>

