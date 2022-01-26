const podcasts = require("../models/persistence");
const search = require("../public/js/search");

module.exports.podcasts = function (req, res) {
  if (req.query.pctitle) {
    res.render("podcasts", {
      podcasts: search(req.query.pctitle),
      anzeige: "Gefundene Podcasts zu: " + req.query.pctitle,
    });
  } else {
    res.render("podcasts", {
      podcasts: podcasts.podcastList,
      anzeige: "Abonnierte Podcasts",
    });
  }
};

module.exports.podcast = function (req, res) {
  
  var reqQueryPc = req.query.pc;

  if (!/^[0-9]*$/.test(reqQueryPc) || reqQueryPc > podcasts.podcastList.length) {
    req.next();
    return;
  }
  res.render("podcast", {
    podcasts: podcasts.podcastList,
    id: req.query.pc,
  });
};

module.exports.episode = function (req, res) {

  var reqQueryPc = req.query.pc;
  var reqQueryEp = req.query.ep;

  if (
    !/^[0-9]*$/.test(reqQueryPc) ||
    reqQueryPc > podcasts.podcastList.length ||
    !/^[0-9]*$/.test(reqQueryEp) ||
    reqQueryEp > podcasts.podcastList[reqQueryPc].episodes.length
  ) {
    req.next();
    return;
  }

  res.render("episode", {
    podcasts: podcasts.podcastList,
    id: req.query.pc,
    ep: req.query.ep,
  });
};

module.exports.abonnieren = function (req, res) {
  var url = req.body.pcurl;

  podcasts.abonnieren(url, function () {
    console.log("Import von Podcast " + url + " abgeschlossen.");
  });

  res.redirect("/");
};

module.exports.error = function (req, res, next) {
  res.status(404).render("error", { podcasts: podcasts.podcastList });
};
