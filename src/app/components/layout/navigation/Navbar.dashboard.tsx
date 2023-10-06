'use client'

import Image from 'next/image'
import React from 'react'
import ProfileCard from '../ProfileCard'
import { usePathname, useRouter } from 'next/navigation'

const NavbarDashboard = () => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <nav style={{ display: pathname === '/dashboard/auth' ? 'none' : '' }} className='fixed top-0 z-50 w-full h-16 bg-white border-b border-[#E4E4E4] px-10 flex justify-between items-center'>
            <Image className='cursor-pointer' onClick={() => router.push('/dashboard')} src={'/assets/branding/logo.svg'} alt='vascomm' width={168} height={100} />
            <ProfileCard />
        </nav>
    )
}

export default NavbarDashboard