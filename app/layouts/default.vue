<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Top accent line -->
    <div class="accent-line" />

    <UHeader>
      <template #title>
        <NuxtLink
          to="/"
          class="flex items-center gap-2 group"
        >
          <span class="text-xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-500 transition-colors">
            Peden Software
          </span>
        </NuxtLink>
      </template>

      <template #center>
        <UNavigationMenu
          :items="appConfig.navigation"
          class="hidden md:flex"
        />
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <UButton
            to="https://github.com/tjpeden"
            target="_blank"
            variant="ghost"
            color="neutral"
            icon="i-lucide-github"
            aria-label="GitHub"
          />
          <UColorModeButton />
        </div>
      </template>

      <template #body>
        <UNavigationMenu
          :items="appConfig.navigation"
          orientation="vertical"
          class="md:hidden"
        />
      </template>
    </UHeader>

    <UMain class="flex-1">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <slot />
      </div>
    </UMain>

    <UFooter class="border-t border-zinc-200 dark:border-zinc-800">
      <template #left>
        <span class="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {{ new Date().getFullYear() }} Peden Software. All rights reserved.
        </span>
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <UButton
            v-for="(url, platform) in appConfig.site.social"
            :key="platform"
            :to="url"
            target="_blank"
            variant="ghost"
            color="neutral"
            :icon="`i-lucide-${platform}`"
            :aria-label="platform"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>
