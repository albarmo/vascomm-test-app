'use client'
import { deleteProduct } from '@/app/helpers/product_server'
import { deleteUser } from '@/app/helpers/user_server'
import useCustomMutation from '@/app/utils/hooks/useCustomMutation'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

interface IModalProps {
    title: string
    description?: string
    isOpen: boolean
    close: () => void
    data: any
}
const ModalConfirmationProduct: React.FC<IModalProps> = ({ title, isOpen, close, data: productValue }) => {
    const router = useRouter()
    useEffect(() => {
        document.body.style.overflow = 'unset';
        document.body.style.overflow = 'hidden';
    }, [])

    const { mutation } =
        useCustomMutation(deleteProduct);

    const handleConfrim = async () => {
        if (!productValue?.id) return
        try {
            const resp = await mutation.mutateAsync(productValue?.id);
            if (resp.status === 200) {
                router.push('/dashboard/product')
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    }

    return (
        <div className={`${!isOpen && 'hidden'} fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-60 z-50 flex items-center overflow-hidden`}>
            <main id="content" role="main" className="w-full max-w-md mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className='w-full flex flex-col items-center justify-center'>
                        <svg width="auto" height="86" viewBox="0 0 496 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="247.5" cy="-33" rx="578.5" ry="119" fill="#41A0E4" />
                        </svg>
                        <center className='-mt-5'>
                            <div className='bg-red-500 w-12 h-12 flex justify-center items-center rounded-full'>
                                <svg width="24" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5417 27.0834H28.8751C35.8017 27.0834 41.4167 21.4683 41.4167 14.5417C41.4167 7.61514 35.8017 2.00005 28.8751 2.00005H14.5417C7.61518 2.00005 2.00008 7.61514 2.00008 14.5417C2.00008 21.4683 7.61518 27.0834 14.5417 27.0834Z" stroke="white" stroke-width="4" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M28.8777 9.16736C25.9092 9.16736 23.5027 11.5738 23.5027 14.5424C23.5027 17.5109 25.9092 19.9174 28.8777 19.9174C31.8462 19.9174 34.2527 17.5109 34.2527 14.5424C34.2527 11.5738 31.8462 9.16736 28.8777 9.16736Z" stroke="white" stroke-width="4" strokeLinecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </center>
                    </div>
                    <div className='divide-y'>
                        <div className="p-8">
                            <div className="text-center -mt-5 my-5">
                                <h1 className="block text-lg font-bold text-gray-800">{title}</h1>
                                <p>Apakah kamu yakin menghapus “{productValue?.title}”?</p>
                            </div>
                        </div>
                        <div className="p-3 px-8 flex justify-end space-x-3">
                            <button onClick={() => close()} className='rounded px-4 text-sm py-1 border-[1px] border-gray-200 text-gray-400'>
                                Batal
                            </button>
                            <button onClick={() => handleConfrim()} className='rounded px-4 text-sm py-1 bg-primary   text-white'>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ModalConfirmationProduct