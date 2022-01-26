const express = require("express");
const router = require("./routes/routes.js");
const podcasts= require("./models/persistence.js");

const app = express();

app.use(express.static("public"));
app.use(router);

app.set("view engine", "ejs");
app.set("views", "views");

const importDone = function (title) {
  console.log("Import von Podcast " + title + " abgeschlossen.");
};

podcasts.abonnieren("https://rss.nexx.cloud/BY3027EHVZ5ODH", importDone);
podcasts.abonnieren("https://verbrechen.podigee.io/feed/mp3", importDone);
podcasts.abonnieren("https://terra-x-geschichte.podigee.io/feed/mp3", importDone);

app.listen(8080,()=>{
  console.log("Web-Server läuft auf: http://localhost:8080");
});