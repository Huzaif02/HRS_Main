import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, phone, address, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAILER_EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
