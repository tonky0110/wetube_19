import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleProfile = (req, res) => res.send('You are on my profile.');

const handleHome = (req, res) => res.send('Hello from home.');

// middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

app.get('/', handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
