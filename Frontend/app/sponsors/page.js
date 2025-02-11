'use client'
import React, {useEffect, useState, useRef} from 'react'

function page() {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.3;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        var item = document.getElementById("scroll");
    
        window.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) item.scrollLeft += 100;
        else item.scrollLeft -= 100;
        });
    }, []);

  return (
    <div className='visible-delay flex flex-col gap-5 items-center justify-center w-screen h-3/4 relative overflow-auto z-10'>
        <div className='flex items-center justify-center w-full gap-2 md:gap-7 flex-col md:flex-row'>
            <div className='card-bg rounded-md p-5 flex gap-5'>
                <div className='h-full'>
                    <h1 className='w-full text-center text-sm md:text-base'>
                        Gold Sponsors
                    </h1>

                    <div>
                        <img src='/sponsors/amdocs.png' alt='Amdocs' className='w-20 md:w-28 aspect-auto' />
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <h1 className='w-full text-center text-sm md:text-base'>
                        Powered By
                    </h1>

                    <div className='flex-1 flex items-center'>
                        <img src='/sponsors/Qualcomm.png' alt='Qualcomm' className='w-24 md:w-32 aspect-auto' />
                    </div>
                </div>
            </div>

            <div className='card-bg rounded-md p-5 flex gap-5'>
                <div className='h-full flex flex-col gap-2'>
                    <h1 className='w-full text-center text-sm md:text-base'>
                        Bronze Sponsors
                    </h1>

                    <div className='flex flex-wrap justify-center gap-y-2'>
                        <img src='/sponsors/triumph.png' alt='Triumph' className='w-14 md:w-24 aspect-auto' />
                        <img src='/sponsors/Jawa.png' alt='Jawa Moto' className='w-14 md:w-24 aspect-auto' />
                        <img src='/sponsors/Suzuki.png' alt='Suzuki' className='w-14 md:w-24 aspect-auto' />
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <h1 className='w-full text-center text-sm md:text-base'>
                        Study Abroad Partners
                    </h1>

                    <div className='flex-1 flex items-center'>
                        <img src='/sponsors/fateh.png' alt='Fateh Ed' className='w-20 md:w-32 aspect-auto' />
                    </div>
                </div>
            </div>
        </div>

        <h1 className='text-lg md:text-2xl'>
            Our Partners
        </h1>

        <div 
            className='flex px-5 gap-5 max-w-full overflow-x-scroll no-scrollbar' 
            id='scroll'
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className='card-bg rounded-md md:p-5 flex md:gap-y-3 min-w-[17rem] md:min-w-80 items-end justify-center flex-wrap'>
                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/Yocto.png' alt='Yocto' className='w-16 md:w-28 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Medical
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/ds.png' alt='DS Group' className='w-16 md:w-28 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Food
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/farmley.jpg' alt='Farmly' className='w-16 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Snack
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/fresca.jpg' alt='Fresca' className='w-16 md:w-28 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Beverage
                    </p>
                </div>
            </div>

            <div className='card-bg rounded-md md:p-5 flex md:gap-y-3 min-w-[17rem] md:min-w-80 items-end justify-center flex-wrap'>
                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/pcmbmemes.jpg' alt='PCMB Memes' className='w-12 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Media
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/HT.png' alt='Hindustan Times' className='w-12 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Media
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/jagranjosh.png' alt='Jagran Josh' className='w-16 md:w-24 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Media
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/dtu-times.png' alt='DTU Times' className='w-16 md:w-24 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Media
                    </p>
                </div>
            </div>

            <div className='card-bg rounded-md md:p-5 flex md:gap-y-3 min-w-[17rem] md:min-w-80 items-end justify-center flex-wrap'>
                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/adobe.png' alt='Adobe' className='w-16 md:w-24 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Hiring
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/hdfc.png' alt='HDFC' className='w-16 md:w-28 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Banking
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/stockgro.png' alt='StockGro' className='w-16 md:w-24 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Trading
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/talerang.png' alt='Talerang' className='w-16 md:w-28 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Work Readiness
                    </p>
                </div>
            </div>

            <div className='card-bg rounded-md md:p-5 flex md:gap-y-3 min-w-[17rem] md:min-w-80 items-end justify-center flex-wrap'>
                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/gfg.png' alt='GFG' className='w-16 md:w-16 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Education
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/aditya birl.png' alt='Aditya Birla Group' className='w-16 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Hackathon
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/ea fc.png' alt='EA FC' className='w-16 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Gaming
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/wayspire.jpg' alt='Wayspire' className='w-16 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Upskilling
                    </p>
                </div>
            </div>

            <div className='card-bg rounded-md md:p-5 flex md:gap-y-3 min-w-[17rem] md:min-w-80 items-end justify-center flex-wrap'>
                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/kgen.png' alt='KGen' className='w-16 md:w-16 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Registration
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/nss.jpg' alt='NSSS' className='w-16 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Social Outreach
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/chess.png' alt='Chess' className='w-16 md:w-28 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Platform
                    </p>
                </div>
            </div>

            <div className='card-bg rounded-md md:p-5 flex md:gap-y-3 min-w-[17rem] md:min-w-80 items-end justify-center flex-wrap'>
                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/carstreet.png' alt='Carstreet' className='w-12 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Auto Expo
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/freedo.png' alt='Freedo' className='w-12 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Mobility
                    </p>
                </div>

                <div className='flex flex-col items-center w-32'>
                    <img src='/sponsors/gnk.png' alt='GNK Jewellers' className='w-12 md:w-20 aspect-auto' />
                    <p className='w-full text-center text-sm md:text-base'>
                        Jewellery
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page