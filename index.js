import express from 'express';

const app = express();

const PORT = 4000;

function handleListening() {
	console.log(`Listening on: http://localhost:${PORT}`);
}

function handleProfile(req, res) {
	console.log(req);
	res.send('You are on my profile.');
}

function handleHome(req, res) {
	console.log(req);
	res.send('Hello from home.');
}

app.get('/', handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
