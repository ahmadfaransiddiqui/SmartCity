import React from 'react'
import { MdLocalPolice } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdImportantDevices } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import Link from 'next/link';
const HeaderIcons = () => {
    return (
        <>
            <div className='flex flex-row gap-x-20 ml-28'>
                <Link href={"/Security"}>
                    <div className='flex flex-col cursor-pointer'>
                        <div className='flex justify-center'>
                            <MdLocalPolice className='text-3xl text-red-500' />
                        </div>
                        <h1 className='underline'>Police</h1>
                    </div>
                </Link>

                <Link href={"/Tourist"}>
                    <div className='flex flex-col cursor-pointer'>
                        <div className='flex justify-center'>
                            <FaCity className='text-3xl text-purple-500' />
                        </div>
                        <h1 className='underline'>City Attraction</h1>
                    </div>
                </Link>

                <Link href={"/MCDPAGE"}>
                    <div className='flex flex-col cursor-pointer'>
                        <div className='flex justify-center'>
                            <FaHeadSideVirus className='text-3xl text-yellow-400' />
                        </div>
                        <h1 className='underline'>MCD</h1>
                    </div>
                </Link>
                <Link href={"/Electricity"}>
                    <div className='flex flex-col cursor-pointer'>
                        <div className='flex justify-center'>
                            <MdElectricBolt className='text-3xl text-yellow-300' />
                        </div>
                        <h1 className='underline'>Electricity</h1>
                    </div>
                </Link>
                <Link href={"/Water"}>
                    <div className='flex flex-col cursor-pointer'>
                        <div className='flex justify-center'>
                            <IoIosWater className='text-3xl text-blue-400' />
                        </div>
                        <h1 className='underline'>Water</h1>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default HeaderIcons