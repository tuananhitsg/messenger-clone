'use client'
import Image from 'next/image'
import { BiSolidMessage } from 'react-icons/bi'

import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'
const FeaturesPage = () => {
  const [currentImage, setCurrentImage] = useState<string>(
    '/images/love-theme.png'
  )
  const [clickedButton, setClickedButton] = useState(0)
  const imgs = [
    {
      key: 1,
      label: 'LOVE',
      src: '/images/love-theme.png',
    },
    {
      key: 2,
      label: 'TIE DYE',
      src: '/images/tidedye-theme.png',
    },
    {
      key: 3,
      label: 'PRIDE',
      src: '/images/pride-theme.png',
    },
  ]
  const onClick = (src: string, index: number) => {
    setCurrentImage(src)
    setClickedButton(index)
  }

  return (
    <>
      <div className=" max-w-7xl mx-auto px-[30px] pt-[100px] flex flex-col lg:flex-row w-full justify-between md:w-full items-center">
        <div className="flex flex-col items-start justify-start lg:max-w-md md:w-[440px] lg:text-left md:text-center md:items-center md:px-auto">
          <h1 className="font-semibold tracking-normal md:tracking-[-2px] md:leading-[52px] lg:leading-[85px] text-7xl sm:text-5xl md:text-5xl lg:text-7xl  leading-[85px] break-words text-transparent bg-clip-text bg-gradient-to-r from-blue-600 from-10% via-purple-700 via-30% to-rose-400 to-60% ">
            More ways <br /> to stay connected
          </h1>
          <p className="text-gray-500 text-xl lg:text-left md:text-center pt-2">
            Messenger has everything you need to feel closer to your favorite
            people.
          </p>
        </div>
        <div className="relative w-1/2 h-[500px] flex justify-center items-start ">
          <Image
            className="object-contain"
            alt="homePageImg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/feature-1.png"
          />
        </div>
      </div>
      <div className="h-full max-w-7xl mx-auto px-[30px] pt-[30px] pd-[100px] flex flex-col lg:flex-row w-full justify-between md:w-full items-center">
        <div className="flex flex-col items-start justify-start lg:max-w-md md:w-[440px] lg:text-left md:text-center  md:items-center md:px-auto">
          <h1 className=" font-semibold tracking-normal md:tracking-[-2px] md:leading-[52px] lg:leading-[85px] text-7xl sm:text-5xl md:text-5xl lg:text-7xl  leading-[85px] break-words text-transparent bg-clip-text bg-gradient-to-r from-blue-600 from-10% via-purple-700 via-30% to-rose-400 to-60% ">
            Let the <br />
            conversation flow
          </h1>
          <p className="text-gray-500 text-xl lg:text-left md:text-center pt-2">
            Choose the exact message you want to reply to or forward, right in
            your chat.
          </p>
        </div>
        <div className="relative w-1/2 h-[680px] flex justify-center items-start ">
          <Image
            className="object-contain"
            alt="homePageImg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/feature-2.png"
          />
        </div>
      </div>
      <div className="h-full max-w-7xl mx-auto px-[30px] pt-[30px] pd-[100px] flex flex-row w-full justify-between md:w-full items-center">
        <div className="flex flex-col  lg:max-w-md md:w-[440px] lg:text-left md:text-center md:items-end md:px-auto border-r-[3px] ">
          {imgs.map((imgs, index) => (
            <Button
              key={imgs.key}
              size="inline"
              className={cn(
                'items-center justify-normal h-8 w-48 mb-4 -mr-[2px] last:mb-0 rounded-none text-gray-400 font-semibold',
                index === clickedButton && 'border-r-[3px] border-blue-600'
              )}
              variant="transparent"
              onClick={() => onClick(imgs.src, index)}
            >
              <BiSolidMessage
                className={cn(
                  'h-8 w-8 p-2 mr-4 rounded-full bg-gray-400 text-white',
                  index === clickedButton && 'bg-blue-600'
                )}
              />
              {imgs.label}
            </Button>
          ))}
        </div>
        <div className="relative w-1/2 h-[680px] flex justify-center items-start ">
          <Image
            className="object-contain"
            alt="homePageImg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={currentImage}
          />
        </div>
        <div className="items-start w-1/3">
          <p className="text-base text-gray-500 font-medium">CHAT THEMES</p>
          <p className="text-[60px] leading-[60px] font-semibold">
            Your chats Your way
          </p>
          <p className="text-gray-500 mt-2">
            Choose from fun themes and colors to make your chats more personal
            ❤️ 🏳️‍🌈
          </p>
        </div>
      </div>
    </>
  )
}

export default FeaturesPage
