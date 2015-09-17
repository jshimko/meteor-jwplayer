
JWPlayer = {

  load: _.once(function(token) {
    if (!token) {
      console.warn('Please add your token to JWPlayer.load()');
      return
    }
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://content.jwplatform.com/libraries/' + token + '.js';
    document.head.appendChild(script);

    this._checkReady();
  }),

  _checkReady: function() {
    var self = this;
    var i = 0;
    var checkReady = Meteor.setInterval(function(){
      if (typeof jwplayer !== 'undefined') {
        self._loaded.set(true);
        Meteor.clearInterval(checkReady);
      } else {
        i += 100;
        if (i > 5000) {
          // stop checking if the lib isn't loaded within 5 secs
          Meteor.clearInterval(checkReady);
          console.warn('Error loading JW Player from CDN');
        }
      }
    }, 100);
  },

  _loaded: new ReactiveVar(false),

  loaded: function() {
    return this._loaded.get();
  }

};
