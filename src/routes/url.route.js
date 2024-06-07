import { Router } from "express";
import { handleShortUrl } from "../controllers/url.controller.js";
import { gettingUrl } from "../controllers/url.controller.js";
import { handleGetAnalytics } from "../controllers/url.controller.js";
import {urlAuth} from "../middlewares/url.midddleware.js"
const router = Router();
router.route("/").post(urlAuth,handleShortUrl);
router.route("/:shortId").get(gettingUrl);
router.route("/analytics/:shortId").get(handleGetAnalytics);
export default router;
