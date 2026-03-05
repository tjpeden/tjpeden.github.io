<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function calculateReadingTime(content: string) {
  const wordsPerMinute = 200
  const words = content?.split(/\s+/).length || 0
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}

useSeoMeta({
  title: 'Blog',
  description: 'Articles about software development, electronics, and maker projects.',
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <header class="mb-12">
      <h1 class="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
        Blog
      </h1>
      <p class="text-lg text-zinc-600 dark:text-zinc-400">
        Articles about software development, electronics, and maker projects.
      </p>
      <div class="accent-line w-20 mt-6" />
    </header>

    <!-- Posts Grid -->
    <div class="space-y-8">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="group block"
      >
        <article class="flex flex-col sm:flex-row gap-6 p-6 -mx-6 rounded-xl transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
          <!-- Thumbnail -->
          <div
            v-if="post.image"
            class="sm:w-48 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg"
          >
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-48 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
            >
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <!-- Tags -->
            <div
              v-if="post.tags?.length"
              class="flex flex-wrap gap-2 mb-2"
            >
              <span
                v-for="tag in post.tags.slice(0, 3)"
                :key="tag"
                class="text-xs font-medium text-primary-600 dark:text-primary-400"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ post.title }}
            </h2>

            <!-- Description -->
            <p class="text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
              {{ post.description }}
            </p>

            <!-- Meta -->
            <div class="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
              <span class="flex items-center gap-1">
                <UIcon name="i-lucide-calendar" class="w-4 h-4" />
                {{ formatDate(post.date) }}
              </span>
              <span class="flex items-center gap-1">
                <UIcon name="i-lucide-clock" class="w-4 h-4" />
                {{ calculateReadingTime(post.rawbody) }} min read
              </span>
              <span class="hidden sm:flex items-center gap-1 text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                Read article
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
              </span>
            </div>
          </div>
        </article>
      </NuxtLink>
    </div>

    <!-- Empty State -->
    <div
      v-if="!posts?.length"
      class="text-center py-16"
    >
      <UIcon
        name="i-lucide-file-text"
        class="w-12 h-12 text-zinc-400 mx-auto mb-4"
      />
      <p class="text-zinc-600 dark:text-zinc-400">No posts yet. Check back soon!</p>
    </div>
  </div>
</template>
