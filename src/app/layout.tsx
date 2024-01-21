import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/src/utils/ThemeRegistry';
import { constructMetadata } from '@/src/utils';
import { Nav, Footer } from '@/src/components/semantics';
const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: 'mui-theme' }}>
          <Nav />
            {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}
