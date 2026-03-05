<script setup lang="ts">
useHead({
  script: [
    { src: 'https://aframe.io/releases/1.4.0/aframe.min.js', defer: true },
    { src: '/javascripts/aframe-glow-shader.js', defer: true },
  ],
})

useSeoMeta({
  title: 'A-Frame Glow Shader',
  description: 'A custom WebGL shader for A-Frame that creates a glowing effect around objects.',
})
</script>

<template>
  <div class="min-h-screen bg-black">
    <div class="absolute top-4 left-4 z-10">
      <UButton
        to="/projects"
        variant="solid"
        color="white"
        icon="i-lucide-arrow-left"
      >
        Back to Projects
      </UButton>
    </div>

    <ClientOnly>
      <a-scene embedded class="w-full h-screen">
        <a-sky
          radius="100"
          color="black"
        />
        <a-entity position="0 0 -15">
          <a-sphere
            radius="1"
            color="yellow"
          />
          <a-entity material="shader: glow-shader; glowColor: 1.0 1.0 0.0" />
        </a-entity>
      </a-scene>
    </ClientOnly>
  </div>
</template>
