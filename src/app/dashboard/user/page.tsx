'use client'

import Modal from '@/app/components/common/Modal'
import ModalConfirmation from '@/app/components/common/ModalConfirmation'
import useModalDisclosure from '@/app/utils/hooks/useModalDisclosure'
import React from 'react'

const UserManagementPage = () => {
    const { isOpen, open, close } = useModalDisclosure()
    const { isOpen: isOpenConfrimation, open: openConfrimation, close: closeConfrimation } = useModalDisclosure()
    return (
        <React.Fragment>
            <ModalConfirmation title='Konfirmasi Hapus' description='Apakah kamu yakin menghapus “{nama user}”?' isOpen={isOpenConfrimation} close={closeConfrimation} />
            <Modal title='Tambah User' isOpen={isOpen} close={close} >
                <form>
                    <div className="grid gap-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 ">Email address</label>
                            <div className="relative">
                                <input type="email" id="email" name="email" className="py-2 px-4 block w-full border-2 border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                            </div>
                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                        </div>
                        <button type="submit" className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm uppercase">Simpan</button>
                    </div>
                </form>
            </Modal>
            <div className='w-full grid grid-cols-1 gap-y-5'>
                <section className='w-full flex justify-between '>
                    <h1 className='text-lg font-light'>
                        Manajemen User
                    </h1>
                    <button onClick={() => open()} className='font-sans px-4 py-1 bg-primary  uppercase text-white border-blackrounded-xs'>
                        Tambah User
                    </button>
                </section>
                <div className='bg-white mt-3 w-full rounded-md'>
                    <div className="relative overflow-x-auto rounded">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-grey">
                                <tr className='bg-white rounded-xl'>
                                    <th scope="col" className="px-6 py-3 font-normal">
                                        No
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-normal">
                                        Nama Lengkap
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-normal">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-normal">
                                        No. Telepon

                                    </th>
                                    <th scope="col" className="px-6 py-3 font-normal">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-normal">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4].map((item, index) =>
                                    <tr key={index} className="border-b odd:bg-gray-100">
                                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                            Apple MacBook Pro 17
                                        </th>
                                        <td className="px-6 py-4">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-4 py-0.5 rounded-full">Tidak Aktif</span>
                                        </td>
                                        <td className="px-6 py-4 flex justify-around">
                                            <button className='bg-green-700 rounded-full p-2 hover:opacity-80'>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 3.06201C2.625 3.06201 0.875 6.99994 0.875 6.99994C0.875 6.99994 2.625 10.937 7 10.937C11.375 10.937 13.125 6.99994 13.125 6.99994C13.125 6.99994 11.375 3.06201 7 3.06201Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M7 9.18758C8.20812 9.18758 9.1875 8.2082 9.1875 7.00008C9.1875 5.79195 8.20812 4.81258 7 4.81258C5.79188 4.81258 4.8125 5.79195 4.8125 7.00008C4.8125 8.2082 5.79188 9.18758 7 9.18758Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <button className='bg-orange-500 rounded-full p-2 hover:opacity-80'>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 8.75H5.25V7L10.5 1.75L12.25 3.5L7 8.75Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.1875 3.0625L10.9375 4.8125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M11.8125 6.5625V11.375C11.8125 11.491 11.7664 11.6023 11.6844 11.6844C11.6023 11.7664 11.491 11.8125 11.375 11.8125H2.625C2.50897 11.8125 2.39769 11.7664 2.31564 11.6844C2.23359 11.6023 2.1875 11.491 2.1875 11.375V2.625C2.1875 2.50897 2.23359 2.39769 2.31564 2.31564C2.39769 2.23359 2.50897 2.1875 2.625 2.1875H7.4375" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <button className='bg-red-500 rounded-full p-2 hover:opacity-80'>
                                                <svg onClick={() => openConfrimation()} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Interface / Trash_Empty">
                                                        <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default UserManagementPage