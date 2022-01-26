const parser = require("./podcastParser");

let podcasts = [];

class Podcast {
  constructor(
    title,
    subtitle,
    description,
    imageURL,
    lastUpdated,
    feedURL,
    author,
    ownerName,
    ownerEmail,
    categories
  ) {
    this.title = title;
    this.description = description;
    this.subtitle = subtitle;
    this.imageURL = imageURL;
    this.lastUpdated = lastUpdated;
    this.feedURL = feedURL;
    this.author = author;
    this.ownerName = ownerName,
    this.ownerEmail = ownerEmail,
    this.categories = categories;
    this.episodes = [];
  }

  addEpisode(episode) {
    this.episodes.push(episode);
    this.episodes.sort(function (a, b) {
      return b.pubDate - a.pubDate;
    });
    return this;
  }
  printEpisodes() {
    this.episodes.forEach((episode) => console.log(episode));
  }
}

class Episode {
  constructor(titel, description, duration, pubDate, audio) {
    this.title = titel;
    this.description = description;
    this.duration = duration;
    this.pubDate = pubDate;

    this.audio = audio;
  }

  getdurationInStundenUndMinuten() {

    let minuten = this.duration / 60;

    let stunden = Math.floor(minuten/60);
    minuten = Math.round(minuten % 60);

    return stunden + "h " + minuten + "m";
  }
}

class EpisodeAudio {
  constructor(URL, type, size) {
    this.URL = URL;
    this.type = type;
    this.size = size;
  }
}

/**
 * Abonniert einen Podcast, indem die Daten von der gegebenen Feed-URL
 * importiert werden. Der Import selbst erfolgt asynchron, daher wird
 * fuer Folgetaetigkeiten eine Callback-Funktion benötigt.
 *
 * @param {String} URL Die Feed-URL des Podcasts, welcher abonniert werden soll.
 * @param {Function} callback Callback-Funktion, die festlegt, was nach erfolgtem
 *                            Import passieren soll.
 */
function abonnieren(URL, callback) {
  parser.parseFeed(URL,feed => {
    var podcast = konvertieren(URL, feed);
    podcasts.push(podcast);
    if (callback) callback(podcast.title);
  });
}

/**
 * Konvertiert die von einer URL importierten Feed-Daten in fuer diese Web-
 * Anwendung passende Datenobjekte (Podcast, Episode, EpisodeAudio)
 *
 * @param {String} URL Die Feed-URL des Podcasts, von welcher importiert wurde.
 * @param {Object} feed Feed-Objekt gemaess https://www.npmjs.com/package/podcast-feed-parser#default
 */
function konvertieren(URL, feed) {
  var feedMeta = feed.meta;
  var feedEpisodes = feed.episodes;

  var newPodcast = new Podcast(
    feedMeta.title,
    feedMeta.subtitle,
    feedMeta.description,
    feedMeta.imageURL,
    feedMeta.lastUpdated,
    feedMeta.link,
    feedMeta.author,
    feedMeta.owner.name,
    feedMeta.owner.email,
    feedMeta.categories
  );

  feedEpisodes.forEach(function (episode) {
    var newEpisode = new Episode(
      episode.title,
      episode.description,
      episode.duration,
      episode.pubDate,
      new EpisodeAudio(
        episode.enclosure.url,
        episode.enclosure.type,
        episode.enclosure.length
      )
    );
    newPodcast.episodes.push(newEpisode);
  });
  
  return newPodcast;

}
module.exports = {

  podcastList: podcasts,
  abonnieren: abonnieren

}


