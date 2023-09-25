
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-slate-800 text-base antialiased" >
      <head >
      <script
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W3QDMCGC')`,
            }}
          >
        </script>
      </head>

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3QDMCGC"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        {children}
      </body>
    </html>
  )
}