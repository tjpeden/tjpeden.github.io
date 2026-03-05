<script setup lang="ts">
useSeoMeta({
  title: 'Projects',
  description: 'A collection of software and hardware projects.',
})

const projects = [
  {
    title: 'Interrupt-Driven Reverse Geocache Box',
    description: 'A location-aware puzzle box that helped my best friend propose to his wife. Features GPS navigation, OLED display, and power-efficient interrupt-driven design.',
    image: '/images/rgb_photos/deployed.jpg',
    link: '/blog/reverse-geocache-box',
    tags: ['Hardware', 'Arduino', 'GPS'],
    github: 'https://github.com/tjpeden/interrupt-driven-rgb',
  },
  {
    title: 'On The Fence',
    description: 'A WebVR experience built with A-Frame. An interactive 3D scene exploring the concept of being "on the fence" about decisions.',
    image: '/images/on-the-fence-preview.png',
    link: '/projects/on-the-fence',
    tags: ['WebVR', 'A-Frame', 'JavaScript'],
  },
  {
    title: 'A-Frame Glow Shader',
    description: 'A custom WebGL shader for A-Frame that creates a glowing effect around objects. Demonstrates custom material development for WebVR.',
    link: '/projects/aframe-glow-shader',
    tags: ['WebVR', 'A-Frame', 'GLSL'],
  },
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <header class="mb-12">
      <h1 class="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
        Projects
      </h1>
      <p class="text-lg text-zinc-600 dark:text-zinc-400">
        A collection of software and hardware projects I've worked on.
      </p>
      <div class="accent-line w-20 mt-6" />
    </header>

    <!-- Projects Grid -->
    <div class="grid md:grid-cols-2 gap-8">
      <article
        v-for="project in projects"
        :key="project.title"
        class="group rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/10"
      >
        <!-- Image -->
        <div
          v-if="project.image"
          class="h-48 overflow-hidden"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          >
        </div>
        <div
          v-else
          class="h-48 bg-gradient-to-br from-primary-100 to-teal-100 dark:from-primary-900/50 dark:to-teal-900/50 flex items-center justify-center"
        >
          <UIcon
            name="i-lucide-box"
            class="w-16 h-16 text-primary-300 dark:text-primary-700"
          />
        </div>

        <!-- Content -->
        <div class="p-6">
          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-3">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs font-medium text-primary-600 dark:text-primary-400"
            >
              #{{ tag }}
            </span>
          </div>

          <h3 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="flex gap-3">
            <UButton
              v-if="project.link"
              :to="project.link"
              size="sm"
            >
              View Project
            </UButton>
            <UButton
              v-if="project.github"
              :to="project.github"
              target="_blank"
              variant="outline"
              color="neutral"
              size="sm"
              icon="i-lucide-github"
            >
              Source
            </UButton>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
