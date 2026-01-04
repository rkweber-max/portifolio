<template>
  <section id="about" class="py-20 px-4 bg-slate-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="0"
          class="mb-12 text-3xl md:text-4xl font-bold text-slate-900"
        >
          Sobre Mim
        </h2>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="100"
          class="grid md:grid-cols-5 gap-12 items-center max-w-6xl mx-auto text-left"
        >
          <div class="md:col-span-3 space-y-5 text-slate-600">
            <p class="leading-relaxed text-lg">
              Sou desenvolvedor
              <strong class="text-slate-900"
                >Full Stack com forte foco em Backend</strong
              >, apaixonado por tecnologia e inovação. Tenho experiência no
              desenvolvimento de sistemas robustos, escaláveis e seguros,
              atuando principalmente com
              <strong class="text-slate-900">PHP (Laravel)</strong>,
              <strong class="text-slate-900">Java (Spring Boot)</strong> e
              <strong class="text-slate-900">Golang (Gin)</strong>.
            </p>

            <p class="leading-relaxed text-lg">
              Iniciei minha carreira em
              <strong class="text-slate-900">QA</strong>, o que me proporcionou
              uma visão crítica sobre qualidade de software e boas práticas de
              desenvolvimento. Este diferencial aplico no dia a dia para
              entregar soluções mais confiáveis e bem estruturadas.
            </p>

            <p class="leading-relaxed text-lg">
              Tenho experiência com
              <strong class="text-slate-900">APIs REST</strong>, sistemas
              financeiros de alta escala,
              <strong class="text-slate-900">AWS</strong>, bancos de dados
              relacionais e não relacionais,
              <strong class="text-slate-900">Redis</strong> para caching e
              <strong class="text-slate-900">Docker</strong> para
              containerização.
            </p>

            <p class="leading-relaxed text-lg">
              Meu objetivo é me tornar um
              <strong class="text-slate-900">especialista em Backend</strong>,
              aprofundando conhecimentos em arquitetura de software, sistemas
              distribuídos e alta escala.
            </p>
          </div>

          <div
            class="md:col-span-2 flex justify-center md:justify-start order-first md:order-last"
          >
            <div class="relative group">
              <div
                class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300 animate-pulse"
              ></div>

              <div
                class="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6 duration-300"
              ></div>

              <div class="relative">
                <img
                  src="../../public/images/foto.jpeg"
                  alt="Rodrigo K. Weber"
                  class="relative rounded-3xl shadow-2xl w-72 h-72 md:w-96 md:h-96 object-cover object-center border-4 border-white transition-transform group-hover:scale-105 duration-300"
                  style="object-position: center 30%"
                />

                <div
                  class="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/20 to-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>
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
          <div
            class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4"
          >
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
import { Code, Database, Briefcase } from "lucide-vue-next";

const highlights = [
  {
    icon: Code,
    title: "Backend",
    description:
      "Foco principal em desenvolvimento backend com PHP, Golang e Java",
  },
  {
    icon: Briefcase,
    title: "Full Stack Atual",
    description:
      "Trabalhando em projetos completos com Vue3 e Nuxt no frontend",
  },
  {
    icon: Database,
    title: "Setor Financeiro",
    description:
      "Experiência sólida em sistemas e aplicações para o mercado financeiro",
  },
];
</script>
