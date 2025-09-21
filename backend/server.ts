// Corrected server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact";

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // Correct middleware
// You can remove `app.use(bodyParser.json());` entirely.

// API route
app.use("/api", contactRouter);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend Running...");
});

// Start server
app.listen(5000, () => {
  console.log("✅ Backend server running at http://localhost:5000");
});