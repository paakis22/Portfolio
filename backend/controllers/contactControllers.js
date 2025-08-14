import Contact from "../models/Contact.js";

// Create a new contact message
export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = await Contact.create({ name, email, subject, message });
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all contact messages (for admin)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a contact message by ID (if needed)
// export const updateContact = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email, subject, message } = req.body;

//     if (!name || !email || !subject || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const updatedContact = await Contact.findByIdAndUpdate(
//       id,
//       { name, email, subject, message },
//       { new: true, runValidators: true }
//     );

//     if (!updatedContact) {
//       return res.status(404).json({ error: "Contact not found" });
//     }

//     res.status(200).json({ success: true, data: updatedContact });
//   } catch (error) {
//     res.status(500).json({ error: "Error updating the message" });
//   }
// };


// Delete a contact message by ID
// export const deleteContact = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Contact.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ error: "Message not found" });
//     }

//     res.status(200).json({ success: true, message: "Message deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };