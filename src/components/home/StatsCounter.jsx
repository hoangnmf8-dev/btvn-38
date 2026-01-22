import React from 'react'

export default function StatsCounter() {
  return (
    <div className='mt-11'>
      <div className='max-w-350 mx-auto bg-web-orange rounded-md'>
        <div className="flex justify-between items-center gap-2 text-sm md:gap-4 py-4">
          <div className="flex flex-col gap-1 items-center basis-1/4 border-r-gray-300 border-r-2">
            <span className="text-[58px] text-white font-normal">546+</span>
            <span className="text-[24px] font-bold text-white">
              Registered Riders
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center basis-1/4 border-r-gray-300 border-r-2">
            <span className="text-[58px] text-white font-normal">789,900+</span>
            <span className="text-[24px] font-bold text-white">
              Orders Delivered
            </span>
          </div>
          <div className="flex-col gap-1 flex items-center basis-1/4 border-r-gray-300 border-r-2">
            <span className="text-[58px] text-white font-normal">690+</span>
            <span className="text-[24px] font-bold text-white">Restaurants Partnered</span>
          </div>
          <div className="flex-col gap-1 flex items-center basis-1/4">
            <span className="text-[58px] text-white font-normal">17,457+</span>
            <span className="text-[24px] font-bold text-white">Food items</span>
          </div>
        </div>
      </div>
    </div>
  )
}
