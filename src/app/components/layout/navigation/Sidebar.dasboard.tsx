'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const SidebarMenu = [
    { id: 0, label: "Dashboard", iconPath: '/assets/icons/House.svg', routePath: '/dashboard', },
    { id: 0, label: "Manajemen User", iconPath: '/assets/icons/User.svg', routePath: '/dashboard/user' },
    { id: 0, label: "Manajemen Produk", iconPath: '/assets/icons/Notebook.svg', routePath: '/dashboard/product' },
]

const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <aside style={{ display: pathname === '/dashboard/auth' ? 'none' : '' }} className='relative shadow-sm left-0 w-72 h-screen bg-white'>
            <ul className='py-5 font-sans'>
                {SidebarMenu.map((menu) =>
                    <li key={menu.id}
                        className={`px-5 ${menu.routePath === pathname ? 'bg-primary text-white' : 'text-gray-600'} cursor-pointer my-3 flex items-center justify-start p-3 space-x-3 active:bg-primary`}
                        onClick={() => router.push(menu.routePath)}
                    >
                        <Image src={menu.iconPath} alt={menu.label} width={18} height={18} className='text-gray-600' />
                        <p>{menu.label}</p>
                    </li>
                )}
            </ul>
        </aside>
    )
}

export default Sidebar