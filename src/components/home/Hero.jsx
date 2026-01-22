import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {cn} from "../../lib/utils"
export default function Hero() {
  return (
    <div>
      <div className='max-w-350 h-152.5 mx-auto rounded-4xl bg-web-white'>
        <div className='flex h-full relative'>
          <div className='basis-1/2 h-full flex items-center pl-14'>
            <div>
              <p className='text-[16px] leading-16.5'>Order Restaurant food, takeaway and groceries</p>
              <div className='mb-3'>
                <h1 className='text-[54px] leading-16.5 font-semibold text-web-black'>Feast Your Senses,</h1>
                <h1  className='text-[54px] leading-16.5 font-semibold text-web-orange'>Fast and Fresh</h1>
              </div>
              <div className='pt-5'>
                <p className='mb-3'>Enter a postcode to see what we deliver</p>
                <div className='relative w-94 h-14'>
                  <Input className={cn("w-full h-full rounded-full lg:text-[20px] pr-43")} placeholder="e.g. EC4R 3TE"/>
                  <Button className={cn("absolute right-0 text-white font-semibold bg-web-orange rounded-full h-full px-14 hover:cursor-pointer")}>Search</Button>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-20'>
            <img src="/hero_img/hero_center_img.png" alt="hero_center_img" />
          </div>
          <div className='basis-1/2 relative z-10 overflow-hidden pr-5'>
            <img className='absolute bottom-0 -right-20 w-150' src="/hero_img/bg_hero.png" alt="hero_bg" />
            <img className='absolute left-20 bottom-0 w-80' src="/hero_img/hero_right_img.png" alt="hero_right_img" />
            <div className='z-20 relative flex flex-col gap-22 items-end mt-25'>
              <Card className={cn("w-100 gap-0 p-4 relative right-25")}>
                <div className='absolute top-3.5 right-8 -translate-y-full text-8xl font-bold text-web-orange [text-shadow:1px_1px_0_white,0_1px_0_white,1px_0_0_white,-1px_0_0_white,0_-1px_0_white,-1px_-1px_0_white,0_0_1px_white]'>1</div>
                <CardHeader className={cn("p-0")}>
                  <CardTitle>
                    <img className='w-14.5' src="/LOGO 1.png" alt="LOGO 1" />
                  </CardTitle>
                  <CardDescription className={cn("font-semibold text-web-black")}>We’ve Received your order!</CardDescription>
                  <CardAction className={cn("text-gray-400 text-sm")}>now</CardAction>
                </CardHeader>
                <CardContent className={cn("p-0")}>
                  <p>Awaiting Restaurant acceptance</p>
                </CardContent>
              </Card>
              <Card className={cn("w-100 gap-0 p-4 relative -right-3")}>
                <div className='absolute top-3.5 right-8 -translate-y-full text-8xl font-bold text-web-orange [text-shadow:1px_1px_0_white,0_1px_0_white,1px_0_0_white,-1px_0_0_white,0_-1px_0_white,-1px_-1px_0_white,0_0_1px_white]'>2</div>
                <CardHeader className={cn("p-0")}>
                  <CardTitle>
                    <img className='w-14.5' src="/LOGO 1.png" alt="LOGO 1" />
                  </CardTitle>
                  <CardDescription className={cn("font-semibold text-web-black")}>Order Accepted!</CardDescription>
                  <CardAction className={cn("text-gray-400 text-sm")}>now</CardAction>
                </CardHeader>
                <CardContent className={cn("p-0")}>
                  <p>Your order will be delivered shortly</p>
                </CardContent>
              </Card>
              <Card className={cn("w-100 gap-0 p-4 relative right-10")}>
                <div className='absolute top-3.5 right-8 -translate-y-full text-8xl font-bold text-web-orange [text-shadow:1px_1px_0_white,0_1px_0_white,1px_0_0_white,-1px_0_0_white,0_-1px_0_white,-1px_-1px_0_white,0_0_1px_white]'>3</div>
                <CardHeader className={cn("p-0")}>
                  <CardTitle>
                    <img className='w-14.5' src="/LOGO 1.png" alt="LOGO 1" />
                  </CardTitle>
                  <CardDescription className={cn("font-semibold text-web-black")}>Your rider's nearby</CardDescription>
                  <CardAction className={cn("text-gray-400 text-sm")}>now</CardAction>
                </CardHeader>
                <CardContent className={cn("p-0")}>
                  <p>They're almost there - get ready</p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
