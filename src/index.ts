import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import userRouters from "./routers/usersRouter";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouters);

//middleware error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

// prints server running message
app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
