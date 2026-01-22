import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"

import {cn} from "../../lib/utils"
export default function AboutUs() {
  return (
    <div className='mt-23.5'>
      <div className='max-w-350 mx-auto bg-web-white rounded-md px-25 py-20'>
        <Tabs defaultValue="questions" className="w-full"> 
          <div className='flex justify-between mb-15 items-center'>
            <h2 className="font-bold text-[36px]">Know more about us!</h2>
            <TabsList className={cn("bg-transparent flex gap-4")}>
              <TabsTrigger value="questions" className={cn("data-[state=active]:border-web-orange data-[state=active]:text-web-orange px-8 rounded-full hover:cursor-pointer py-6")}>Frequent Questions</TabsTrigger>
              <TabsTrigger value="who" className={cn("data-[state=active]:border-web-orange data-[state=active]:text-web-orange px-8 rounded-full hover:cursor-pointer py-6")}>Who we are? </TabsTrigger>
              <TabsTrigger value="partner" className={cn("data-[state=active]:border-web-orange data-[state=active]:text-web-orange px-8 rounded-full hover:cursor-pointer py-6")}>Partner Program</TabsTrigger>
              <TabsTrigger value="help" className={cn("data-[state=active]:border-web-orange data-[state=active]:text-web-orange px-8 rounded-full hover:cursor-pointer py-6")}>Help & Support</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="questions" className={cn("bg-white rounded-md px-5 py-10")}>
            <Tabs defaultValue="work" className={cn("flex flex-row items-center")}>
              <TabsList className={cn("basis-1/4 flex flex-col bg-transparent gap-5")}>
                <TabsTrigger value="work" className={cn("data-[state=active]:bg-web-orange px-8 rounded-full hover:cursor-pointer py-6 font-bold")}>How does Order.UK work?</TabsTrigger>
                <TabsTrigger value="payment" className={cn("data-[state=active]:bg-web-orange px-8 rounded-full hover:cursor-pointer py-6 font-bold")}>What payment methods are accepted?</TabsTrigger>
                <TabsTrigger value="track" className={cn("data-[state=active]:bg-web-orange px-8 rounded-full hover:cursor-pointer py-6 font-bold")}>Can I track my order in real-time?</TabsTrigger>
                <TabsTrigger value="discount" className={cn("data-[state=active]:bg-web-orange px-8 rounded-full hover:cursor-pointer py-6 font-bold")}>Are there any special discounts or promotions available?</TabsTrigger>
                <TabsTrigger value="area" className={cn("data-[state=active]:bg-web-orange px-8 rounded-full hover:cursor-pointer py-6 font-bold")}>Is Order.UK available in my area?</TabsTrigger>
              </TabsList>

              <div className='flex-1'>
                <TabsContent value="work" className={cn('flex flex-col gap-6')}>
                  <div className='flex gap-2'>
                    <Card className={cn("basis-1/3 p-5 bg-gray-300 hover:cursor-pointer hover:scale-95 transition-all duration-200 group")}>
                      <CardHeader className={cn("p-0 text-center")}>
                        <CardTitle className={cn('font-bold')}>Place an Order!</CardTitle>
                      </CardHeader>
                      <CardContent className={cn("p-0 flex justify-center")}>
                        <img className='group-hover:rotate-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-200' src="/about_us_img/igm_1.png" alt="igm_1" />
                      </CardContent>
                      <CardFooter className={cn("p-0")}>
                        <p className='text-center'>Place order through our website or Mobile app</p>
                      </CardFooter>
                    </Card>
                    <Card className={cn("basis-1/3 p-5 bg-gray-300 hover:cursor-pointer hover:scale-95 transition-all duration-200  group")}>
                      <CardHeader className={cn("p-0 text-center")}>
                        <CardTitle className={cn('font-bold')}>Track Progress</CardTitle>
                      </CardHeader>
                      <CardContent className={cn("p-0 flex justify-center")}>
                        <img className='group-hover:rotate-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-200' src="/about_us_img/img_2.png" alt="igm_2" />
                      </CardContent>
                      <CardFooter className={cn("p-0")}>
                        <p className='text-center'>Your can track your order status with delivery time</p>
                      </CardFooter>
                    </Card>
                    <Card className={cn("basis-1/3 p-5 bg-gray-300 hover:cursor-pointer hover:scale-95 transition-all duration-200  group")}>
                      <CardHeader className={cn("p-0 text-center")}>
                        <CardTitle className={cn('font-bold')}>Place an Order!</CardTitle>
                      </CardHeader>
                      <CardContent className={cn("p-0 flex justify-center")}>
                        <img className='group-hover:rotate-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-200' src="/about_us_img/img_3.png" alt="igm_3" />
                      </CardContent>
                      <CardFooter className={cn("p-0")}>
                        <p className='text-center'>Place order through our website or Mobile app</p>
                      </CardFooter>
                    </Card>
                  </div>
                  <p className='mt-7.5 text-center'>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                </TabsContent>
                <TabsContent value="payment"></TabsContent>
                <TabsContent value="track"></TabsContent>
                <TabsContent value="discount"></TabsContent>
                <TabsContent value="area"></TabsContent>
              </div>
            </Tabs>
           
          </TabsContent>
          <TabsContent value="partner" className={cn("text-3xl font-bold text-web-orange")}>Comming soon...</TabsContent>
          <TabsContent value="who" className={cn("text-3xl font-bold text-web-orange")}>Comming soon...</TabsContent>
          <TabsContent value="help" className={cn("text-3xl font-bold text-web-orange")}>Comming soon...</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
