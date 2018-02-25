//
//  Overdrive.js
//  BeardedSpice
//
//  Created by Cody Antonio Gagnon on 2-24-18.
//  Copyright (c) 2015-2017 GPL v3 http://www.gnu.org/licenses/gpl.html
//

// Use a syntax checker to ensure validity. One is provided by nodejs (`node -c filename.js`)
// Normal formatting is supported (can copy/paste with newlines and indentations)

/*

TODO:
isPlaying:
previous:
next:
pause:
favorite:
trackInfo: function () {
  return {
      'track': 'the name of the track',
      'album': 'the name of the current album',
      'artist': 'the name of the current artist',
      'image': 'http://www.example.com/some/album/artwork.png',
      'favorited': 'true/false if the track has been favorited',
  };
*/

BSStrategy = {
  version: 1,
  displayName: "Strategy Name",
  accepts: {
    method: "predicateOnTab" /* OR "script" */,
    /* Use these if "predicateOnTab" */
    format: "%K LIKE[c] '*.listen.overdrive.com*'",
    args: ["URL" /* OR "title" */]
  },

  isPlaying: function () { /* javascript that returns a boolean */ },
  toggle:    function () { document.querySelector('.play-toggle-button').click() },
  previous:  function () { /* switch to previous track if any */ },
  next:      function () { /* switch to next track if any */ },
  pause:     function () { /* pause site playing */ },
  favorite:  function () { /* toggles favorite on/off */},
  /*
  - Return a dictionary of namespaced key/values here.
  All manipulation should be supported in javascript.

  - Namespaced keys currently supported include: track, album, artist, favorited, image (URL)
  */
  trackInfo: function () {
    return {
        'track': 'the name of the track',
        'album': 'the name of the current album',
        'artist': 'the name of the current artist',
        'image': 'http://www.example.com/some/album/artwork.png',
        'favorited': 'true/false if the track has been favorited',
    };
  }
}
// The file must have an empty line at the end.
