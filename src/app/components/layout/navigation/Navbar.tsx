'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next';
import { logoutAccount } from '@/app/helpers/logout';
import useCustomMutation from '@/app/utils/hooks/useCustomMutation';


const Navbar = () => {
    const router = useRouter()
    const token = getCookie('token');

    const { mutation: logout } =
        useCustomMutation(logoutAccount);

    const logoutHandler = async () => {
        try {
            const resp = await logout.mutateAsync({});
            if (resp?.status === 200) {
                router.push('/')
            }
        } catch (error) {
            console.error('An error occurred while logout account:', error);
        }
        router.refresh()
    }


    const [keyword, setKeyword] = useState('');
    const handleChange = (event: any) => {
        setKeyword(event.target.value);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            router.push(`/search?keyword=${keyword}`)
        }
    };

    return (
        <nav className='fixed top-0 z-50 w-full h-16 bg-white border-b border-[#E4E4E4] px-10 flex justify-between items-center'>
            <Image onClick={() => router.push('/')} src={'/assets/branding/logo.svg'} alt='vascomm' width={168} height={100} className='cursor-pointer' />
            <div className="relative text-gray-600 focus-within:text-gray-400 w-2/5 hidden md:flex">
                <span className="absolute inset-y-0 right-2 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#1F1C17" strokeLinecap="round" stroke-linejoin="round" />
                            <path d="M17.5 17.5L13.875 13.875" stroke="#1F1C17" strokeLinecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </span>
                <input
                    value={keyword}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    type='text'
                    placeholder='Tekan enter untuk melakukan pencarian'
                    className='bg-low-grey text-gray-600 rounded px-4 w-full h-8 text-sm'
                />
            </div>
            {token ?
                <section className='flex space-x-4'>
                    <button onClick={() => logoutHandler()} className='font-sans px-4 py-1 border-[1px] border-gray-100  text-gray-400 border-blackrounded-xs'>
                        Keluar
                    </button>
                </section >
                :
                <section className='flex space-x-4'>
                    <button onClick={() => router.push('/auth')} className='font-sans font-semibold px-4 py-1 border-[1px] border-primary uppercase text-primary border-blackrounded-xs'>
                        Masuk
                    </button>
                    <button onClick={() => router.push('/register')} className='font-sans font-semibold px-4 py-1 bg-primary  uppercase text-white border-blackrounded-xs'>
                        Daftar
                    </button>
                </section >}
        </nav >
    )
}

export default Navbar

