import '@/app/globals.css'

export const metadata = {
  title: 'Registate Dashboard Signup',
  description: 'Signup to Registate dashboard',
} 

export default function SignUpLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
