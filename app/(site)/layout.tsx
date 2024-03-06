import { Open_Sans } from 'next/font/google'
import { Navbar } from './_components/navbar'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import { Footer } from './_components/footer'

const openSan = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

const calibreFont = localFont({
  src: '../../public/fonts/Calibre-Regular.woff2',
})

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
