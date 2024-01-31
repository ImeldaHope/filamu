import React from 'react'


const Navigation = () => {
  return (
    <header >
        <nav class="flex justify-between items-center w-[92%] mx-auto">
            <div class="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-500" href=''>Movies</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href=''>Series</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href=''>TV Shows</a>
                    </li>
                </ul>
            </div>
            <div >                
                <p class="font-extrabold content-center">Filamu</p>
            </div>
            <div class="space-x-4">
                <button class="rounded-full px-3 m-2 border  hover:text-[#000000] hover:bg-[#ffffff] p-1">Sign In</button>
                <button class="rounded-full px-2 m-2 border bg-[#FD1D1D]  hover:text-[#FD1D1D] hover:bg-[#ffffff] hover:font-semibold hover:border-[#FD1D1D] p-1">Sign Up</button>                     
            </div>         
        </nav>        
    </header>
  )
}
export default Navigation