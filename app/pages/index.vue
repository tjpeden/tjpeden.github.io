<script setup lang="ts">
const appConfig = useAppConfig()

const { data: recentPosts } = await useAsyncData('recent-posts', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .limit(3)
    .all()
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

useSeoMeta({
  title: appConfig.site.title,
  description: appConfig.site.description,
})

const interests = [
  {
    icon: 'i-lucide-code-2',
    title: 'Software Development',
    description: 'Building web applications and exploring new programming languages and frameworks.',
  },
  {
    icon: 'i-lucide-cpu',
    title: 'Electronics & Hardware',
    description: 'Working with microcontrollers, sensors, and creating interactive hardware projects.',
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Maker Projects',
    description: 'Combining software and hardware to build creative solutions and prototypes.',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-12 sm:py-20 -mt-8 mb-16">
      <!-- Background decoration -->
      <div class="absolute inset-0 hero-gradient pattern-grid opacity-50 -z-10" />

      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          Projects &amp;
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">
            Experiments
          </span>
        </h1>
        <p class="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          {{ appConfig.site.description }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            to="/blog"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
          >
            Read the Blog
          </UButton>
          <UButton
            to="/about"
            size="lg"
            variant="outline"
            color="neutral"
          >
            About Me
          </UButton>
        </div>
      </div>
    </section>

    <!-- What I Work On -->
    <section class="mb-20">
      <div class="flex items-center gap-4 mb-8">
        <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          What I Work On
        </h2>
        <div class="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <div class="grid sm:grid-cols-3 gap-6">
        <div
          v-for="item in interests"
          :key="item.title"
          class="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
        >
          <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4">
            <UIcon
              :name="item.icon"
              class="w-6 h-6 text-primary-600 dark:text-primary-400"
            />
          </div>
          <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            {{ item.title }}
          </h3>
          <p class="text-sm text-zinc-600 dark:text-zinc-400">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Recent Posts -->
    <section v-if="recentPosts?.length">
      <div class="flex items-center gap-4 mb-8">
        <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Recent Posts
        </h2>
        <div class="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
        <NuxtLink
          to="/blog"
          class="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center gap-1"
        >
          View all
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="post in recentPosts"
          :key="post.path"
          :to="post.path"
          class="group block"
        >
          <article class="h-full rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/10">
            <!-- Image -->
            <div
              v-if="post.image"
              class="h-40 overflow-hidden"
            >
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              >
            </div>
            <div
              v-else
              class="h-40 bg-gradient-to-br from-primary-100 to-teal-100 dark:from-primary-900/50 dark:to-teal-900/50 flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-file-text"
                class="w-12 h-12 text-primary-300 dark:text-primary-700"
              />
            </div>

            <!-- Content -->
            <div class="p-5">
              <div class="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 mb-2">
                <span>{{ formatDate(post.date) }}</span>
                <span v-if="post.tags?.length">
                  &middot;
                  <span class="text-primary-600 dark:text-primary-400">{{ post.tags[0] }}</span>
                </span>
              </div>
              <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {{ post.description }}
              </p>
            </div>
          </article>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
