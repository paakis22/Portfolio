// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";

// import contactRoutes from "./routes/contactRoutes.js";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => res.send("Backend running..."));
// app.use("/api/contact", contactRoutes);

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("✅ MongoDB connected");
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// })
// .catch(err => console.error("❌ MongoDB connection error:", err.message));



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Backend running..."));
app.use("/api/contact", contactRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err.message));

// ❌ app.listen வேண்டாம்
// ✅ Vercel-க்கு app export செய்யணும்
export default app;