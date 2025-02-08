import express from "express";
import passport from "passport";
import { courseRouter } from "./src/routes/course";
import { config } from "dotenv";
import { authRouter } from "./src/routes/auth";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/middleware/errorHandler";

config({ path: ".env" });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/auth", authRouter);

app.use("/api/course", courseRouter);

//@ts-ignore
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
