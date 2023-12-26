import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2502a3e51a6b55",
      pass: "0c6a675125ec2a"
    }
});

export const dashboardHTML = () => {
    return ( 
        <div>
            <h1>Dashboard</h1>
            <p>Dashboard content</p>
        </div> 
    )
}