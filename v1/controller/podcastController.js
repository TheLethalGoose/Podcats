const { podcastList } = require("../models/persistence.js");
const podcasts = require("../models/persistence.js");

module.exports.podcasts = function (req, res) {

  res.render("podcasts", {
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

module.exports.error = function (err, req, res, next) {
  console.error(err.stack);
  res.status(404).render("error", {
    podcasts: podcasts.podcastList
  });
};
