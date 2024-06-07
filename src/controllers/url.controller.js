import { Url } from "../models/url.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { nanoid } from "nanoid";


const handleShortUrl = asyncHandler(async (req, res) => {
  const { url } = req.body;

  if (!url) {
    throw new ApiError(400, "url is required!!!");
  }
  const shortID = nanoid(8);
  const newUrl = await Url.create({
    shortId: shortID,
    redirectUrl: url,
  });

  const Id = await Url.findById(newUrl?._id).select("shortId -_id"); //only selecting shortId from the document Url and excluding _id
  if (!Id) {
    throw new ApiError(403, "failed to generate Shortid!!!");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, Id, "successfully created short Id!!!"));
});
const gettingUrl = asyncHandler(async (req, res) => {
  const shortId = req.params.shortId;
  const getUrl = await Url.findOneAndUpdate(
    { shortId },
    {
      $push: {
        viewHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );

  if (!getUrl) {
    throw new ApiError(400, "failed to get the url!!!");
  }
  res.redirect(getUrl.redirectUrl);
});

const handleGetAnalytics = asyncHandler(async (req, res) => {
  const shortId = req.params.shortId;
  const result = await Url.findOne({ shortId });
  if (!result) {
    throw new ApiError(400, "failed to get analytics of the url!!!");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, {
        totalClicks: result.viewHistory.length,
        Analytics: result.viewHistory,
      },"Successfully showing analytics!!!")
    );
});
export { handleShortUrl, gettingUrl, handleGetAnalytics };
