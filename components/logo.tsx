import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center flex">
        <Image alt="Logo" height={40} width={40} src="/images/logo.svg" />
      </div>
    </Link>
  )
}
export const MetaLogo = () => {
  return (
    <div className="items-center flex">
      <Image alt="meta logo" height={47} width={150} src="/images/meta-logo.png" />
    </div>
  )
}
