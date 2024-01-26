import React from 'react'
import Tourist from '../data/tourist'
import Link from 'next/link'
const TouristComponent = () => {
    return (
        <>
            <div className='border border-black px-20 rounded-xl ml-16 mr-10 bg-blue-300 flex justify-center items-center mt-10'>
                <div className="flex flex-row">
                    <div className='flex justify-center w-1/2'>
                        <img className='w-96  h-64' src='/touristheading.png' alt='' />
                    </div>
                    <div className='px-10 flex flex-col justify-center items-center w-1/2'>
                        <div className='h-1/2'>
                            <h1 className='text-8xl font-mono'>
                                Tourist
                            </h1>
                        </div>
                        <div className='h-1/2'>
                            <h1 className='text-sm font-mono underline'>
                                Close your eyes and picture this: ancient temples whispering tales of emperors, bustling bazaars overflowing with vibrant colors, and modern marvels reaching for the sky. This is Delhi, a city where history and contemporary life pulse with an intoxicating rhythm.

                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border border-black p-10 mt-16 mr-16 ml-16 rounded-xl bg-blue-300 flex flex-col justify-center'>
                <div className='flex justify-center h-1/2'>
                    <h1 className='text-8xl font-mono'>
                        Tourist Attraction
                    </h1>
                </div>
                <div className='h-1/2 mt-5'>
                    <h1 className='text-sm font-mono '>
                        Old Delhi: Wander through narrow lanes where Mughal emperors once walked, marvel at the Red Fort's grandeur, and whisper prayers at Jama Masjid.
                        New Delhi: Witness the architectural might of India Gate, stand in awe of the iconic Parliament House, and soak in the serenity of Akshardham Temple.
                        Qutub Minar: Gaze at the sky-piercing tower, a testament to ancient architectural prowess.
                        Humayun's Tomb: Admire the intricate latticework and serene gardens, a precursor to the Taj Mahal.
                        Indulge in a Feast for the Senses:
                        Chandni Chowk: Get lost in a labyrinth of spices, textiles, and street food delicacies, bargaining your way to treasures.
                        Dilli Haat: Uncover India's diverse handicrafts, savor regional specialties, and witness live performances.
                        Khan Market: Explore trendy cafes, curated boutiques, and hidden bars, pulse of Delhi's cosmopolitan spirit.
                        Karim's: Savour legendary Mughlai cuisine, where generations have come for an unforgettable culinary experience.
                        Fuel Your Thrillometer:
                        Adventure Sports: Hike through the Aravalli Hills, rappel down rugged cliffs, or zipline through lush forests.
                        Wildlife Safari: Spot tigers lounging in the sun at the National Zoological Park, or witness birdlife galore at Okhla Bird Sanctuary.
                        Heritage Walks: Join themed walks through bustling markets, hidden bylanes, and forgotten ruins, discovering Delhi's secret stories.
                        Bollywood Extravaganza: Catch a vibrant Bollywood show, immerse yourself in the masala and music, and let the energy captivate you.
                        Beyond the Tourist Trail:
                        Local markets: Shop for quirky souvenirs, bargain for handcrafted treasures, and connect with the friendly locals.
                        Sufi music evenings: Find peace in the soulful melodies of qawwali, a timeless cultural experience.

                    </h1>
                </div>
            </div>

            <div className='flex justify-center items-center mt-16 font-mono'>
                <h1 className='text-5xl'>Delhi Tourist Attraction</h1>
            </div>
            <div className="px-20 mt-10 mb-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {Tourist.map((item) => {
                        return (
                            <>
                                <div className="flex justify-center flex-col space-y-3 cursor-pointer">
                                    <div className="relative h-auto w-auto group">
                                        <img className="rounded-xl object-cover w-48 h-48" src={item.imageURL} />
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

export default TouristComponent