import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import passport from "passport";

import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

import "./passport";

const app = express();

// middleware
app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);
// router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
