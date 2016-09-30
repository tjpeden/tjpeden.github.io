'use strict';

const Metalsmith  = require('metalsmith');
const drafts      = require('metalsmith-drafts');
const assets      = require('metalsmith-assets');
const layouts     = require('metalsmith-layouts');
const inPlace     = require('metalsmith-in-place');
const excerpts    = require('metalsmith-excerpts');
const redirect    = require('metalsmith-redirect');
const markdown    = require('metalsmith-markdown');
const permalinks  = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');

Metalsmith(__dirname)
.metadata({
  title: "Peden Software",
  description: "Projects and Experiments by TJ Peden",
  generator: "Matalsmith",
  generatorUrl: "http://www.metalsmith.io/",
  url: "http://peden.software/",
})
.destination('./public')
.clean(true)
.use(drafts())
.use(markdown())
.use(excerpts())
.use(collections())
.use(permalinks({
  pattern: ':title',
  linksets: [
    {
      match: { collection: 'posts' },
      pattern: 'blog/:date/:title',
    },
  ],
}))
.use(inPlace({
  engine: 'handlebars',
}))
.use(layouts({
  engine: 'handlebars',
  default: 'default.html',
}))
.use(redirect({
  '/2016/09/13/on-the-fence.html': '/on-the-fence',
}))
.use(assets())
.build((error, files) => { if(error) { throw error; } });
