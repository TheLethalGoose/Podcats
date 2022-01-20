const podcastImport = require("../models/persistence.js")
let myPodcasts = podcastImport.podcasts;

const fertig = function () {
  console.log(myPodcasts);
  myPodcasts.forEach((podcast) => podcast.printEpisdoes());
};


podcastImport.abonnieren("https://lanz-precht.podigee.io/feed/mp3", fertig);

//podcastImport.abonnieren("https://anchor.fm/s/1374d750/podcast/rss", fertig);





