const { podcastList } = require("../models/persistence.js");
const podcasts = require("../models/persistence.js");

module.exports.showMyPodcasts = function (req, res) {

  res.render("myPodcasts", {
    podcasts: podcasts.podcastList,
  });
};

module.exports.podcast = function (req, res) {

  res.render("podcast", {
    podcasts: podcasts.podcastList,
    id: req.query.pc
  });
};

module.exports.episode = function (req, res) {

  res.render("episode", {
    podcasts: podcasts.podcastList,
    id: req.query.pc,
    ep: req.query.ep
  });
};
