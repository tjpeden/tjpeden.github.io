'use strict';

const Metalsmith       = require('metalsmith');
const drafts           = require('metalsmith-drafts');
const assets           = require('metalsmith-assets');
const layouts          = require('metalsmith-layouts');
const inPlace          = require('metalsmith-in-place');
const gravatar         = require('metalsmith-gravatar');
const excerpts         = require('metalsmith-excerpts');
const redirect         = require('metalsmith-redirect');
const markdown         = require('metalsmith-markdown');
const permalinks       = require('metalsmith-permalinks');
const collections      = require('metalsmith-collections');
const discoverHelpers  = require('metalsmith-discover-helpers');
const discoverPartials = require('metalsmith-discover-partials');

Metalsmith(__dirname)
.metadata({
  site: {
    // Site Info
    title: "Peden Software",
    description: "Projects and Experiments by TJ Peden",
    url: "http://peden.software/",

    disqus: 'peden-software',
    google_analytics: 'UA-85015540-1',

    // Site Locale Info
    timezone: 'America/Chicago',
    locale: 'en_US',

    // Generator Info
    generator: {
      name: 'Matalsmith',
      url: "http://www.metalsmith.io/",
    },

    // Theme Info
    theme: {
      name: 'Neo-HPSTR Metalsmith',
      url: "https://github.com/tjpeden/nep-hpstr-metalsmith-theme",
    },

    // Owner Info
    owner: {
      name: "TJ Peden",
      url: "http://peden.software/",
      bio: "I'm a software developer, programming language enthusiast, hardware and software guru, tech fanatic.",
      twitter: 'tjpeden',
      networks: [{
        name: 'GitHub',
        icon: 'github-alt',
        url: "https://github.com/tjpeden",
      }, {
        name: 'CodePen',
        icon: 'codepen',
        url: "http://codepen.io/tjpeden/",
      }, {
        name: 'Facebook',
        icon: 'facebook-official',
        url: "https://www.facebook.com/tj.peden",
      }, {
        name: 'Twitter',
        icon: 'twitter',
        url: "https://twitter.com/tjpeden",
      }, {
        name: 'LinkedIn',
        icon: 'linkedin',
        url: "https://www.linkedin.com/in/tjpeden",
      }],
    },
  },
})
.destination('./public')
.clean(false)
.use(drafts())
.use(markdown())
.use(excerpts())
.use(collections())
.use(gravatar({
  owner: "tj@tjcoding.com",
}))
.use(permalinks({
  pattern: ':title',
  linksets: [
    {
      match: { collection: 'posts' },
      pattern: 'blog/:date/:title',
    },
  ],
}))
.use(discoverHelpers())
.use(discoverPartials())
.use(inPlace({
  engine: 'handlebars',
}))
.use(layouts({
  engine: 'handlebars',
  default: 'page.html',
}))
.use(redirect({
  '/2016/09/13/on-the-fence.html': '/on-the-fence',
}))
.use(assets({
  source: './assets',
}))
.build((error, files) => { if(error) { throw error; } });
