import './globals.css'
import { UserProvider } from '../context/Context'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
         <head>
        <link rel="icon" href="/logo.png" />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/logo.png' />
        <meta name="theme-color" content="#A5292D" />
        <meta name="msapplication-navbutton-color" content="#A5292D" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#A5292D" />
        <meta name="description" content="Servicios Odotologicos" />
        <meta name="keywords" content="OPTICA CRISTA WARNNER" />
        <meta name="author" content="OPTICA CRISTA WARNNER" />
        <title>OPTICA CRISTA WARNNER</title>
      </head>
      <body className={`${inter.className} bg-white`}>
      <UserProvider>
        <Navbar></Navbar> 
        {children}
        </UserProvider>

        </body>
    </html>
  )
}
