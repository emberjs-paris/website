/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    name: "EmberJS Paris Meetup",
    short_name: "Ember Paris",
    description: "EmberJS Paris Meetup",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "images/tile.png",
        sizes: "180x135",
        type: "image/png"
      }
    ]
  };
}
