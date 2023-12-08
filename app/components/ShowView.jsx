import React from 'react'

const ShowView = () => {
  return (
    <>
      <hero>
        <div class="flex flex-row border-b mx-5 ">
          <div> 
              <div class="p-10">
                <p class="text-5xl font-sans font-black">Movie Name</p>
              </div>                             
              <div class="flex flex-row pl-10">
                <p class="p-7">Genre</p>
                <p class="p-7">Year</p>
                <p class="p-7">Rating</p>
              </div>            
              <div class="flex flex-wrap w-[50%]">
                <p class="p-10">Eclipsed Shadows is a thrilling fantasy adventure that combines breathtaking visuals, magical realism, and a compelling narrative to explore the power of destiny, the choices we make, and the blurred line between light and shadow.</p>                   
              </div>            
                </div> 
          <div class="flex flex-row relative m-8">
            <p class="">Thumbnail</p>            
            <button class="rounded-md bg-[#FD1D1D]">Play</button>
          </div>          
        </div>      
      </hero>  
      <div class="">
        <p class="p-8 flex items-center justify-center text-3xl font-sans font-black">TOP 10s in `Country Name`</p>
        <div>
          <p class="flex items-center justify-center text-1xl font-sans font-black">TOP 10 Movies in `Country Name`</p>
          
          <div class="flex flex-row items-center justify-between overflow-x-auto no-scrollbar mx-5">
            {/* <div class="flex flex-row relative">
              <button class="">swipe left</button>
              <button class="">swipe right</button>              
            </div> */}
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">1</p>
              <div class="absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>                
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">2</p>
              <div class="absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="-z-6 font-black text-[200px] opacity-90">3</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">4</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">5</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">6</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">7</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">8</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">9</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">10</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>            
          </div>
          
        </div>
        <div>
          <p class="flex items-center justify-center text-1xl font-sans font-black">TOP 10 Series in `Country Name`</p>
          
          <div class="flex flex-row items-center justify-between overflow-x-auto no-scrollbar mx-5">
            {/* <div class="flex flex-row relative">
              <button class="">swipe left</button>
              <button class="">swipe right</button>              
            </div> */}
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">1</p>
              <div class="absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>                
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">2</p>
              <div class="absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="-z-6 font-black text-[200px] opacity-90">3</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">4</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">5</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">6</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">7</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">8</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">9</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>
            <div class="flex flex-row relative p-8 mx-5">
              <p class="font-black text-[200px] opacity-90">10</p>
              <div class=" absolute top-0 -right-12 transform translate-y-1/2 w-32 h-44 rounded-lg shadow bg-gradient-to-r from-slate-400 to-red-200"></div>
            </div>            
          </div>          
        </div>               
      </div>
      
    </>
  )
}

export default ShowView