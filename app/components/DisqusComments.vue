<script setup lang="ts">
interface Props {
  identifier: string
  title: string
  url: string
}

const props = defineProps<Props>()
const appConfig = useAppConfig()

const disqusShortname = appConfig.site.disqus

onMounted(() => {
  if (!disqusShortname) return

  // Set config before loading script
  // @ts-expect-error Disqus global
  window.disqus_config = function () {
    // @ts-expect-error Disqus global
    this.page.url = props.url
    // @ts-expect-error Disqus global
    this.page.identifier = props.identifier
    // @ts-expect-error Disqus global
    this.page.title = props.title
  }

  // Check if Disqus is already loaded (SPA navigation)
  // @ts-expect-error Disqus global
  if (window.DISQUS) {
    // @ts-expect-error Disqus global
    window.DISQUS.reset({
      reload: true,
      config: function () {
        // @ts-expect-error Disqus global
        this.page.url = props.url
        // @ts-expect-error Disqus global
        this.page.identifier = props.identifier
        // @ts-expect-error Disqus global
        this.page.title = props.title
      },
    })
  }
  else {
    // First load - inject the script
    const d = document
    const s = d.createElement('script')
    s.src = `https://${disqusShortname}.disqus.com/embed.js`
    s.setAttribute('data-timestamp', String(+new Date()))
    s.async = true
    ;(d.head || d.body).appendChild(s)
  }
})
</script>

<template>
  <div v-if="disqusShortname">
    <div id="disqus_thread" />
    <noscript>
      Please enable JavaScript to view the
      <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
    </noscript>
  </div>
  <div
    v-else
    class="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm"
  >
    Comments are not configured. Set <code>disqus</code> in app.config.ts to enable.
  </div>
</template>
