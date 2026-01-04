<template>
  <section
    class="min-h-screen flex items-center justify-center relative px-4 py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
  >
    <!-- Vanta Background -->
    <div ref="vantaRef" class="absolute inset-0 z-0"></div>

    <!-- Gradient Overlays para mais profundidade -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950 z-0"
    ></div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 z-0"
      style="
        background-image: radial-gradient(
          circle at 1px 1px,
          rgb(51 65 85 / 0.3) 1px,
          transparent 0
        );
        background-size: 40px 40px;
      "
    ></div>

    <div
      class="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
      style="animation-delay: 1s"
    ></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left space-y-8">
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="0"
          >
            <span
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-blue-400 font-medium text-sm backdrop-blur-sm"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"
                ></span>
              </span>
              Desenvolvedor Backend / Full Stack
            </span>
          </div>

          <div>
            <h1
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="100"
              class="text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
            >
              <span
                class="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
              >
                Rodrigo Kunzler
              </span>
            </h1>
            <h2
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="150"
              class="text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span
                class="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"
              >
                Weber
              </span>
            </h2>
          </div>

          <p
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="200"
            class="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl"
          >
            Desenvolvedor de software focado em
            <strong class="text-white">Backend</strong> com sólida experiência
            em <strong class="text-white">Full Stack</strong>, especializado em
            soluções para o mercado financeiro. Construindo sistemas
            <strong class="text-white">robustos e escaláveis</strong> com as
            melhores tecnologias.
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="250"
            class="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <span
              v-for="tech in techStack"
              :key="tech"
              class="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium backdrop-blur-sm hover:border-blue-500/50 hover:text-blue-400 transition-all"
            >
              {{ tech }}
            </span>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="300"
            class="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button
              @click="scrollToSection('contact')"
              class="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <span class="relative z-10 flex items-center gap-2">
                Entre em Contato
                <Mail
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </button>

            <button
              @click="scrollToSection('projects')"
              class="px-8 py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold hover:bg-slate-700/50 hover:border-blue-500/50 transition-all hover:scale-105"
            >
              Ver Projetos
            </button>

            <a
              href="/cv/rodrigo-k-weber-resume.pdf"
              download
              class="px-8 py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold hover:bg-slate-700/50 hover:border-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="350"
            class="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/rkweber05"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-700/50 transition-all hover:scale-110"
            >
              <Github class="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-kweber"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-700/50 transition-all hover:scale-110"
            >
              <Linkedin class="w-6 h-6" />
            </a>
            <a
              href="mailto:rkweber05@outlook.com"
              class="group p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-slate-700/50 transition-all hover:scale-110"
            >
              <Mail class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 50, scale: 0.8 }"
          :visible="{ opacity: 1, x: 0, scale: 1 }"
          :delay="200"
          class="hidden lg:flex justify-center items-center"
        >
          <div class="relative group">
            <div
              class="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"
              style="animation-duration: 3s"
            ></div>
            <div
              class="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-ping"
              style="animation-duration: 4s; animation-delay: 0.5s"
            ></div>

            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-600/30 rounded-full blur-3xl group-hover:blur-2xl transition-all"
            ></div>

            <div
              class="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl"
            >
              <div class="space-y-6">
                <div class="font-mono text-sm">
                  <div class="flex items-center gap-2 mb-4">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    <span class="ml-auto text-slate-500 text-xs"
                      >backend.go</span
                    >
                  </div>
                  <pre
                    class="text-slate-300"
                  ><code><span class="text-purple-400">package</span> <span class="text-blue-400">main</span>

<span class="text-purple-400">import</span> (
    <span class="text-green-400">"github.com/gin-gonic/gin"</span>
    <span class="text-green-400">"database/sql"</span>
)

<span class="text-purple-400">func</span> <span class="text-yellow-400">main</span>() {
    router := gin.<span class="text-blue-400">Default</span>()
    
    router.<span class="text-blue-400">GET</span>(<span class="text-green-400">"/api/v1"</span>, handler)
    router.<span class="text-blue-400">Run</span>(<span class="text-green-400">":8080"</span>)
}</code></pre>
                </div>

                <div
                  class="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700"
                >
                  <div class="text-center">
                    <div
                      class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      3+
                    </div>
                    <div class="text-xs text-slate-400 mt-1">
                      Anos de Experiência
                    </div>
                  </div>
                  <div class="text-center">
                    <div
                      class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                    >
                      20+
                    </div>
                    <div class="text-xs text-slate-400 mt-1">
                      Projetos Entregues
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0 }"
      :delay="500"
      @click="scrollToSection('about')"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
    >
      <span class="text-xs font-medium">Rolar para baixo</span>
      <ChevronDown class="w-6 h-6 animate-bounce group-hover:text-blue-400" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown, Github, Linkedin, Mail } from "lucide-vue-next";
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

const vantaRef = ref<HTMLElement | null>(null);
let vantaEffect: any = null;

const techStack = [
  "PHP",
  "Laravel",
  "Golang",
  "Java",
  "Spring Boot",
  "Vue.js",
  "Docker",
  "AWS",
  "Terraform",
];

onMounted(() => {
  if (vantaRef.value) {
    vantaEffect = DOTS({
      el: vantaRef.value,
      THREE,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      color: 0x3b82f6,
      color2: 0x1e40af,
      backgroundColor: 0x020617,

      size: 2.5,
      spacing: 32,
      showLines: false,
    });
  }
});

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy();
});

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>
