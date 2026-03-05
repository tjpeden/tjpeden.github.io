<script setup lang="ts">
useHead({
  script: [
    { src: 'https://aframe.io/releases/1.4.0/aframe.min.js', defer: true },
  ],
})

useSeoMeta({
  title: 'On The Fence - WebVR Experience',
  description: 'An interactive WebVR experience exploring the concept of being on the fence.',
  ogImage: '/images/on-the-fence-preview.png',
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
        <a-assets>
          <img
            id="johnson-logo"
            src="/images/johnson-logo-dark.png"
            crossorigin="anonymous"
          >
          <a-mixin
            id="ground"
            rotation="-90 0 0"
            geometry="height: 20; width:20"
          />
        </a-assets>

        <a-sky
          radius="20"
          color="skyblue"
        />

        <a-light
          type="point"
          intensity="2"
          color="white"
          position="0 1 0"
        />
        <a-light
          type="ambient"
          color="#ccc"
          intensity="0.6"
        />

        <a-plane
          mixin="ground"
          material="color: blue"
          position="-10 -1 -10"
        />
        <a-plane
          mixin="ground"
          material="color: red"
          position="10 -1 -10"
        />
        <a-plane
          mixin="ground"
          material="color: gold"
          position="0 -1 10"
          width="40"
        />

        <a-plane
          src="#johnson-logo"
          position="0 0 1"
          rotation="0 180 0"
        />

        <a-entity
          text="value: If you're on the fence..."
          position="-3.5 2 -6"
        />
        <a-entity
          text="value: ...look around."
          position="-1 1 -6"
        />
        <a-entity
          text="value: #LetGaryDebate; color: gold"
          position="2.5 1.15 2"
          rotation="0 180 0"
        />

        <a-entity
          camera
          look-controls
        />
      </a-scene>
    </ClientOnly>
  </div>
</template>
