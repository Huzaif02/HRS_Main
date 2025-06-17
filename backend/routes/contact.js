import express from 'express';
import { sendMail } from '../utils/mailer.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    await sendMail(req.body);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

export default router;
