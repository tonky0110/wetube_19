import express from 'express';
import { uploadVideo } from '../middlewares';
import routes from '../routes';
import {
	deleteVideo,
	getEditVideo,
	getUpload,
	videoDetail,
	postEditVideo,
	postUpload
} from '../controllers/videoController';

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
