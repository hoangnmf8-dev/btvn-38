import React from 'react'

export default function MobileApp() {
  return (
    <div className='mt-23.5'>
      <div className='max-w-350 h-152.75 mx-auto bg-web-white'>
        <div className='flex h-full'>
          <div className='basis-1/2 h-full relative z-10'>
            <div className='absolute bottom-3 -left-5 w-200'>
              <img src="/mobile_app_img/friends-laughing-using-mobiles 1.png" alt="friends-laughing-using-mobiles_1" />
            </div>
            <div className='absolute bottom-0 left-0 w-200'>
              <img className='w-full object-cover' src="/mobile_app_img/friends-laughing-using-mobiles 2.png" alt="friends-laughing-using-mobiles_1" />
            </div>
          </div>

          <div className='max-w-1/2 basis-1/2 h-full flex flex-col items-center justify-center'>
            <h1 className='flex items-baseline mb-2'>
              <img className='inline-block w-60' src="/LOGO 1.png" alt="Logo" /><span className='font-bold text-[54px]'>ing is more</span>
            </h1>
            <div className='relative right-20 w-200 bg-web-black rounded-full pr-15 flex justify-end mb-6'>
              <p className='text-[50px]'>
                <span className='text-web-orange underline'>Personalised</span>
                <span className='text-white'> & Instant</span>
                </p>
            </div>
            <p className='text-[20px] mb-6'>Download the Order.uk app for faster ordering</p>
            <div className='flex justify-center gap-2'>
              <a href='#' className='block w-51.5 bg-web-black px-5 py-2 rounded-sm hover:scale-95 transition-all duration-95'>
                <img className='w-full ' src="/mobile_app_img/apple.png" alt="apple.png" />
              </a>
              <a href='#' className='block w-51.5 bg-web-black px-5 py-2 rounded-sm hover:scale-95 transition-all duration-95'>
                <img className='w-full ' src="/mobile_app_img/android.png" alt="apple.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
