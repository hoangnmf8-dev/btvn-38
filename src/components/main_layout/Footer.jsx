import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {cn} from "../../lib/utils"

export default function Footer() {
  return (
    <div className='mt-11.5'>
      <div className='bg-web-white py-20'>
        <div className='max-w-350 mx-auto'>
          <div className="flex gap-4">
            <div className="basis-1/3 flex flex-col gap-6 items-start">
              <img className='w-50' src="/LOGO 2.png" alt="" />
              <div className='flex justify-center gap-2'>
                <a href='#' className='block w-37 bg-web-black px-5 py-2 rounded-sm hover:scale-90 transition-all duration-150'>
                  <img className='w-full ' src="/mobile_app_img/apple.png" alt="apple.png" />
                </a>
                <a href='#' className='block w-37 bg-web-black px-5 py-2 rounded-sm hover:scale-90 transition-all duration-150'>
                  <img className='w-full ' src="/mobile_app_img/android.png" alt="apple.png" />
                </a>
              </div>
              <p className='text-[15px]'>Company # 490039-445, Registered with House of companies.</p>
            </div>
            <div className="basis-1/3 gap-6 items-start flex flex-col">
              <h3 className='text-[16px] font-bold text-web-black'>Get Exclusive Deals in your Inbox</h3>
              <div className='relative w-100 h-14'>
                <Input className={cn("w-full h-full rounded-full lg:text-[16px] pr-47")} placeholder="youremail@gmail.com"/>
                <Button className={cn("absolute right-0 text-white font-semibold bg-web-orange rounded-full h-full px-14 hover:cursor-pointer")}>Subscribe</Button>
              </div>
              <p className='text-sm'>we wont spam, read our <a href='#' className='underline hover:cursor-pointer text-web-orange hover:text-orange-800 transition-all duration-150'>email policy</a></p>
              <div className='flex gap-2'>
                <a className='w-8 aspect-square hover:-translate-y-1 transition-all duration-150 ease-in block' href="#"><img src="/footer_img/Facebook.png" alt="Facebook" /></a>
                <a className='w-8 aspect-square hover:-translate-y-1 transition-all duration-150 ease-in block' href="#"><img src="/footer_img/Instagram.png" alt="Instagram" /></a>
                <a className='w-8 aspect-square hover:-translate-y-1 transition-all duration-150 ease-in block' href="#"><img src="/footer_img/TikTok.png" alt="TikTok" /></a>
                <a className='w-8 aspect-square hover:-translate-y-1 transition-all duration-150 ease-in block' href="#"><img src="/footer_img/Snapchat.png" alt="Snapchat" /></a>
              </div>
            </div>
            <div className="basis-1/6 flex flex-col gap-6">
              <h3 className='text-[16px] font-bold text-web-black'>Legal Pages</h3>
              <a href="#" className='underline hover:text-web-orange hover:translate-x-1 transition-all duration-150'>Terms and conditions</a>
              <a href="#" className='underline hover:text-web-orange hover:translate-x-1 transition-all duration-150'>Privacy</a>
              <a href="#" className='underline hover:text-web-orange hover:translate-x-1 transition-all duration-150'>Cookies</a>
              <a href="#" className='underline hover:text-web-orange hover:translate-x-1 transition-all duration-150'>Modern Slavery Statement</a>
            </div>
            <div className="basis-1/6 flex flex-col gap-6">
            <h3 className='text-[16px] font-bold text-web-black'>Important Links</h3>
              <a href="#" className='underline hover:text-web-orange hover:translate-x-1 transition-all duration-150'>Get help</a>
              <a href="#" className='underline hover:text-web-orange hover:translate-x-1 transition-all duration-150'>Add your restaurant</a>
              <a href="#" className='underline hover:text-web-orange hover:translate-x-1 transition-all duration-150'>Sign up to deliver</a>
              <a href="#" className='underline hover:text-web-orange hover:translate-x-1 transition-all duration-150'>Create a business account</a>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-web-black px-20 flex py-7.5'>
        <div className="basis-1/2 text-white">Order.uk Copyright 2024, All Rights Reserved.</div>
        <div className="basis-1/2 text-white flex gap-8">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
      </div>
    </div>
  )
}
