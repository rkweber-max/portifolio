<template>
  <section id="skills" class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="0"
        class="text-center mb-16"
      >
        <h2 class="mb-4 text-3xl md:text-4xl font-bold text-slate-900">
          Habilidades Técnicas
        </h2>
        <p class="text-slate-600">
          Tecnologias e ferramentas que domino no dia a dia
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(category, catIndex) in skillCategories"
          :key="catIndex"
          v-motion
          :initial="{ opacity: 0, y: 30, scale: 0.95 }"
          :visible="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 600,
              ease: 'easeOut',
            },
          }"
          :delay="catIndex * 150"
          class="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
        >
          <h3 class="mb-6 text-xl font-semibold text-slate-900">
            {{ category.category }}
          </h3>
          <div class="space-y-4">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
            >
              <div class="flex justify-between mb-2">
                <span class="text-slate-700 font-medium">{{ skill.name }}</span>
                <span class="text-slate-500 font-semibold"
                  >{{ skill.level }}%</span
                >
              </div>
              <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  v-motion
                  :initial="{ width: '0%' }"
                  :visible="{
                    width: `${skill.level}%`,
                    transition: {
                      duration: 1000,
                      ease: 'easeInOut',
                      delay: 200,
                    },
                  }"
                  :delay="catIndex * 150 + skillIndex * 100"
                  class="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    category: "Backend",
    skills: [
      { name: "PHP (Laravel)", level: 90 },
      { name: "Golang", level: 90 },
      { name: "Java (Spring Boot)", level: 85 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Vue 3", level: 80 },
      { name: "Nuxt", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Fundamentais",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "SQL", level: 85 },
    ],
  },
];
</script>
