Package.describe({
  name: 'jwplayer',
  summary: 'An easily configured CDN hosted version of JWPlayer using your own license.'
});

Package.on_use(function (api) {
   api.add_files('jwplayer.js', 'client');
});