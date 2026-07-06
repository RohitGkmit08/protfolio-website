const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


const sendContactEmail = async ({ name, email, subject, message }) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP credentials are not configured in environment. Skipping email sending.");
    return;
  }

  const receiverEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

  const htmlTemplate = `
    <h2>New Contact Form Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.SMTP_USER}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `New contact message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: htmlTemplate,
    });
  } catch (error) {
    console.error("Failed to send contact email via SMTP:", error.message);
  }
};

module.exports = { sendContactEmail };