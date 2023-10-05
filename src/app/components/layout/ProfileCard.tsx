'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { logoutAccount } from '@/app/helpers/logout';
import useCustomMutation from '@/app/utils/hooks/useCustomMutation';
import { useRouter } from 'next/navigation';

const ProfileCard = () => {
    const router = useRouter()
    const { mutation: logout } =
        useCustomMutation(logoutAccount);

    const logoutHandler = async () => {
        try {
            const resp = await logout.mutateAsync({});
            if (resp?.status === 200) {
                router.push('/dashboard/auth')
            }
        } catch (error) {
            console.error('An error occurred while logout account:', error);
        }
        router.refresh()
    }

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (
            !target.closest('.notification-dropdown')
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className='group hover:bg-gray-100 p-1 px-4 rounded cursor-pointer flex items-center justify-end space-x-4'>
                <span>
                    <p className='text-xs text-primary'>Hallo Admin,</p>
                    <p className=''>
                        Aden S. Putra
                    </p>
                </span>
                <Image src={'/assets/branding/logo.svg'} alt='vascomm' width={60} height={60} className='rounded-full h-12 w-12 bg-gray-400' />
            </div>
            <div id='profile-pop' className={`profile-pop ${isOpen ? 'absolute' : 'hidden'}  right-10 top-14 z-50`}>
                <div className="w-60 flex flex-col items-center justify-center my-4 py-6 space-y-5 text-base list-none bg-white shadow rounded-lg" id="language-dropdown-menu">
                    <Image src={'/assets/branding/logo.svg'} alt='vascomm' width={60} height={60} className='rounded-full h-16 w-16 bg-gray-400' />
                    <div className='w-full flex flex-col justify-center items-center'>
                        <span className='w-full text-center'>
                            <p className='text-lg text-grey'> Aden S. Putra</p>
                            <p className='text-sm text-gray-400'>
                                Aden@gmail.com
                            </p>
                        </span>
                        <hr className='w-full my-4' />
                        <button onClick={() => logoutHandler()} className='flex text-red-500 py-3'>
                            <svg className='mr-1' width="28" height="28s" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9993 4.50037V11.6254" stroke="#D83A56" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M16.5002 5.08425C17.9907 6.05435 19.1279 7.48014 19.7422 9.14913C20.3565 10.8181 20.415 12.6409 19.9091 14.3459C19.4031 16.0508 18.3598 17.5466 16.9345 18.6104C15.5093 19.6741 13.7784 20.2488 12 20.2488C10.2215 20.2488 8.4907 19.6741 7.06545 18.6104C5.64021 17.5466 4.59685 16.0508 4.0909 14.3458C3.58495 12.6409 3.64349 10.8181 4.2578 9.14909C4.8721 7.48011 6.00929 6.05432 7.49985 5.08423" stroke="#D83A56" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                            Keluar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard