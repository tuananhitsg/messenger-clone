import { MetaLogo } from '@/components/logo'

export const Footer = () => {
  return (
    <div className="flex bottom-0 w-full h-[67px] bg-white items-center ">
      <div className="md:max-w-screen-lg px-8 py-5 mx-auto flex items-center w-full justify-between">
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full text-sm">
          <span className="font-bold"> © Meta&nbsp;2024.</span>
          <span>
            The Apple and Google Play logos are trademarks of their respective
            owners.
          </span>
        </div>
        <MetaLogo />
      </div>
    </div>
  )
}
