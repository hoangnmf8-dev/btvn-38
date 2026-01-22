import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {cn} from "../../lib/utils"
import { Button } from '../ui/button'

export default function Partner() {
  return (
    <div className='mt-13.5'>
      <div className='max-w-350 mx-auto'>
        <div className='flex'>
          <div className='basis-1/2'>
            <Card className={cn("relative p-0 gap-0")}>
              <CardHeader className={cn("absolute inset-0 p-0")}>
                <div className='absolute bottom-10 left-10'>
                  <CardDescription className={cn("text-web-orange text-[18px]")}>Signup as a business</CardDescription>
                  <CardTitle className={cn("text-[40px] font-bold text-white")}>Partner with us</CardTitle>
                  <Button className={cn("mt-6 px-12 py-6 bg-web-orange rounded-full hover:cursor-pointer")}>Get Started</Button>
                </div>
                <div className={cn("absolute left-15 top-0 px-5 py-2 font-bold bg-white rounded-b-md text-web-black")}>Earn more with lower fees</div>
              </CardHeader>
              <CardContent className={cn("w-full p-0")}>
                <img src="/partner_img/img_1.png" alt="img_1.png" />
              </CardContent>
            </Card>
          </div>
          <div className='basis-1/2'>
            <Card className={cn("relative p-0 gap-0")}>
              <CardHeader className={cn("absolute inset-0 p-0")}>
                <div className='absolute bottom-10 left-10'>
                  <CardDescription className={cn("text-web-orange text-[18px]")}>Signup as a rider</CardDescription>
                  <CardTitle className={cn("text-[40px] font-bold text-white")}>Ride with us</CardTitle>
                  <Button className={cn("mt-6 px-12 py-6 bg-web-orange rounded-full hover:cursor-pointer")}>Get Started</Button>
                </div>
                <div className={cn("absolute left-15 top-0 px-5 py-2 font-bold bg-white rounded-b-md text-web-black")}>Avail exclusive perks</div>
              </CardHeader>
              <CardContent className={cn("w-full p-0")}>
                <img src="/partner_img/img_2.png" alt="img_2.png" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
