<script setup lang="ts">
const appConfig = useAppConfig()

useSeoMeta({
  title: 'About',
  description: 'Learn more about TJ Peden and Peden Software.',
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <header class="mb-12">
      <h1 class="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
        About
      </h1>
      <p class="text-lg text-zinc-600 dark:text-zinc-400">
        Learn more about me and what I do.
      </p>
      <div class="accent-line w-20 mt-6" />
    </header>

    <!-- Content -->
    <div class="grid lg:grid-cols-3 gap-12">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {{ appConfig.site.owner.name }}
          </h2>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {{ appConfig.site.owner.bio }}
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            What I Do
          </h3>
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="flex items-start gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
              <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                <UIcon
                  name="i-lucide-code-2"
                  class="w-5 h-5 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <h4 class="font-medium text-zinc-900 dark:text-zinc-100">Software Development</h4>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Web apps, APIs, and more</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
              <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                <UIcon
                  name="i-lucide-cpu"
                  class="w-5 h-5 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <h4 class="font-medium text-zinc-900 dark:text-zinc-100">Electronics & Hardware</h4>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Microcontrollers & sensors</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
              <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                <UIcon
                  name="i-lucide-sparkles"
                  class="w-5 h-5 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <h4 class="font-medium text-zinc-900 dark:text-zinc-100">Maker Projects</h4>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Creative prototypes</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
              <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                <UIcon
                  name="i-lucide-book-open"
                  class="w-5 h-5 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <h4 class="font-medium text-zinc-900 dark:text-zinc-100">Learning & Teaching</h4>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Sharing knowledge</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Sidebar -->
      <aside>
        <div class="sticky top-24 space-y-6">
          <!-- Connect Card -->
          <div class="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-teal-50 dark:from-primary-950/50 dark:to-teal-950/50 border border-primary-100 dark:border-primary-900">
            <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Connect With Me
            </h3>
            <div class="flex flex-col gap-2">
              <UButton
                v-for="(url, platform) in appConfig.site.social"
                :key="platform"
                :to="url"
                target="_blank"
                variant="soft"
                color="primary"
                :icon="`i-lucide-${platform}`"
                class="capitalize justify-start"
                block
              >
                {{ platform }}
              </UButton>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
