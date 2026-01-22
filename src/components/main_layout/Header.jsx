import React, {useEffect, useState} from 'react'
import { Button } from "@/components/ui/button"
import {cn} from "../../lib/utils"
import { LoginModal } from './LoginModal';
import { useAuth } from '@/stores/authStore';
import { useQuery } from '@tanstack/react-query';
import { userKey } from '@/cache_keys/authKey';
import { Toaster, toast } from 'sonner';

export default function Header() {
  const { user, token, logout, setUser, getUser } = useAuth();
  const [loginSuccess, setLoginSucess] = useState(null);
  const [active, setActive] = useState(1);
  const [openLogin, setOpenLogin] = useState(false);

  const { data, isFetching } = useQuery({
    queryKey: userKey,
    queryFn: getUser,
    enabled: !!token?.access_token,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  useEffect(() => {
    if (loginSuccess) {
      if (loginSuccess.status === "success") {
        toast.success(loginSuccess.message);
      } else {
        toast.error(loginSuccess.message);
      }
      setLoginSucess(null);
    }
  }, [loginSuccess]);

  const handleChangeTab = (e) => {
    setActive(+e.target.dataset.navBtn);
  };
  return (
    <div className='h-25 fixed top-0 left-0 right-0 z-30 bg-white'>
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
            {token?.access_token ? (isFetching ? <span>Loading...</span>:(<><span>Hi, {user?.name}</span><Button onClick={logout} className={cn("px-6 py-4 rounded-full text-lg text-white hover:cursor-pointer")}>Logout</Button></>)) : (<div>
              <Button onClick={() => setOpenLogin(true)} className={cn("px-4 py-6 rounded-full hover:cursor-pointer")}>
                <img src="/header_img/Male User.svg" alt="login_logo" />
                <span>Login/Signup</span>
              </Button>
              <LoginModal setLoginSucess={setLoginSucess} openLogin={openLogin} closeLogin={() => setOpenLogin(false)}/>
            </div>)}
          </div>
        </div>
      </div>
      <Toaster position='top-right' richColors/>
    </div>
  )
}
