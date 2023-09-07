import React from 'react';
import video from "./1.mp4"

const Banner = () => {
  return (
    <>
    <div className='py-16 px-6'>
        <div className='grid md:grid-cols-2'>
            <div>
            <h1 className='font-bold text-4xl leading-[50px]'>Eat What You Cook <br /> With Us, Together</h1>
            <h1 className='text-2xl leading-[30px]'>when you eat something that cooked by <br /> yourself, the happiness is priceless</h1>
            <button type="button" className=" mt-6 bg-yellow-300 hover:bg-yellow-400 font-bold py-2 px-4 rounded-full" >
              Decide A Menu
            </button>
            </div> 
            <div>
                <video  className='rounded-md mt-6 md:mt-0' src={video} autoPlay controls loop></video>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Banner