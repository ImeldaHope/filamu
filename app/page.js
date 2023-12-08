import Navigation from "@/app/components/Navigation"
import Footer from "@/app/components/Footer"
import ShowView from "./components/ShowView"
import './main.css'
import Subscription from "./components/Subscription"

export default function Home() {
  return (
    <>
      
      <Navigation />
      <ShowView/>
      <Subscription/>
      {/* <div class="flex items-center justify-center w-4/5 min-h-fit mx-auto my-auto bg-red-800 ">
        <div>Download app</div>     
        <div class="w-full h-96 bg-slate-300">Image here</div> 
        <div class="w-full h-96 bg-slate-900">Image here</div> 
        <div class="w-full h-96 bg-slate-600">Image here</div>   
      </div>       */}

      <Footer />
      
    </>
  )
}