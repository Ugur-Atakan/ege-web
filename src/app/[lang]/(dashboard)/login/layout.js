import '@/app/globals.css'

export const metadata = {
  title: 'Registate Dashboard Login',
  description: 'Login to Registate dashboard',
} 

export default function LoginLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
