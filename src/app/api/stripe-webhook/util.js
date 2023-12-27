import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { connectDB } from '@/app/lib/db/mongodb';
import User from '@/app/lib/db/models/UserModel';
import Workspace from '@/app/lib/db/models/WorkspaceModel';

export const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2502a3e51a6b55",
      pass: "0c6a675125ec2a"
    }
});

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
        <p>The email you are trying to use is already in use, please try another email.</p>
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
  </html>`)};


export const createUser = async (name, email) => {
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

    if (existingUser) {
        return new Response('Email in use', {
            status: 409,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const enableToken = crypto.randomBytes(32).toString('hex');
    const user = await User.create({ firstName, lastName, email, password: '', level: 'user', enableToken: enableToken, active: false, type: 'local' });
    // Create a new workspace
    // Add the user to the workspace
    await Workspace.create({ users: [user._id] });
    
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