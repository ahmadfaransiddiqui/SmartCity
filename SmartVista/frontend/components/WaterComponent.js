import React from 'react'
import water from '../data/water'
import Link from 'next/link'
const WaterComponent = () => {
    return (
        <>
            <div className='border border-black px-20 rounded-xl ml-16 mr-10 bg-blue-300 flex justify-center items-center mt-10'>
                <div className="flex flex-row">
                    <div className='flex justify-center w-1/2'>
                        <img className='w-96 h-64' src='/water.png' alt='' />
                    </div>
                    <div className='px-10 flex flex-col justify-center items-center w-1/2'>
                        <div className='h-1/2'>
                            <h1 className='text-8xl font-mono'>
                                Water
                            </h1>
                        </div>
                        <div className='h-1/2'>
                            <h1 className='text-sm font-mono underline'>
                                Imagine cupping your hands to a cascading mountain stream, the clear water quenching your thirst, nurturing your spirit. That's the essence of Delhi Water, a gift flowing through the city's veins, sustaining life and dreams.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border border-black p-10 mt-16 mr-16 ml-16 rounded-xl bg-blue-300 flex flex-col justify-center'>
                <div className='flex justify-center h-1/2'>
                    <h1 className='text-8xl font-mono'>
                        Delhi Water Board
                    </h1>
                </div>
                <div className='h-1/2 mt-5'>
                    <h1 className='text-sm font-mono '>
                    Forget murky puddles and rusty taps! Delhi Water is a testament to human ingenuity, a complex dance of reservoirs, treatment plants, and intricate distribution networks. Every drop, painstakingly purified, reaches homes, hospitals, and businesses, a silent promise of health and vitality.

                    But Delhi Water is more than just a service. It's a symbol of care, a lifeline for millions. They strive for equitable access, ensuring even the most marginalized communities have a taste of this precious resource. They're guardians of conservation, promoting water-saving initiatives and nurturing a culture of responsible consumption. And they're environmental stewards, constantly seeking sustainable solutions to protect this shared treasure.

                    </h1>
                </div>
            </div>

            <div className='flex justify-center items-center mt-16 font-mono'>
                <h1 className='text-5xl'>Delhi Water Service</h1>
            </div>
            <div className="px-20 mt-10 mb-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {water.map((item) => {
                        return (
                            <>
                                <div className="flex justify-center flex-col space-y-3 cursor-pointer">
                                    <div className="relative h-auto w-auto group">
                                        <img className="h-48 w-48 rounded-xl object-cover" src={item.imageURL} />
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mt-5">
                                            <h3 className="text-2xl">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center space-x-1">

                                            </div>
                                        </div>
                                        <Link href={item.link}>
                                        <button className="mt-3 px-3 text-lg bg-yellow-300  hover:bg-blue-500 text-black hover:text-white  border border-black hover:border-transparent rounded">
                                            Checkout
                                        </button>
                                        </Link>
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

export default WaterComponent