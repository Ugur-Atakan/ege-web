import '../globals.css'
import { languages } from '../i18n/settings'
import { dir } from 'i18next'
import Script from 'next/script'

export const metadata = {
  title: 'Registate',
  description: '',
}

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params: {
    lang
  }
}) {
  return (
    <html lang={lang} dir={dir(lang)} className='h-full text-base antialiased' >
      <head >
      <Script
            type="text/javascript"
            async
            id={"gtm-script"}
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W3QDMCGC')`,
            }}
          >
        </Script>
      </head>

      <body>
        <noscript
          id={"gtm-body"}
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