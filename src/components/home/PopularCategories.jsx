import React from 'react'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import {cn} from "../../lib/utils"
export default function PopularCategories() {
  return (
    <div className='mt-13.5'>
      <div className='max-w-350 mx-auto'>
        <div className='flex flex-col gap-13.5'>
          <h1 className='font-bold text-[32px]'>Order.uk Popular Categories 🤩</h1>
          <div className='flex gap-4'>
            <Card className={cn("p-0 basis-1/6 gap-0 hover:cursor-pointer group")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full overflow-hidden overflow-hidden")}>
                <img src="/popular_img/Rectangle 13.png" alt="Rectangle_13" className="block w-full h-full rounded-t-md object-cover group-hover:scale-110 transition-all duration-150" />
              </AspectRatio>
              <CardFooter className={cn("text-web-white flex flex-col justify-center py-3 items-start")}>
                <h3 className='text-[16px] font-bold text-web-black'>Burgers & Fast food</h3>
                <p className='text-[13px] text-web-orange'>21 Restaurants</p>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 hover:cursor-pointer group")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full overflow-hidden")}>
                <img src="/popular_img/Rectangle 15.png" alt="Rectangle_15" className="block w-full h-full rounded-t-md object-cover group-hover:scale-110 transition-all duration-150" />
              </AspectRatio>
              <CardFooter className={cn("text-web-white flex flex-col justify-center py-3 items-start")}>
                <h3 className='text-[16px] font-bold text-web-black'>Salads</h3>
                <p className='text-[13px] text-web-orange'>32 Restaurants</p>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 hover:cursor-pointer group")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full overflow-hidden")}>
                <img src="/popular_img/Rectangle 17.png" alt="Rectangle_17" className="block w-full h-full rounded-t-md object-cover group-hover:scale-110 transition-all duration-150" />
              </AspectRatio>
              <CardFooter className={cn("text-web-white flex flex-col justify-center py-3 items-start")}>
                <h3 className='text-[16px] font-bold text-web-black'>Pasta & Casuals</h3>
                <p className='text-[13px] text-web-orange'>4 Restaurants</p>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 hover:cursor-pointer group")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full overflow-hidden")}>
                <img src="/popular_img/Rectangle 19.png" alt="Rectangle_19" className="block w-full h-full rounded-t-md object-cover group-hover:scale-110 transition-all duration-150" />
              </AspectRatio>
              <CardFooter className={cn("text-web-white flex flex-col justify-center py-3 items-start")}>
                <h3 className='text-[16px] font-bold text-web-black'>Pizza</h3>
                <p className='text-[13px] text-web-orange'>32 Restaurants</p>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 hover:cursor-pointer group")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full overflow-hidden")}>
                <img src="/popular_img/Rectangle 21.png" alt="Rectangle_21" className="block w-full h-full rounded-t-md object-cover group-hover:scale-110 transition-all duration-150" />
              </AspectRatio>
              <CardFooter className={cn("text-web-white flex flex-col justify-center py-3 items-start")}>
                <h3 className='text-[16px] font-bold text-web-black'>Breakfast</h3>
                <p className='text-[13px] text-web-orange'>4 Restaurants</p>
              </CardFooter>
            </Card>
            <Card className={cn("p-0 basis-1/6 gap-0 hover:cursor-pointer group")}>
              <AspectRatio ratio={1 / 1} className={cn("w-full overflow-hidden")}>
                <img src="/popular_img/Rectangle 23.png" alt="Rectangle_23" className="block w-full h-full rounded-t-md object-cover group-hover:scale-110 transition-all duration-150" />
              </AspectRatio>
              <CardFooter className={cn("text-web-white flex flex-col justify-center py-3 items-start")}>
                <h3 className='text-[16px] font-bold text-web-black'>Soups</h3>
                <p className='text-[13px] text-web-orange'>32 Restaurants</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
