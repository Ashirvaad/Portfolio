import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN || "";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "ashirvaad05@gmail.com";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendMail(name: string, email: string, message: string) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
// Correct configuration using host and port for OAuth2 authentication
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use 'true' for port 465
      auth: {
        type: "OAuth2",
        user: SENDER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token || "",
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${SENDER_EMAIL}>`,
      to: SENDER_EMAIL, // send to yourself
      subject: `New Contact Form Submission from ${name}`,
      text: `You got a new message from ${name} (${email}):\n\n${message}`,
      html: `<h3>New Contact Form Submission</h3>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}