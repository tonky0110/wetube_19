import express from 'express';

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleProfile = (req, res) => res.send('You are on my profile.');

const handleHome = (req, res) => res.send('Hello from home.');

// middleware
const betweenHome = (req, res, next) => {
	console.log('Between');
	next();
};

app.get('/', betweenHome, handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
