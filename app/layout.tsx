import Header from '@/components/Header'
import './globals.css'
//import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My IMDb Clone', //show on the tab
  description: 'IMDb clone website. Generated by NextJS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        {/* add for dark mode */}
        <Providers>

          {/* HEADER */}
          <Header />
          {/* NAVBAR */}
          <Navbar />
          {/* SEARCH BAR */}

          {children}
          
        </Providers>
      </body>
    </html>
  )
}
