import React from 'react'

const Subscription = () => {
  return (
    <div class="pb-16 pt-8">
      <div class="flex items-center justify-center font-black text-4xl p-3">Choose your plan</div>
      <p class="flex justify-center">Enjoy unlimited entertainment, tailored just for you:</p>
      <p class="flex justify-center">Choose Your Cinematic Journey with our Flexible Subscription Plans!</p>
      <div class="flex flex-row items-center justify-center pt-5">
        <div class="flex flex-col mx-8 p-5 m-5 bg-[#0c0c0c] rounded-[30px]">
          <div class="p-3 mx-8">
            <p class="flex justify-center font-bold text-3xl">Gold</p>
            <p class="flex justify-center font-black text-xl text-yellow-700">$8.99/month</p>
          </div>          
          <ol class="mx-3 list-disc">
            <li>No ads</li>
            <li>3 profiles</li>
            <li>720p</li>
            <li>Download upto 50 movies</li>
          </ol>
          <div class="flex items-center justify-center pt-5 ">
            <button class="bg-[#1d1d1d] rounded-full p-3 w-32 font-bold">Free trial</button>            
          </div>
          <p class="flex justify-center mb-3 text-[#484848]">Learn more about this plan</p>          
        </div>
        <div class="flex flex-col mx-8 p-5 m-5 bg-[#0c0c0c] rounded-[30px] ring ring-[#FD1D1D]">
          <div class="p-3 mx-8">
            <p class="flex justify-center font-bold text-3xl">Platinum</p>
            <p class="flex justify-center font-black text-xl text-[#FD1D1D]">$28.99/month</p>
          </div>          
          <ol class="mx-3 list-disc">
            <li>No ads</li>
            <li>7 profiles</li>
            <li>8K</li>
            <li>Unlimited downloads</li>
            <li>Watch offline</li>
          </ol>
          <div class="flex items-center justify-center pt-5 ">
            <button class="bg-[#FD1D1D] rounded-full p-3 w-32 font-bold">Free trial</button>            
          </div>
          <p class="flex justify-center mb-3 text-[#484848]">Learn more about this plan</p>          
        </div>
        <div class="flex flex-col mx-8 p-5 m-5 bg-[#0c0c0c] rounded-[30px]">
          <div class="p-3 mx-8">
            <p class="flex justify-center font-bold text-3xl">Diamond</p>
            <p class="flex justify-center font-black text-xl text-yellow-700">$19.99/year</p>
          </div>          
          <ol class="mx-3 list-disc">                       
            <li>No ads</li>
            <li>5 profiles</li>
            <li>4K</li>
            <li>100 downloads</li>
          </ol>
          <div class="flex items-center justify-center pt-5 ">
            <button class="bg-[#1d1d1d] rounded-full p-3 w-32 font-bold">Free trial</button>            
          </div>
          <p class="flex justify-center mb-3 text-[#484848]">Learn more about this plan</p>          
        </div>

      </div>
    </div>
  )
}

export default Subscription