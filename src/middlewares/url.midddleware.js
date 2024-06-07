import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { jwtAuth } from "./auth.middleware.js";
const urlAuth = asyncHandler(jwtAuth, async (req, _, next) => {
  if (req.validUser) {
    next();
  } else {
    throw new ApiError(401, "please login to get access of url shortner!!!");
  }
});
export { urlAuth };
