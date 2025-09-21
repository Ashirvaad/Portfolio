// Corrected routes/contact.ts
import express from "express";
import { sendMail } from "../services/mailer";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields required" });
    }

    // Pass the correct variables from the request body
    await sendMail(name, email, message); 

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("❌ Error in /api/contact:", err);
    res.status(500).json({ success: false, error: "Email failed" });
  }
});

export default router;