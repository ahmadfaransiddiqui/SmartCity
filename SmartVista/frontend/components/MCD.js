import React from 'react'
import MCDData from '../data/MCD'
const MCD = () => {
    return (
        <>
            <div className='border border-black px-20 rounded-xl ml-16 mr-10 bg-blue-300 flex justify-center items-center mt-10'>
                <div className="flex flex-row">
                    <div className='flex justify-center w-1/2'>
                        <img className='w-96  h-64' src='/MCD.png' alt='' />
                    </div>
                    <div className='px-10 flex flex-col justify-center items-center w-1/2'>
                        <div className='h-1/2'>
                            <h1 className='text-8xl font-mono'>
                                MCD
                            </h1>
                        </div>
                        <div className='h-1/2'>
                            <h1 className='text-sm font-mono underline'>
                                The Municipal Corporation of Delhi (MCD) isn't just about infrastructure and services;
                                it's the beating heart of this vibrant city.
                                From keeping streets clean and green to nurturing young minds and ensuring healthcare for all,
                                MCD weaves a tapestry of services that empower Delhi and its residents.
                                Unleash the Potential of Delhi: Explore MCD's diverse services and be part of the city's thriving story
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border border-black p-10 mt-16 mr-16 ml-16 rounded-xl bg-blue-300 flex flex-col justify-center'>
                <div className='flex justify-center h-1/2'>
                    <h1 className='text-8xl font-mono'>
                        MCD
                    </h1>
                </div>
                <div className='h-1/2'>
                    <h1 className='text-sm font-mono '>
                        The Municipal Corporation of Delhi (MCD), a behemoth governing over 25 million souls, wears many hats in its service to the Indian capital. It's not just about asphalt arteries and streetlamps; it's the orchestra conductor of a complex symphony of urban life.
                        Think of it this way:
                        Infrastructure Maestro: Roads snake through the city, bridges carry commuters across the Yamuna, and drains gurgle silently beneath our feet, all thanks to the MCD's meticulous choreography. Parks offer green havens, while sanitation trucks dance a constant ballet against the tide of waste.
                        Public Health Guardian: Clean water flows from taps, waste vanishes into efficient channels, and mosquitoes cower before the MCD's mosquito-battling brigades. It's the watchful sentry safeguarding Delhi's health, day and night.
                        Urban Architect: Building permits rise and fall, businesses find their place in the urban tapestry, and zoning regulations ensure harmonious growth. The MCD shapes the city's physical form, brick by brick.
                        Social Welfare Champion: From the gleam of education in MCD schools to the gentle care in its hospitals, the corporation extends a helping hand to those who need it most. It's the champion of equal opportunity, weaving a safety net for the vulnerable.
                        But this vibrant tapestry also faces challenges. The rapid urbanization of Delhi presents a constant dance on a tightrope – balancing infrastructure growth with environmental sustainability. Air pollution and water scarcity are formidable foes, demanding innovative solutions.
                        Yet, the MCD stands resolute, a determined conductor in the face of complexity. It evolves, adapts, and innovates, its baton raised, leading the city towards a brighter, more sustainable future.

                    </h1>
                </div>
            </div>

            <div className='flex justify-center items-center mt-16 font-mono'>
                <h1 className='text-5xl'>Services MCD Provide</h1>
            </div>
            <div className="px-20 mt-10 mb-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {MCDData.map((item) => {
                        return (
                            <>
                                <div className="flex justify-center flex-col space-y-3 cursor-pointer">
                                    <div className="relative h-auto w-auto group">
                                        <img className="rounded-xl object-cover" src={item.imageURL} />
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mt-5">
                                            <h3 className="text-2xl">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center space-x-1">

                                            </div>
                                        </div>
                                        <button className="mt-3 px-3 text-lg bg-yellow-300  hover:bg-blue-500 text-black hover:text-white  border border-black hover:border-transparent rounded">
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default MCD