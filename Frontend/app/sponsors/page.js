"use client"
import React, {useEffect} from 'react'

function page() {
    useEffect(() => {
              var item = document.getElementById("scroll");
          
              window.addEventListener("wheel", function (e) {
                if (e.deltaY > 0) item.scrollLeft += 100;
                else item.scrollLeft -= 100;
              });
            }, []);
  return (
    <div className='flex flex-col items-center justify-center w-full gap-5 -mt-[3%] md:mt-0 md:pt-[3%] visible-delay'>
        <h1 className='text-3xl md:text-4xl'>
            Our Sponsors
        </h1>

        <div className='flex justify-center w-full gap-10'>
            <div className='flex flex-col gap-2 items-center max-w-1/2 w-fit'>
                <h2 className='text-md md:text-xl'>
                    Gold Sponsors
                </h2>
                <div className='flex justify-center gap-5 items-center'>
                    <img src='/sponsors/amdocs.png' alt='Amdocs' className='w-24 md:w-32 aspect-auto' />
                </div>
            </div>

            <div className='flex flex-col gap-2 items-center max-w-1/2 w-fit'>
                <h2 className='text-md md:text-xl'>
                    Powered By
                </h2>
                <div className='flex justify-center gap-5 items-center'>
                    <img src='/sponsors/Qualcomm.png' alt='Qualcomm' className='w-24 md:w-32 aspect-auto' />
                </div>
            </div>
        </div>

        <div className='flex justify-center w-full gap-0 md:gap-10 lg:-mt-5 flex-wrap'>
            <div className='flex-1 flex flex-col gap-2 items-center max-w-1/2 w-fit'>
                <h2 className='text-md md:text-xl'>
                    Bronze Sponsors
                </h2>
                <div className='flex justify-center gap-5 items-center flex-wrap'>
                    <img src='/sponsors/Triumph.png' alt='Triumph' className='w-20 md:w-32 aspect-auto' />
                    <img src='/sponsors/Jawa.png' alt='Jawa Moto' className='w-20 md:w-32 aspect-auto' />
                    <img src='/sponsors/Suzuki.png' alt='Suzuki' className='w-20 md:w-32 aspect-auto' />
                </div>
            </div>

            <div className='flex-1 flex flex-col gap-2 items-center max-w-1/2 w-fit'>
                <h2 className='text-md md:text-xl text-center'>
                    Study Abroad Partners
                </h2>
                <div className='flex justify-center gap-5 items-center flex-wrap'>
                    <img src='/sponsors/fateh.png' alt='Fateh Ed' className='w-20 md:w-32 aspect-auto' />
                </div>
            </div>
        </div>

        <div className='flex justify-center w-full gap-10 overflow-hidden'>
            <div className='flex-1 flex flex-col gap-2 items-center'>
                <h2 className='text-md md:text-xl w-full text-center'>
                    Other Sponsors
                </h2>
                <div id='scroll' className='flex gap-2 md:gap-5 items-center overflow-scroll no-scrollbar'>
                    <img src='/sponsors/TVS.png' alt='TVS motors' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/HT.png' alt='Hindustan Times' className='w-16 md:w-28 aspect-auto' />
                    <img src='./sponsors/Fresca.jpg' alt='Fresca' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/hdfc.png' alt='HDFC' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/farmley.jpg' alt='Farmley' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/carstreet.png' alt='Carstreet' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/freedo.png' alt='Freedo' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/gnk.png' alt='GNK Jewellers' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/jagranjosh.png' alt='Jagran Josh' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/pcmbmemes.jpg' alt='PCMB Memes' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/stockgro.png' alt='Stockgro' className='w-16 md:w-28 aspect-auto' />
                    <img src='/sponsors/talerang.png' alt='Talerang' className='w-16 md:w-28 aspect-auto' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page