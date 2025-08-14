// import nodemailer from "nodemailer";

// export const sendPortfolioMessage = async ({ ownerEmail, senderName, senderEmail, subject, message }) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: `"${senderName}" <${senderEmail}>`,
//     to: ownerEmail,
//     subject: subject || "New Portfolio Message",
//     html: `
//       <h2>New Message from Portfolio Contact</h2>
//       <p><strong>Name:</strong> ${senderName}</p>
//       <p><strong>Email:</strong> ${senderEmail}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//   });
// };

import nodemailer from "nodemailer";

export const sendPortfolioMessage = async ({ ownerEmail, senderName, senderEmail, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${senderName}" <${senderEmail}>`,
    to: ownerEmail,
    subject: subject || "New Portfolio Message",
    html: `
      <h2>New Message from Portfolio Contact</h2>
      <p><strong>Name:</strong> ${senderName}</p>
      <p><strong>Email:</strong> ${senderEmail}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
};