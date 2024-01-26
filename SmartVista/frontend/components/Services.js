import React from 'react'
import functions from '../data/functions'
import Link from 'next/link'
const Services = () => {
    return (
        <>
            <div className='flex justify-center items-center ml-16 font-mono'>
                <h1 className='text-6xl'>Services We Provide</h1>
            </div>
            <div className="px-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {functions.map((item) => {
                        return (
                            <>
                                <div className="flex justify-center flex-col space-y-3 cursor-pointer">
                                    <div className="relative h-auto w-auto group">
                                        <img className="border border-black rounded-xl object-cover h-56 w-56" src={item.imageURL} />
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

export default Services