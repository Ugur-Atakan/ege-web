export const inviteMailBody = (enableToken) => {
    const url = `${process.env.ACTIVATE_USER_URL}${enableToken}`;
    return `
      <!doctype html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body style="font-family: sans-serif;">
          <div style="display: block; margin: auto; max-width: 600px;" class="main">
            <img alt="Inspect with Tabs" src="https://registate.net/_next/static/media/logo-blue.5db1e414.webp" style="margin-left:20px; width: 50% height:50%;">
            <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Complete your payment to access your company</h1>
            <p>You have been invited to our dashboard complete your access here <a href=${url} style="display: block; margin-top: 20px; padding: 10px 20px; background-color: #1a73e8; color: white; text-decoration: none; border-radius: 5px;">Get Access</a></p>
          </div>
        </body>
      </html>
    ` 
}