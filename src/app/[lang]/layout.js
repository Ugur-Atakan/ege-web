import '../globals.css'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'
import Script from 'next/script'

export const metadata = {
  title: 'Registate',
  description: 'Start a business in the USA in 24 hours from anywhere in the world.',
}

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

const RootLayout = ({
  children,
  params: {
    lang
  }
}) => {
  return (
    <html lang={lang} dir={dir(lang)} className='h-full text-base antialiased' >
      <head >
      <link rel="canonical" href="https://registate.com" />

      <Script
            type="text/javascript"
            async
            id={"gtm-script"}
            dangerouslySetInnerHTML={{
              __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                  'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
                }); var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-KG532G4')`,
            }}
          >
        </Script>

        <Script 
          type="text/javascript"
          id={"exairon-messenger-script"}
          async
          dangerouslySetInnerHTML={{
            __html: `
            (function () { let e = document.createElement("script"), t = document.head || document.getElementsByTagName("head")[0]; (e.id = "exairon-messenger"), (e.src = "https://registate.services.exairon.com/assets/widget/index.js"), (e.async = !0), (e.onload = () => { window.WebChat.default({ customData: { language: "en" }, socketPath: "/socket/", channelId: "6297b63f74cf82000cc544ca", withRules: true, hideWhenNotConnected: false, displayType: "livechat" }, null); }), t.insertBefore(e, t.firstChild); })()
            `,
          }}>
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

export default RootLayout