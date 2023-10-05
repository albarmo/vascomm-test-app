import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 z-50 w-full h-16 bg-white border-b border-[#E4E4E4] px-10 flex justify-between items-center'>
            <Image src={'/assets/branding/logo.svg'} alt='vascomm' width={168} height={100} />
            <div className="relative text-gray-600 focus-within:text-gray-400 w-2/5 hidden md:flex">
                <span className="absolute inset-y-0 right-2 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#1F1C17" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.5 17.5L13.875 13.875" stroke="#1F1C17" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </span>
                <input type='text' placeholder='Cari parfum kesukaanmu' className='bg-low-grey text-gray-600 rounded px-4 w-full h-8 text-sm' />
            </div>
            <section className='flex space-x-4'>
                <button className='font-sans font-semibold px-4 py-1 border-[1px] border-primary uppercase text-primary border-blackrounded-xs'>
                    Masuk
                </button>
                <button className='font-sans font-semibold px-4 py-1 bg-primary  uppercase text-white border-blackrounded-xs'>
                    Daftar
                </button>
            </section >
        </nav >
    )
}

export default Navbar