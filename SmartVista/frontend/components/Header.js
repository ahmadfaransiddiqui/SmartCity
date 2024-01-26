import { GlobeAmericasIcon, Bars3Icon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'


function Header() {
    return (
        <header className="sticky top-0 transition-all md:grid md:grid-cols-3 items-center px-10 xl:px-20 py-4 z-50 bg-white border-b">
            <div>
                <h1 className='text-3xl font-mono font-bold text-blue-300'>CityHub</h1>
            </div>

            <div className="flex-1 flex xl:justify-center px-6 transition-all duration-300">
                <button className="flex-1 flex items-center justify-between border rounded-full p-2 w-[300px] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center divide-x">
                        <p className="text-gray-800 bg-transparent text-sm font-medium px-4" type="text">
                            Get Help
                        </p>
                        <p className="flex justify-end ml-44 text-gray-800 bg-transparent text-sm font-medium px-4" type="text">
                            Get Services
                        </p>
                        {/* <p className="text-gray-600 bg-transparent text-sm font-light px-4">Add guests</p> */}
                    </div>

                </button>
            </div>

            <div className="flex items-center justify-end">
                <div className="border border-transparent cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2">
                    <a className="text-sm font-medium transition-all duration-300 text-gray-800" href="#">
                        Delhi
                    </a>
                </div>
                <div className="flex items-center bg-white text-gray-500 space-x-2 border rounded-full px-2 py-1 cursor-pointer shadow-sm hover:shadow-md transition">
                    <Bars3Icon className="h-5 w-5" />

                    <UserCircleIcon className="h-8 w-8" />
                </div>
            </div>
        </header>
    )
}

export default Header
