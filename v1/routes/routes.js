const express = require("express");
const router = express.Router();

const podcastController = require("../controller/podcastController");

router.get("/",podcastController.podcasts);
router.get("/podcast",podcastController.podcast);
router.get("/episode", podcastController.episode);

router.use(podcastController.error);


module.exports = router;
