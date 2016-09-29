'use strict';

let Metalsmith = require('metalsmith');
let drafts     = require('metalsmith-drafts');
let layouts    = require('metalsmith-layouts');
let redirect   = require('metalsmith-redirect');
let markdown   = require('metalsmith-markdown');
let permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
.metadata({
  title: "Peden Software",
  description: "Projects and Experiments by TJ Peden",
  generator: "Matalsmith",
  url: "http://peden.software/",
})
.destination('./public')
.clean(true)
.use(drafts())
.use(markdown())
.use(permalinks())
.use(layouts({
  engine: 'handlebars',
  default: 'default.html',
  directory: './layouts',
}))
.use(redirect({
  '/2016/09/13/on-the-fence.html': '/on-the-fence',
}))
.build((error, files) => { if(error) { throw error; } });
