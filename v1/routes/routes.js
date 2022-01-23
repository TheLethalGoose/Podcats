const express = require("express");
const router = express.Router();

const podcastController = require("../controller/podcastController");

router.use("/index",podcastController.showMyPodcasts);
router.use("/podcast",podcastController.podcast);
router.use("/episode", podcastController.episode);

module.exports = router;
