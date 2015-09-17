Package.describe({
  name: 'jeremy:jwplayer',
  summary: 'An easily configured CDN hosted version of JWPlayer using your own license.',
  version: '6.0.0',
  git: 'https://github.com/jshimko/meteor-jwplayer.git'
});

Package.on_use(function (api) {

  api.use([
    'underscore@1.0.3',
    'reactive-var@1.0.5'
  ]);

  api.addFiles('jwplayer.js', 'client');

  api.export('JWPlayer');
});