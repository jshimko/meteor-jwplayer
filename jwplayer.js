// Set up the JW Player script import in the head of the page.

var token = Meteor.settings.public.jwplayer.cdn_token;

var script = document.createElement('script');

script.type = 'text/javascript';
script.src = 'https://jwpsrv.com/library/' + token + '.js';

var head = document.getElementsByTagName('head')[0];

head.appendChild(script);
