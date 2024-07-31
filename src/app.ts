import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./modules/prodcuts/product.routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
const app: Application = express();
import cookieParser from "cookie-parser";
import { userRoutes } from "./modules/user/user.routes";

// parser
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", productRoutes);

const home = (req: Request, res: Response) => {
  res.send("hi ami bhalo chele ");
};

app.get("/", home);
app.use(globalErrorHandler);

// used this because i was facing some problems with app.use(notFound route)
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "not found",
  });
});

export default app;
