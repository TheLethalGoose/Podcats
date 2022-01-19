function getViewportWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

console.log("Die Viewport-Breite beträgt: " + getViewportWidth() + " Pixel");

class Podcast {
  constructor(
    titel,
    beschreibung,
    autor,
    besitzerName,
    besitzerEmail,
    bildUrl,
    feedUrl,
    letztesUpdate,
    kategorien
  ) {

    this.titel = titel;
    this.beschreibung = beschreibung;
    this.autor = autor;
    this.besitzerName = besitzerName;
    this.besitzerEmail = besitzerEmail;
    this.bildUrl = bildUrl;
    this.feedUrl = feedUrl;
    this.letztesUpdate = letztesUpdate;

    this.episoden = [];
    this.kategorien = kategorien;
  }

  addEpisode(episode) {
    this.episoden.push(episode);
    this.episoden.sort(function (a, b) {
      return b.datum - a.datum;
    });
    return this;
  }
}

class Episode {
  constructor(titel,beschreibung,dauer,datum,audio) {
    this.titel = titel;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
    this.datum = datum;
    
    this.audio = audio;

  }

  getDauerInStundenUndMinuten() {
    var stunden = Math.floor(this.dauer / 36000);

    var minuten = Math.floor(stunden % 100);
    stunden /= 100;

    return Math.floor(stunden) + "h " + minuten + "m";
  }
}

class EpisodeAudio {
  constructor(url,typ,groesse) {
    this.url = url;
    this.typ = typ;
    this.groesse = groesse;
  }
}

let podcast1 = new Podcast(
  "Fest und Flauschig",
  "Der Podcast mit Jan und Olli",
  "Jan Böhmermann,Olli Schulz",
  "Spotify",
  "daniel@spotify.com",
  "/assets/img/foot.png",
  "https://open.spotify.com/show/1OLcQdw2PFDPG1jo3s0wbp",
  new Date("2016-05-19T00:01:00"),
  ["Talk", "Unterhaltung"]
);

let podcast2 = new Podcast(
  "5 Minuten Harry Podcast",
  "Ein Podcast mit und von Coldmirror",
  "Coldmirror",
  "Funk",
  "info@funk.net",
  "/assets/img/staff.png",
  "https://www.ardaudiothek.de/sendung/5-minuten-harry-podcast-von-coldmirror/66261434/",
  new Date("2021-12-24T12:30:00"),
  ["Unterhaltung"]
);

let ep1FuF = new Episode(
  "Aufbau West",
  "Alles neu bei Spotify",
  115000,
  new Date("2016-05-15T00:30:00"),
  new EpisodeAudio("/assets/music/FuF.mp3", "audio", "3700000")
);
let ep2FuF = new Episode(
  "Alkohol im Showgeschäft",
  "beschreibung",
  115000,
  new Date("2016-05-22T00:30:00"),
  new EpisodeAudio("/assets/music/FuF.mp3", "audio", "3700000")
);

let ep1HP = new Episode(
  "Was heißt eigentlich Liguster?",
  "Hier kommt Folge 1",
  197000,
  new Date("2015-12-05T00:30:00"),
  new EpisodeAudio("/assets/music/HP.mp3", "audio", "4700000")
);

let ep2HP = new Episode(
  "Zu viel Geschenkpapier!",
  "Ich laber über Minute 5 - 10",
  197000,
  new Date("2015-12-23T00:30:00"),
  new EpisodeAudio("/assets/music/HP.mp3", "audio", "4700000")
);

podcast1.addEpisode(ep1FuF);
podcast1.addEpisode(ep2FuF);

podcast2.addEpisode(ep1HP);
podcast2.addEpisode(ep2HP);

let podcasts = [podcast1,podcast2];

podcasts.forEach(function(podcast){

  console.log(podcast.titel + ":" +
  podcast.episoden.forEach(function(episode){

    console.log("   " + episode.titel + " (" + episode.getDauerInStundenUndMinuten() + ")")

  })
  );
})