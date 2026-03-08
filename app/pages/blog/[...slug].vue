<script setup lang="ts">
const route = useRoute()
const slugArray = route.params.slug as string[]
const slug = Array.isArray(slugArray) ? slugArray.join('/') : slugArray
const path = `/blog/${slug}`

const { data: post, error } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog')
    .path(path)
    .first()
)

// Only throw 404 during SSR/prerender, not during client hydration
if (import.meta.server && !post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

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
  title: post.value?.title,
  description: post.value?.description,
  ogImage: post.value?.image,
})
</script>

<template>
  <!-- Show nothing during hydration if post is temporarily null -->
  <div v-if="!post && !error" class="flex items-center justify-center min-h-96">
    <UIcon name="i-lucide-loader-2" class="w-8 h-8 animate-spin text-primary-500" />
  </div>
  
  <!-- Show error if query failed -->
  <div v-else-if="error || !post" class="text-center py-20">
    <h1 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Post not found</h1>
    <p class="text-zinc-600 dark:text-zinc-400 mb-6">The blog post you're looking for doesn't exist.</p>
    <UButton to="/blog" variant="soft">Back to Blog</UButton>
  </div>
  
  <article v-else>
    <!-- Hero Section with Featured Image -->
    <header class="mb-10">
      <!-- Back link -->
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-6"
      >
        <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
        Back to Blog
      </NuxtLink>

      <!-- Tags -->
      <div
        v-if="post.tags?.length"
        class="flex gap-2 mb-4"
      >
        <UBadge
          v-for="tag in post.tags"
          :key="tag"
          color="primary"
          variant="subtle"
          size="sm"
        >
          {{ tag }}
        </UBadge>
      </div>

      <!-- Title -->
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
        {{ post.title }}
      </h1>

      <!-- Description -->
      <p class="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        {{ post.description }}
      </p>

      <!-- Meta info -->
      <div class="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <span class="flex items-center gap-1.5">
          <UIcon name="i-lucide-calendar" class="w-4 h-4 text-primary-500" />
          {{ formatDate(post.date) }}
        </span>
        <span class="flex items-center gap-1.5">
          <UIcon name="i-lucide-clock" class="w-4 h-4 text-primary-500" />
          {{ calculateReadingTime(post.rawbody) }} min read
        </span>
      </div>

      <!-- Featured Image -->
      <div
        v-if="post.image"
        class="mt-8 -mx-4 sm:mx-0"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full sm:rounded-xl shadow-lg max-h-96 object-cover"
        >
      </div>
    </header>

    <!-- Article Content -->
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <ContentRenderer :value="post" />
    </div>

    <!-- Footer Section -->
    <footer class="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <!-- Social Sharing -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <span class="text-sm font-medium text-zinc-700 dark:text-zinc-300">Share this post</span>
        <div class="flex gap-2">
          <UButton
            :to="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://peden.software${post.path}`)}`"
            target="_blank"
            variant="soft"
            color="neutral"
            icon="i-lucide-twitter"
            aria-label="Share on Twitter"
          >
            Twitter
          </UButton>
          <UButton
            :to="`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://peden.software${post.path}`)}&title=${encodeURIComponent(post.title)}`"
            target="_blank"
            variant="soft"
            color="neutral"
            icon="i-lucide-linkedin"
            aria-label="Share on LinkedIn"
          >
            LinkedIn
          </UButton>
        </div>
      </div>

      <!-- Comments -->
      <div class="mt-12">
        <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Comments</h2>
        <ClientOnly>
          <DisqusComments
            :identifier="post.path"
            :title="post.title"
            :url="`https://peden.software${post.path}`"
          />
        </ClientOnly>
      </div>
    </footer>
  </article>
</template>
