import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/src/utils/ThemeRegistry';
import { constructMetadata } from '@/src/utils';
import { Nav, Footer } from '@/src/components/semantics';
import Header from '../components/Header';
const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' box-border overflow-x-hidden'}>
        <Header />
        <ThemeRegistry options={{ key: 'mui-theme' }}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
