import { Router } from "express";
import {
  logOut,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";

import { loginUser } from "../controllers/user.controller.js";
import { jwtAuth } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// secured route
router.route("/logout").post(jwtAuth, logOut);
router.route("/refreshAccessToken").post(refreshAccessToken);

export default router;
