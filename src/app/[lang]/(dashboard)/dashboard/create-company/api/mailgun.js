export const stripeURLEmailBody = (stripeURL) => {
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
            <p>Your company has been established by our agent, complete the payment with this <a href=${stripeURL}>Stripe</a> to finalize your company opening.</p>
          </div>
        </body>
      </html>
    ` 
}