import express from "express";
import cors from "cors";
import connectDB from "./src/configs/db.js";
import routes from "./src/routes/routes.js";
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api", routes);
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:${PORT}` );
});



