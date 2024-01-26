import React from 'react'
import Police from '../data/Police'
import Link from 'next/link'
const SecurityCompoenet = () => {
    return (
        <>
            <div className='border border-black px-20 rounded-xl ml-16 mr-10 bg-blue-300 flex justify-center items-center mt-10'>
                <div className="flex flex-row">
                    <div className='flex justify-center w-1/2'>
                        <img className='w-96  h-64' src='/policeheading.png' alt='' />
                    </div>
                    <div className='px-10 flex flex-col justify-center items-center w-1/2'>
                        <div className='h-1/2'>
                            <h1 className='text-8xl font-mono'>
                                Security
                            </h1>
                        </div>
                        <div className='h-1/2'>
                            <h1 className='text-sm font-mono underline'>
                                Delhi, India's bustling heart, thrums with life and opportunity. But the vibrant chaos dances to the rhythm of unwavering security, orchestrated by the Delhi Police. They are more than just men and women in blue; they are the city's silent guardians, weaving a tapestry of safety for millions.

                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border border-black p-10 mt-16 mr-16 ml-16 rounded-xl bg-blue-300 flex flex-col justify-center'>
                <div className='flex justify-center h-1/2'>
                    <h1 className='text-8xl font-mono'>
                        Security
                    </h1>
                </div>
                <div className='h-1/2 mt-5'>
                    <h1 className='text-sm font-mono '>
                        As the beating heart of India, Delhi thrives on the unwavering dedication of its protectors, the Delhi Police. More than just a force in blue, they stand as guardians of a vibrant city, weaving a tapestry of safety and security for millions. Their commitment extends beyond patrolling streets and upholding law; it's about collaboration, innovation, and building trust with the community.
                        Safety Net for All: Whether you're a resident navigating bustling markets, a tourist exploring iconic landmarks, or a student pursuing dreams, Delhi Police offers a multi-layered safety net. From proactive crime prevention and specialized units like traffic police and anti-terrorism squads, to cutting-edge technology integration and a 24/7 emergency helpline (100), they prioritize your well-being around the clock.
                        Hand in Hand with the Community: Delhi Police's approach to security is woven with the threads of community collaboration. Through proactive outreach programs, neighborhood watch initiatives, and open communication channels, they empower citizens to be active participants in their own safety. Whether it's training programs for residents or feedback mechanisms for continuous improvement, Delhi Police believes in building a safer city together.
                        Feel the Difference: Experience the unwavering commitment of Delhi Police firsthand. Download their app for instant access to resources and emergency contact, participate in community events, and join hands in building a city where everyone feels safe and secure.


                    </h1>
                </div>
            </div>

            <div className='flex justify-center items-center mt-16 font-mono'>
                <h1 className='text-5xl'>Delhi Security Services</h1>
            </div>
            <div className="px-20 mt-10 mb-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {Police.map((item) => {
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

export default SecurityCompoenet