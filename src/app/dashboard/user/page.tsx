'use client'

import Modal from '@/app/components/common/Modal'
import ModalConfirmation from '@/app/components/common/ModalConfirmation'
import useModalDisclosure from '@/app/utils/hooks/useModalDisclosure'
import React from 'react'
import UserRegisterForm from './UserForm'
import useCustomQuery from '@/app/utils/hooks/useCustomQuery'
import { fetchUserList } from '@/app/helpers/user_server'
import UserEditForm from './UserFormEdit'

const UserManagementPage = () => {
    const { isOpen, open, close } = useModalDisclosure()
    const { isOpen: isOpenConfrimation, open: openConfrimation, close: closeConfrimation, data: confrimData } = useModalDisclosure()
    const { isOpen: isOpenedit, open: openEdit, close: closeEdit, data: editData } = useModalDisclosure()
    const { isOpen: isOpenView, open: openView, close: closeView, data: detailData } = useModalDisclosure()

    const { data: users } = useCustomQuery(
        'latestProduct',
        { limit: 10, offset: 0 },
        fetchUserList
    );


    return (
        <React.Fragment>
            <ModalConfirmation title='Konfirmasi Hapus' description='Apakah kamu yakin menghapus “{nama user}”?' isOpen={isOpenConfrimation} close={closeConfrimation} data={confrimData} />
            <Modal title='Tambah User' isOpen={isOpen} close={close} >
                <UserRegisterForm />
            </Modal>
            <Modal title='Edit User' isOpen={isOpenedit} close={closeEdit} >
                <UserEditForm data={editData} />
            </Modal>
            <Modal title='Detail User' isOpen={isOpenView} close={closeView} >
                {/* <UserRegisterForm data={detailData} /> */}
            </Modal>
            <div className='w-full grid grid-cols-1 gap-y-5'>
                <section className='w-full flex justify-between '>
                    <h1 className='text-lg font-light'>
                        Manajemen User
                    </h1>
                    <button onClick={() => open(null)} className='font-sans px-4 py-1 bg-primary  uppercase text-white border-blackrounded-xs'>
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
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.data?.map((user: any, index: number) =>
                                    <tr key={user.id} className="border-b odd:bg-gray-100">
                                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4">
                                            {user?.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user?.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user?.phone}
                                        </td>
                                        <td className="px-6 py-4 flex justify-around">
                                            <button onClick={() => openView(user)} className='bg-green-700 rounded-full p-2 hover:opacity-80'>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 3.06201C2.625 3.06201 0.875 6.99994 0.875 6.99994C0.875 6.99994 2.625 10.937 7 10.937C11.375 10.937 13.125 6.99994 13.125 6.99994C13.125 6.99994 11.375 3.06201 7 3.06201Z" stroke="white" strokeLinecap="round" stroke-linejoin="round" />
                                                    <path d="M7 9.18758C8.20812 9.18758 9.1875 8.2082 9.1875 7.00008C9.1875 5.79195 8.20812 4.81258 7 4.81258C5.79188 4.81258 4.8125 5.79195 4.8125 7.00008C4.8125 8.2082 5.79188 9.18758 7 9.18758Z" stroke="white" strokeLinecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>

                                            <button onClick={() => openEdit(user)} className='bg-orange-500 rounded-full p-2 hover:opacity-80'>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 8.75H5.25V7L10.5 1.75L12.25 3.5L7 8.75Z" stroke="white" strokeLinecap="round" stroke-linejoin="round" />
                                                    <path d="M9.1875 3.0625L10.9375 4.8125" stroke="white" strokeLinecap="round" stroke-linejoin="round" />
                                                    <path d="M11.8125 6.5625V11.375C11.8125 11.491 11.7664 11.6023 11.6844 11.6844C11.6023 11.7664 11.491 11.8125 11.375 11.8125H2.625C2.50897 11.8125 2.39769 11.7664 2.31564 11.6844C2.23359 11.6023 2.1875 11.491 2.1875 11.375V2.625C2.1875 2.50897 2.23359 2.39769 2.31564 2.31564C2.39769 2.23359 2.50897 2.1875 2.625 2.1875H7.4375" stroke="white" strokeLinecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>

                                            <button className='bg-red-500 rounded-full p-2 hover:opacity-80'>
                                                <svg onClick={() => openConfrimation(user)} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Interface / Trash_Empty">
                                                        <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
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