import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gradient-to-r from-[#101010] from-35% to-[#FD1D1D] p-5">
      <p class="mx-3 pt-5 font-extrabold">Subscribe to our newsletter</p>
      <div class="flex flex-row pt-2 pb-3">
        <input class=" mx-3 placeholder:normal text-[#000000] placeholder:text-slate-400 block bg-white w-1/3 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter your email address" type="email"/>        
        <div >
          <button class="bg-[#fd1d1d] rounded-md py-2 pl-3 pr-3 shadow-sm font-semibold">Subcribe</button>
        </div>        
      </div>
      <div class="grid grid-cols-3 grid-rows-4 gap-5 p-5">
        <div>        
          <a href='#'> Home </a>                 
        </div>
        <div>        
          <a href='#'> Help Center </a>                 
        </div>
        <div>        
          <a href='#'> FAQs </a>                 
        </div>
        <div>        
          <a href='#'> Trending </a>                 
        </div>
        <div>        
          <a href='#'> Account </a>                 
        </div>
        <div>        
          <a href='#'> Terms & Conditions </a>                 
        </div>
        <div>        
          <a href='#'> Partner </a>                 
        </div>
        <div>        
          <a href='#'> Cookie Preference </a>                 
        </div>
        <div>        
          <a href='#'> Privacy Policy </a>                 
        </div>
        <div>        
          <a href='#'> Find us </a>                 
        </div>
        <div>        
          <a href='#'> What to watch </a>                 
        </div>
        <div>        
          <a href='#'> Legal Notice </a>                 
        </div>                       
      </div>
      <div>
        <p class="p-5">
           <sup class="sups">&copy;</sup>2024
          <a class="p-1 underline" href='#'>ImeldaHope</a>All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer