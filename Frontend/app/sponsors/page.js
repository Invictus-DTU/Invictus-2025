import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-5 pt-[3%] visible-delay'>
        <h1 className='text-4xl'>
            Our Sponsors
        </h1>

        <div className='flex justify-center w-full gap-10'>
            <div className='flex flex-col gap-2 items-center max-w-1/2 w-fit'>
                <h2 className='text-xl'>
                    Gold Sponsors
                </h2>
                <div className='flex justify-center gap-5 items-center'>
                    <img src='/sponsors/amdocs.jpg' alt='Amdocs' className='w-32 aspect-auto' />
                </div>
            </div>

            <div className='flex flex-col gap-2 items-center max-w-1/2 w-fit'>
                <h2 className='text-xl'>
                    Powered By
                </h2>
                <div className='flex justify-center gap-5 items-center'>
                    <img src='/sponsors/Qualcomm.webp' alt='Qualcomm' className='w-32 aspect-auto' />
                </div>
            </div>
        </div>

        <div className='flex justify-center w-full gap-10 -mt-5 flex-wrap'>
            <div className='flex-1 flex flex-col gap-2 items-center max-w-1/2 w-fit'>
                <h2 className='text-xl'>
                    Bronze Sponsors
                </h2>
                <div className='flex justify-center gap-5 items-center'>
                    <img src='/sponsors/Triumph.png' alt='Triumph' className='w-32 aspect-auto' />
                    <img src='/sponsors/Jawa.png' alt='Jawa Moto' className='w-32 aspect-auto' />
                    <img src='/sponsors/Suzuki.png' alt='Suzuki' className='w-32 aspect-auto' />
                </div>
            </div>

            <div className='flex-1 flex flex-col gap-2 items-center max-w-1/2 w-fit'>
                <h2 className='text-xl'>
                    Study Abroad Partners
                </h2>
                <div className='flex justify-center gap-5 items-center'>
                    <img src='/sponsors/fateh.png' alt='Fateh Ed' className='w-32 aspect-auto' />
                </div>
            </div>
        </div>

        <div className='flex justify-center w-full gap-10 overflow-hidden'>
            <div className='flex-1 flex flex-col gap-2 items-center'>
                <h2 className='text-xl w-full text-center'>
                    Other Sponsors
                </h2>
                <div className='flex gap-5 items-center justify-between move'>
                    <img src='/sponsors/TVS.png' alt='TVS motors' className='h-20 aspect-auto' />
                    <img src='/sponsors/HT.png' alt='Hindustan Times' className='w-32 aspect-auto' />
                    <img src='/sponsors/Fresca.jpg' alt='Fresca' className='h-20 aspect-auto' />
                    <img src='/sponsors/hdfc.png' alt='HDFC' className='h-20 aspect-auto' />
                    <img src='/sponsors/farmley.jpg' alt='Farmley' className='w-32 aspect-auto' />
                    <img src='/sponsors/carstreet.jpg' alt='Carstreet' className='w-32 aspect-auto' />
                    <img src='/sponsors/freedo.png' alt='Freedo' className='w-32 aspect-auto' />
                    <img src='/sponsors/gnk.jpg' alt='GNK Jewellers' className='w-32 aspect-auto' />
                    <img src='/sponsors/jagranjosh.png' alt='Jagran Josh' className='h-20 aspect-auto' />
                    <img src='/sponsors/pcmbmemes.jpg' alt='PCMB Memes' className='w-32 aspect-auto' />
                    <img src='/sponsors/stockgro.png' alt='Stockgro' className='h-20 aspect-auto' />
                    <img src='/sponsors/talerang.png' alt='Talerang' className='h-20 aspect-auto' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page