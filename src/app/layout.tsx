import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/src/utils/ThemeRegistry';
import { constructMetadata } from '@/src/utils';

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
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
