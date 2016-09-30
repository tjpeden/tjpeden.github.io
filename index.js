'use strict';

let Metalsmith  = require('metalsmith');
let drafts      = require('metalsmith-drafts');
let layouts     = require('metalsmith-layouts');
let inPlace     = require('metalsmith-in-place');
let excerpts    = require('metalsmith-excerpts');
let redirect    = require('metalsmith-redirect');
let markdown    = require('metalsmith-markdown');
let permalinks  = require('metalsmith-permalinks');
let collections = require('metalsmith-collections');

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
.use(permalinks({
  pattern: ':title',
  linksets: [
    {
      match: { collection: 'posts' },
      pattern: 'blog/:date/:title',
    },
  ],
}))
.use(excerpts())
.use(collections())
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
.build((error, files) => { if(error) { throw error; } });
