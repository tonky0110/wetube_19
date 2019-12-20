import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {
	try {
		const videos = await Video.find({});
		res.render('home', { pageTitle: 'Home', videos });
	} catch (e) {
		console.log(e);
		res.render('home', { pageTitle: 'Home', videos: [] });
	}
};

export const search = async (req, res) => {
	const { query: { term: searchingBy } } = req;
	try {
		const videos = await Video.find({});
		return res.render('search', { pageTitle: 'Search', searchingBy, videos });
	} catch (e) {
		console.log(e);
		return res.render('search', { pageTitle: 'Search', searchingBy, videos: [] });
	}
};

export const getUpload = (req, res) => res.render('upload', { pageTitle: 'Upload' });
export const postUpload = async (req, res) => {
	try {
		const { body: { title, description }, file: { path } } = req; //  { title, description, file }
		const newVideo = await Video.create({
			fileUrl: path,
			title,
			description
		});
		res.redirect(routes.videoDetail(newVideo.id));
	} catch (e) {
		console.log(e);
	} finally {
		// To Do: Upload and save video.
		res.redirect(routes.home);
	}
};

export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail' });

export const editVideo = (req, res) => res.render('editVideo', { pageTitle: 'Edit Video' });

export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video' });
