# JW Player for Meteor

An easily configured CDN hosted version of JWPlayer using your own license. 

NOTE: This version only works with JWPlayer v6.  They changed their CDN URL in v7.

## Install

```bash
meteor add jeremy:jwplayer
```

## Setup

The standard JW Player CDN hosted library provided to you in your account will have a unique token in the URL.  It should look like the following:

```html
<script src="https://jwpsrv.com/library/YOUR_KEY_HERE.js"></script>
```

Simply grab the `YOUR_KEY_HERE` section and pass that into the `JWPlayer.load()` call in this plugin and the CDN hosted script will be added to your `<head>`.

Load globally:

```js
// anywhere on client
JWPlayer.load('YOUR_KEY_HERE');
```

Or only on specific routes:

```js
// Iron Router
Router.onBeforeAction(function() {
  JWPlayer.load('YOUR_KEY_HERE');
  this.next();
}, { only: ['route1', 'route2'] });
```

```js
// Flow Router
FlowRouter.triggers.enter([JWPlayer.load('YOUR_KEY_HERE')], {
  only: ['route1', 'route2']
});
```

## Config

Just add an empty div with a unique id to any template:

```html
<template name="myTemplate">
  <div id="playa"></div>
</template>
```

and then configure your player: 

```js
// use JWPlayer.loaded() to reactively check that the lib is ready
Template.myTemplate.onRendered(function() {
  this.autorun(function() {
    if (JWPlayer.loaded()) {
      jwplayer('playa').setup({
        file: 'http://example.com/my-video.mp4',
        width: '100%',
        aspectratio: '16:9',
        autostart: true
      });
    }
  });
});
```

## Resources

- [JW Player Homepage](http://www.jwplayer.com/)
- [JW Player Support/Docs](http://support.jwplayer.com/)
- [JW Player Javascript API](http://support.jwplayer.com/customer/portal/topics/564475-javascript-api/articles)