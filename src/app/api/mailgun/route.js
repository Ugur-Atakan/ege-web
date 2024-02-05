import mailgun from 'mailgun-js';

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });


export const sendMail = function(sender_email, receiver_email, email_subject, email_body) {
    const data = {
      from: sender_email,
      to: receiver_email,
      subject: email_subject,
      text: email_body,
      html: email_body
    };
  
    mg.messages().send(data, (error, body) => {
      if (error) {
        console.log(error);
      } else {
        console.log(body);
      }
    });
};

export async function POST(request) {
    try {
        const { sender_email, receiver_email, email_subject, email_body } = await request.json();
        const mail = sendMail(sender_email, receiver_email, email_subject, email_body);
        console.log(mail)

        return new Response('Mail sent successfully', {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch { 
        return new Response('Error in /api/mailgun/route.js', {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}