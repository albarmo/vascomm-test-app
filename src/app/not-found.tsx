'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    const router = useRouter()
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center space-y-4'>
            <Image className='cursor-pointer' src={'/assets/branding/logo.svg'} alt='vascomm' width={168} height={100} />
            <h1 className='text-2lx'> Halam Tidak dapat ditemukan</h1>
            <button className='text-primary' onClick={() => router.push('/')}>Kembai Ke Beranda</button>
        </div>
    )
}

export default NotFound