import express from "express";
import { createContact, getAllContacts, updateContact, deleteContact } from "../controllers/contactControllers.js";

const router = express.Router();

// Public route to send a message
router.post("/", createContact);

// Admin route to get all messages
router.get("/", getAllContacts);

// Public route to get all messages (if needed, can be restricted)
router.put("/:id", updateContact)

// Admin route to delete a message
router.delete("/:id", deleteContact);

export default router;