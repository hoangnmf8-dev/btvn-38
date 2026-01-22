import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {cn} from "../../lib/utils"
import { httpRequest } from '@/services/httpRequest'
import { useQuery } from '@tanstack/react-query'
import { sushiKey, veganKey } from '../../cache_keys/exclusiveKey'
const getExclusiveData = async (endpoint) => {
  const response = await httpRequest.get(`http://localhost:3000/${endpoint}`);
  return response.data;
}


export default function ExclusiveDeals() {
  const {data: sushiData, refetch: refetchSushiData} = useQuery({
    queryKey: sushiKey,
    queryFn: () => getExclusiveData("sushi"),
    enabled: false
  })

  const {data: veganData, refetch: refetchVeganData} = useQuery({
    queryKey: veganKey,
    queryFn: () => getExclusiveData("vegan"),
    enabled: false
  })


  return (
    <div className='mt-13.5'>
      <div className='max-w-350 mx-auto'>
        <Tabs defaultValue="pizza" className="w-full"> 
          {/*/* dể defaultValue là gì thì sẽ tab đó sẽ tự động active */}
          <div className='flex justify-between mb-9 items-center'>
            <h2 className="font-bold text-[36px]">Up to -40% 🎊 Order.uk exclusive deals</h2>
            <TabsList className={cn("bg-transparent flex gap-8")}>
              <TabsTrigger value="vegan" className={cn("data-[state=active]:border-web-orange data-[state=active]:text-web-orange px-8 rounded-full hover:cursor-pointer py-6")} onClick={refetchVeganData}>Vegan</TabsTrigger>
              <TabsTrigger value="sushi" className={cn("data-[state=active]:border-web-orange data-[state=active]:text-web-orange px-8 rounded-full hover:cursor-pointer py-6")} onClick={refetchSushiData}>Sushi</TabsTrigger>
              <TabsTrigger value="pizza" className={cn("data-[state=active]:border-web-orange data-[state=active]:text-web-orange px-8 rounded-full hover:cursor-pointer py-6")}>Pizza & Fast food</TabsTrigger>
              <TabsTrigger value="others" className={cn("data-[state=active]:border-web-orange data-[state=active]:text-web-orange px-8 rounded-full hover:cursor-pointer py-6")}>others</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="vegan" className={cn("flex gap-6")}>
            {veganData && veganData?.map(item => (<Card key={item.id} className={cn("basis-1/3 relative p-0 rounded-xl overflow-hidden hover:cursor-pointer hover:scale-95 transition-all duration-150")}>
              <CardHeader className={cn("absolute inset-0 p-0")}>
                <div className='absolute bottom-12 left-11.5'>
                  <CardTitle className={cn("text-web-orange")}>{item.restaurantName}</CardTitle>
                  <CardDescription className={cn("text-web-white font-bold text-[24px]")}>{item.description}</CardDescription>
                </div>
                <CardAction className={cn("absolute right-5 top-0 rounded-b-lg p-5 text-white bg-web-black font-semibold")}>{item.discount}</CardAction>
              </CardHeader>
              <CardContent className={cn("p-0 h-full")}>
                <img className='w-full h-full object-cover' src={item.image} alt={"vegan_" + item.id} />
              </CardContent>
            </Card>))}
          </TabsContent>
          <TabsContent value="sushi" className={cn("flex gap-6")}>{sushiData && sushiData?.map(item => (<Card key={item.id} className={cn("basis-1/3 relative p-0 rounded-xl overflow-hidden  hover:cursor-pointer hover:scale-95 transition-all duration-150")}>
              <CardHeader className={cn("absolute inset-0 p-0")}>
                <div className='absolute bottom-12 left-11.5'>
                  <CardTitle className={cn("text-web-orange")}>{item.restaurantName}</CardTitle>
                  <CardDescription className={cn("text-web-white font-bold text-[24px]")}>{item.description}</CardDescription>
                </div>
                <CardAction className={cn("absolute right-5 top-0 rounded-b-lg p-5 text-white bg-web-black font-semibold")}>{item.discount}</CardAction>
              </CardHeader>
              <CardContent className={cn("p-0 h-full")}>
                <img className='w-full h-full object-cover' src={item.image} alt={"vegan_" + item.id} />
              </CardContent>
            </Card>))}</TabsContent>
          <TabsContent value="pizza" className={cn("flex gap-6")}>
            {/* Demo */}
            <Card className={cn("basis-1/3 relative p-0  hover:cursor-pointer hover:scale-95 transition-all duration-150")}>
              <CardHeader className={cn("absolute inset-0 p-0")}>
                <div className='absolute bottom-12 left-11.5'>
                  <CardTitle className={cn("text-web-orange")}>Restaurant</CardTitle>
                  <CardDescription className={cn("text-web-white font-bold text-[24px]")}>Chef Burgers London</CardDescription>
                </div>
                <CardAction className={cn("absolute right-5 top-0 rounded-b-lg p-5 text-white bg-web-black font-semibold")}>-40%</CardAction>
              </CardHeader>
              <CardContent className={cn("p-0")}>
                <img src="/exclusive_img/exclusive_img_1.png" alt="exclusive_img_1" />
              </CardContent>
            </Card>
            <Card className={cn("basis-1/3 relative p-0  hover:cursor-pointer hover:scale-95 transition-all duration-150")}>
              <CardHeader className={cn("absolute inset-0 p-0")}>
                <div className='absolute bottom-12 left-11.5'>
                  <CardTitle className={cn("text-web-orange")}>Restaurant</CardTitle>
                  <CardDescription className={cn("text-web-white font-bold text-[24px]")}>Grand Ai Cafe London</CardDescription>
                </div>
                <CardAction className={cn("absolute right-5 top-0 rounded-b-lg p-5 text-white bg-web-black font-semibold")}>-20%</CardAction>
              </CardHeader>
              <CardContent className={cn("p-0")}>
                <img src="/exclusive_img/exclusive_img_2.png" alt="exclusive_img_1" />
              </CardContent>
            </Card>
            <Card className={cn("basis-1/3 relative p-0  hover:cursor-pointer hover:scale-95 transition-all duration-150")}>
              <CardHeader className={cn("absolute inset-0 p-0")}>
                <div className='absolute bottom-12 left-11.5'>
                  <CardTitle className={cn("text-web-orange")}>Restaurant</CardTitle>
                  <CardDescription className={cn("text-web-white font-bold text-[24px]")}>Butterbrot Caf’e London</CardDescription>
                </div>
                <CardAction className={cn("absolute right-5 top-0 rounded-b-lg p-5 text-white bg-web-black font-semibold")}>-17%</CardAction>
              </CardHeader>
              <CardContent className={cn("p-0")}>
                <img src="/exclusive_img/exclusive_img_1.png" alt="exclusive_img_1" />
              </CardContent>
            </Card>
           
          </TabsContent>
          <TabsContent value="others" className={cn("text-3xl font-bold text-web-orange")}>Comming soon...</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
