export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc',
    },
  },

  site: {
    title: 'Peden Software',
    description: 'Projects and Experiments by TJ Peden',
    url: 'https://peden.software',

    owner: {
      name: 'TJ Peden',
      bio: "I'm a software developer, programming language enthusiast, and maker. I love to learn and share what I've learned.",
      avatar: '/images/avatar.jpg',
    },

    social: {
      github: 'https://github.com/tjpeden',
      twitter: 'https://twitter.com/tjpeden',
      linkedin: 'https://www.linkedin.com/in/tjpeden',
    },

    // Integrations
    disqus: 'peden-software',
    googleAnalytics: 'UA-85015540-1',
  },

  navigation: [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
  ],
})
