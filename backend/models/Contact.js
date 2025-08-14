// import mongoose from "mongoose";

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Name is required"],
//     trim: true
//   },
//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
//   },
//   subject: {
//     type: String,
//     required: [true, "Subject is required"],
//     trim: true
//   },
//   message: {
//     type: String,
//     required: [true, "Message is required"],
//     trim: true
//   }
// }, { timestamps: true });

// export default mongoose.model("Contact", contactSchema);


import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
    trim: true
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true
  },
  ownerEmail: {       // Add ownerEmail directly
    type: String,
    required: [true, "Owner email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
  }
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);