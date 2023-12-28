import crypto from 'crypto';
import { connectDB } from '@/app/lib/db/mongodb';
import User from '@/app/lib/db/models/UserModel';
import Workspace from '@/app/lib/db/models/WorkspaceModel';
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

export const userAlreadyExists = () => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
      <body style="font-family: sans-serif;">
        <div style="display: block; margin: auto; max-width: 600px;" class="main">
          <img alt="Inspect with Tabs" src="https://registate.net/_next/static/media/logo-blue.5db1e414.webp" style="margin-left:20px; width: 50% height:50%;">
          
          <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Congratulations on opening your new Company! 
          <p>Congratulations on opening your new company, you can view your new company in your personalized dashboard.</p>
        </div>
      </body>
    </html>
  ` 
}

export const mailBody = (enableToken) => {
 const url = `${process.env.ACTIVATE_USER_URL}${enableToken}`;
 console.log('URL for activation ', url);

 return (`
  <!doctype html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body style="font-family: sans-serif;">
      <div style="display: block; margin: auto; max-width: 600px;" class="main">
        <img alt="Inspect with Tabs" src="https://registate.net/_next/static/media/logo-blue.5db1e414.webp" style="margin-left:20px; width: 50% height:50%;">
        <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Congratulations for finishing your order</h1>
        <p>Thank you for finishing your order, please click the link below to get access to the Registate dashboard. </p>
        <a href=${url} style="display: block; margin-top: 20px; padding: 10px 20px; background-color: #1a73e8; color: white; text-decoration: none; border-radius: 5px;">Get Access</a>
      </div>
    </body>
  </html>`
)};


export const createUser = async (name, email, companyName, state, companyPackage) => {
  // Splitting the name into first and last name
  const nameParts = name.split(' ');
  let firstName = '';
  let lastName = '';
  if (nameParts.length > 0) {
      firstName = nameParts[0];
      lastName = nameParts.slice(1).join(' ');
  }
  
  await connectDB();
    
  try {
    const existingUser = await User.findOne({ email: email });
    
    let workSpace, enableToken = null;

    if (existingUser) {
      workSpace = await Workspace.findOne({ users: existingUser._id });
    } else {
      enableToken = crypto.randomBytes(32).toString('hex');
      const user = await User.create({ firstName, lastName, email, password: '', level: 'user', enableToken: enableToken, active: false, type: 'local' });
      workSpace = await Workspace.create({ users: [user._id] });
    }

    const company = {
      companyName: companyName,
      state: state,
      companyPackage: companyPackage
    };
    workSpace.companies.push(company);
    await workSpace.save();
    
    if (enableToken != null) {
      return new Response('', { status: 409 });
    }

    return new Response(enableToken, {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
  } catch (err) {
      console.error(err);
      return new Response('Error creating a Google user', {
          status: 500
      });
  }
}