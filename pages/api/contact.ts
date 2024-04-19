import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const { user_name, user_email, message } = req.body;

  const mailData = {
    from: user_email,
    to: "itsmalikdanial@gmail.com",
    subject: `Message through Portfolio Website by ${user_name}`,
    text: message + " | Sent from: " + user_email,
    html: `<div>${message}</div><p>Sent from:
    ${user_email}</p>`,
  };

  transporter.sendMail(mailData, function (err: Error, info: any) {
    if (err) {
      console.log(err);
      res.status(400).send({ err });
    } else {
      console.log(info);
      res.status(200).send({ info });
    }
  });
}
