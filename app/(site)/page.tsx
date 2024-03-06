import { Button } from '@/components/ui/button'
import AuthForm from './_components/AuthForm'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="h-full pt-[130px] max-w-7xl mx-auto px-[30px] flex flex-col lg:flex-row w-full justify-between md:w-full items-center">
      <div className="flex flex-col items-start justify-start lg:max-w-md md:w-[440px] lg:text-left md:text-center  md:items-center md:px-auto">
        <h1 className=" font-semibold tracking-normal md:tracking-[-2px] md:leading-[52px] lg:leading-[85px] text-7xl sm:text-5xl md:text-5xl lg:text-7xl  leading-[85px] break-words text-transparent bg-clip-text bg-gradient-to-r from-blue-600 from-10% via-purple-700 via-30% to-rose-400 to-60% ">
          Hang out <br /> anytime, anywhere
        </h1>
        <p className="text-gray-500 text-xl lg:text-left md:text-center pt-2">
          Messenger makes it easy and fun to stay close to your favourite
          people.
        </p>
        <AuthForm />
      </div>

      <div className="relative w-1/2 h-[680px] flex justify-center items-start ">
        <Image
          className="object-contain"
          alt="homePageImg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/images/homePage.png"
        />
      </div>
    </div>
  )
}

export default HomePage
