import nodemailer from 'nodemailer';

export const sendMail = async ({ name, email, phone, address, message, interest }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: 'New Solar Inquiry',
    html: `
      <h3>New Inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Interested In:</strong> ${interest}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};
