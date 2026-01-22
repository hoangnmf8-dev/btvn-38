import React from 'react'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import {cn} from "../../lib/utils"

export default function PopularRestaurants() {
  return (
    <div className='mt-13.5'>
      <div className='max-w-350 mx-auto'>
        <div className='flex flex-col gap-13.5'>
          <h1 className='font-bold text-[32px]'>Popular Restaurants</h1>
          <div className='flex gap-4'>
            <Card className={cn("p-0 basis-1/6 gap-0 overflow-hidden")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full")}>
                <img src="/restaurant_img/img_1.png" alt="img_1" className="block w-full h-full rounded-t-md object-cover" />
              </AspectRatio>
              <CardFooter className={cn("flex justify-center py-3 bg-web-orange")}>
                <h3 className='text-[16px] font-bold text-web-white'>McDonald’s London</h3>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 overflow-hidden")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full")}>
                <img src="/restaurant_img/img_2.png" alt="img_2" className="block w-full h-full rounded-t-md object-cover" />
              </AspectRatio>
              <CardFooter className={cn("flex justify-center py-3 bg-web-orange")}>
                <h3 className='text-[16px] font-bold text-web-white'>Papa Johns</h3>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 overflow-hidden")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full")}>
                <img src="/restaurant_img/img_3.png" alt="img_3" className="block w-full h-full rounded-t-md object-cover" />
              </AspectRatio>
              <CardFooter className={cn("flex justify-center py-3 bg-web-orange")}>
                <h3 className='text-[16px] font-bold text-web-white'>KFC West London</h3>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 overflow-hidden")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full")}>
                <img src="/restaurant_img/img_4.png" alt="img_4" className="block w-full h-full rounded-t-md object-cover" />
              </AspectRatio>
              <CardFooter className={cn("flex justify-center py-3 bg-web-orange")}>
                <h3 className='text-[16px] font-bold text-web-white'>Texas Chicken</h3>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 overflow-hidden")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full")}>
                <img src="/restaurant_img/img_5.png" alt="img_5" className="block w-full h-full rounded-t-md object-cover" />
              </AspectRatio>
              <CardFooter className={cn("flex justify-center py-3 bg-web-orange")}>
                <h3 className='text-[16px] font-bold text-web-white'>Burger King</h3>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 overflow-hidden")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full")}>
                <img src="/restaurant_img/img_6.png" alt="img_6" className="block w-full h-full rounded-t-md object-cover" />
              </AspectRatio>
              <CardFooter className={cn("flex justify-center py-3 bg-web-orange")}>
                <h3 className='text-[16px] font-bold text-web-white'>Shaurma 1</h3>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
