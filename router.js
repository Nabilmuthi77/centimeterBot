const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

// lihat yt kalau ingin menggunakan menu angka (sampel) https://youtu.be/piNHAkHtnLY?si=z0S0Iyv2WCDd5PcK
router.keyword(".menu", [BotController, "centimeter"]);
router.keyword(".mythic", [BotController, "mythic"]);
router.keyword(".exalted", [BotController, "exalted"]);
router.keyword(".legend", [BotController, "legend"]);
router.keyword(".fifeStar", [BotController, "fifeStar"]);
router.keyword(".general", [BotController, "general"]);
router.keyword(".special", [BotController, "special"]);
router.keyword(".update", [BotController, "update"]);

module.exports = router;