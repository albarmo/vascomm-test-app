'use client'

import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useCustomMutation from '@/app/utils/hooks/useCustomMutation';
import { useRouter } from 'next/navigation';
import { registerAccount } from '@/app/helpers/user_server';

type Inputs = {
    name: string,
    email: string,
    phone: string
};

const schema = yup
    .object({
        name: yup.string().min(3, 'Must be exactly 1 digits')
            .max(25, 'Must be exactly 25 digits').required("Harap isi nama"),
        email: yup.string().email("Not a valid email").required("Harap isi email"),
        phone: yup.string().min(8, 'Must be exactly 8 digits')
            .max(12, 'Must be exactly 12 digits').required("Harap isi nomor telepon"),

    })
    .required()

const UserRegisterForm = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors, isValid }, } = useForm<Inputs>({
        resolver: yupResolver(schema),
        mode: 'onTouched'
    })
    const { mutation } =
        useCustomMutation(registerAccount);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const resp = await mutation.mutateAsync({ ...data, role: 'customer', password: '123456' });
            if (resp.status === 200) {
                router.push('/dashboard/user')
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    }

    return (
        <section className='w-full bg-white'>
            <div className='text-left leading-6 font-sans p-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-y-2 py-5 text-gray-600'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' {...register("name")} type='text' placeholder='Isi nama' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                    <p className='text-red-400'>{errors.name?.message}</p>

                    <label htmlFor='email'>Email</label>
                    <input id='email' {...register("email")} type='email' placeholder='Contoh: admin@gmail.com' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                    <p className='text-red-400'>{errors.email?.message}</p>

                    <label htmlFor='phone'>Nomor Telepon</label>
                    <input id='phone'{...register("phone")} type='phone' placeholder='Masukkan nomor telepon' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                    <p className='text-red-400'>{errors.phone?.message}</p>

                    <button type='submit' className='font-sans font-semibold mt-5 h-10 px-4 py-1 bg-primary  uppercase text-white border-blackrounded-xs'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default UserRegisterForm