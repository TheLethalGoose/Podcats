const express = require("express");
const router = require("./routes/routes.js");
const podcasts= require("./models/persistence.js");

const app = express();

app.use(express.static("public"));
app.use(router);
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

const importDone = function () {
  console.log("Import von Podcast abgeschlossen");
};

podcasts.abonnieren("https://www.ndr.de/nachrichten/info/podcast4684.xml", importDone);
podcasts.abonnieren("https://lanz-precht.podigee.io/feed/mp3", importDone);
podcasts.abonnieren("https://anchor.fm/s/1374d750/podcast/rss", importDone);
podcasts.abonnieren("https://feeds.nexx.cloud/1094/QBKHY4RQMECBNN0", importDone);


app.listen(8080);