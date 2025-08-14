// import Contact from "../models/Contact.js";
// import { sendPortfolioMessage } from "../utils/sendPortfolioMessage.js";

// // Create a new contact message and send email to portfolio owner
// export const createContact = async (req, res) => {
//   try {
//     const { portfolioId, name, email, subject, message } = req.body;

//     if (!portfolioId || !name || !email || !subject || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Find portfolio owner email
//     const portfolio = await Portfolio.findById(portfolioId).populate("ownerId", "email");
//     if (!portfolio) {
//       return res.status(404).json({ error: "Portfolio not found" });
//     }

//     // Save message in DB
//     const newMessage = await Contact.create({
//       portfolioId,
//       name,
//       email,
//       subject,
//       message,
//     });

//     // Send email to portfolio owner
//     await sendPortfolioMessage({
//       ownerEmail: portfolio.ownerId.email,
//       senderName: name,
//       senderEmail: email,
//       subject,
//       message,
//     });

//     res.status(201).json({ success: true, data: newMessage });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get all contact messages (for admin)
// export const getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: contacts });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


import Contact from "../models/Contact.js";
import { sendPortfolioMessage } from "../utils/sendPortfolioMessage.js";

// Create a new contact message and send email
export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message, ownerEmail } = req.body;

    if (!name || !email || !subject || !message || !ownerEmail) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = await Contact.create({
      name, email, subject, message, ownerEmail
    });

    await sendPortfolioMessage({
      ownerEmail,
      senderName: name,
      senderEmail: email,
      subject,
      message
    });

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all contact messages (admin)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};