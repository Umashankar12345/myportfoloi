const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  // Send notification to you when someone contacts you
  async sendContactNotification(contactData) {
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Message</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Subject:</strong> ${contactData.subject || 'Portfolio Inquiry'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${contactData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="margin-top: 20px; color: #6b7280;">
            Received at: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Contact notification email sent successfully');
      return true;
    } catch (error) {
      console.error('Error sending contact notification:', error);
      return false;
    }
  }

  // Send auto-reply to the person who contacted you
  async sendAutoReply(toEmail, name) {
    const mailOptions = {
      from: `"Umashankar Kumar" <${process.env.EMAIL_FROM}>`,
      to: toEmail,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Hello ${name},</p>
          <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          <p>In the meantime, you can:</p>
          <ul>
            <li>Check out my projects on <a href="https://github.com/umashankar">GitHub</a></li>
            <li>Connect with me on <a href="https://linkedin.com/in/umashankarkumar">LinkedIn</a></li>
            <li>Download my resume from the portfolio</li>
          </ul>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p>Best regards,<br>
            <strong>Umashankar Kumar</strong><br>
            Computer Science Student | Aspiring Software Engineer</p>
          </div>
        </div>
      `
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Auto-reply email sent successfully');
      return true;
    } catch (error) {
      console.error('Error sending auto-reply:', error);
      return false;
    }
  }
}

module.exports = new EmailService();