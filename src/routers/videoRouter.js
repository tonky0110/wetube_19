import express from 'express';
import { uploadVideo } from '../middlewares';
import routes from '../routes';
import { deleteVideo, editVideo, getUpload, videoDetail, postUpload } from '../controllers/videoController';

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
