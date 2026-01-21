import React, {useState} from 'react'
import { Button } from "@/components/ui/button"
import {cn} from "../../lib/utils"
export default function Header() {
  const [active, setActive] = useState(true);
  const handleChangeTab = (e) => {
    setActive(+e.target.dataset.navBtn);
  }
  return (
    <div className='h-25 fixed top-0 left-0 right-0 z-99 bg-white'>
      <div className='max-w-350 mx-auto h-full flex items-center'>
        <div className='w-full flex h-15 justify-between'>
          <div>
            <img src="/LOGO 1.png" alt="header_logo" />
          </div>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-3'>
              <Button data-nav-btn="1" className={cn("px-6 py-4 text-black rounded-full bg-transparent text-lg hover:text-white hover:cursor-pointer", active === 1 && "text-white bg-web-orange")} onClick={handleChangeTab}>Home</Button>
              <Button data-nav-btn="2" className={cn("px-6 py-4 text-black rounded-full bg-transparent text-lg hover:text-white hover:cursor-pointer", active === 2 && "text-white bg-web-orange")} onClick={handleChangeTab}>Browser Menu</Button>
              <Button data-nav-btn="3" className={cn("px-6 py-4 text-black rounded-full bg-transparent text-lg hover:text-white hover:cursor-pointer", active === 3 && "text-white bg-web-orange")} onClick={handleChangeTab}>Special Offers</Button>
              <Button data-nav-btn="4" className={cn("px-6 py-4 text-black rounded-full bg-transparent text-lg hover:text-white hover:cursor-pointer", active === 4 && "text-white bg-web-orange")} onClick={handleChangeTab}>Restaurants</Button>
              <Button data-nav-btn="5" className={cn("px-6 py-4 text-black rounded-full bg-transparent text-lg hover:text-white hover:cursor-pointer", active === 5 && "text-white bg-web-orange")} onClick={handleChangeTab}>Track Order</Button>
            </div>
            <div>
              <Button className={cn("px-4 py-6 rounded-full hover:cursor-pointer")}>
                <img src="/header_img/Male User.svg" alt="login_logo" />
                <span>Login/Signup</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
