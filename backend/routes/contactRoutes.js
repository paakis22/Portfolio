// import express from "express";
// import { createContact, getAllContacts } from "../controllers/contactControllers.js";

// const router = express.Router();

// // Public route to send a message
// router.post("/", createContact);

// // Admin route to get all messages
// router.get("/", getAllContacts);

// export default router;

import express from "express";
import { createContact, getAllContacts } from "../controllers/contactControllers.js";

const router = express.Router();

// Public route to send a message
router.post("/", createContact);

// Admin route to get all messages
router.get("/", getAllContacts);

export default router;