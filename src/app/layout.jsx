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
        <meta name="theme-color" content="#ff004c" />
        <meta name="msapplication-navbutton-color" content="#ff004c" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ff004c" />
        <meta name="description" content="Centro de belleza profesional" />
        <meta name="keywords" content="Marbella" />
        <meta name="author" content="Marbella" />
        <title>Marbella</title>
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
