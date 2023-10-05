import '../globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import Navbar from '../components/layout/navigation/Navbar'
import Footer from '../components/layout/Footer'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vascomm - Albar',
  description: 'Cilent application untuk test bidang Vascomm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  )
}
