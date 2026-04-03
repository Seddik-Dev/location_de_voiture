import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'Atlas Drive - Location de voitures premium au Maroc',
  description: 'Louez des voitures de luxe au Maroc avec Atlas Drive. Service premium avec les meilleurs tarifs.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
