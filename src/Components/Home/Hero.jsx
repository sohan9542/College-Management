import React from 'react'
import './hero.css'
const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="overlay"></div>
                <div className="hero-texts mt-0 lg:mt-16 flex items-center justify-center flex-col">
                    <h1 className="text-2xl lg:text-5xl space-x-1 font-extrabold text-white">RAJSHAHI POLYTECHNIC INSTITUTE</h1>
                    <h2 className="mt-2 text-sm lg:text-2xl space-x-1 font-extrabold text-white">Own your future learning new skills online</h2>
                    <div className="mt-4 flex items-center mb-6">
                        <input type="text" className="px-2 py-2 w-full lg:py-3 lg:w-96 rounded-l-full" placeholder="If you search you will get bamboo..!😂"/>
                        <button className="text-xs text-white bg-second transition delay-150 ease-linear hover:bg-first px-4 py-1 w-28 lg:py-4 lg:text-md rounded-r-full">Search Now</button>
                    </div>
                    <div className="grid w-10/12 mt-5 lg:mt-28 grid-cols-1 gap-2 lg:gap-3 md:grid-cols-1 lg:grid-cols-3">
                        <div className="bg-first px-2 py-2 lg:py-6 flex">
                            <div className=" border-r border-second px-3 justify-center flex items-center">
                                <h1 className="text-5xl font-bold text-white">10</h1>
                            </div>
                            <div className="px-3 text-white">
                                <h1 className="text-xl lg:text-3xl font-bold cursor-pointer hover:text-second">LATEST NOTIFICATIONS</h1>
                                <p className="cursor-pointer text-sm lg:text-base">See all </p>
                            </div>
                        </div>
                        <div className="bg-first px-2 py-2 lg:py-6 flex">
                            <div className=" border-r border-second px-3 justify-center flex items-center">
                                <h1 className="text-5xl font-bold text-white">5</h1>
                            </div>
                            <div className="px-3 text-white flex items-center flex-col justify-center">
                                <h1 className="text-xl lg:text-3xl font-bold cursor-pointer hover:text-second">ALL RESULTS</h1>
                                <p className="cursor-pointer text-sm lg:text-base">check result</p>
                            </div>
                        </div>
                        <div className="bg-first px-2 py-2 lg:py-6 flex">
                            <div className=" border-r border-second px-3 justify-center flex items-center">
                                <h1 className="text-5xl font-bold text-white">10K</h1>
                            </div>
                            <div className="px-3 text-white flex items-center flex-col justify-center">
                                <h1 className="text-xl lg:text-3xl font-bold cursor-pointer hover:text-second">FOR STUDENTS</h1>
                                <p className="cursor-pointer text-sm lg:text-base">contact us</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
