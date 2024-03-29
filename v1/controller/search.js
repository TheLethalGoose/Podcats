const podcasts = require("../models/persistence");

module.exports = function (titel) {

  var podcastList = podcasts.podcastList;
  var matchingPodcasts = [];

  for (var i = 0; i < podcastList.length; i++) {
    if (podcastList[i].title.toLowerCase().includes(titel.toLowerCase())) {
      matchingPodcasts.push(podcastList[i]);
    }
  }
  return matchingPodcasts;

};