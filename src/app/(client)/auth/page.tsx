'use client'

import Image from 'next/image'
import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useCustomMutation from '@/app/utils/hooks/useCustomMutation';
import { loginAccount } from '../../helpers/login';
import { useRouter } from 'next/navigation';

type Inputs = {
    email: string,
    password: string,
};

const schema = yup
    .object({
        email: yup.string().email("Not a valid email").required("Harap isi email"),
        password: yup.string().required('Masukan password'),
    })
    .required()

const AdminLoginPage = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors, isValid }, } = useForm<Inputs>({
        resolver: yupResolver(schema),
        mode: 'onTouched'
    })
    const { mutation } =
        useCustomMutation(loginAccount);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const resp = await mutation.mutateAsync(data);
            if (resp.status === 200) {
                router.push('/')
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    }

    return (
        <div className='w-full h-screen flex flex-col md:flex-row justify-center items-center bg-red-50'>
            <section className='w-11/12 md:w-1/5  bg-white'>
                <div className='text-left leading-6 font-sans p-5'>
                    <Image src={'/assets/branding/logo.svg'} alt='vascomm' width={100} height={100} />
                    <h1 className='text-2xl font-semibold mt-5'>
                        Login
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-y-2 py-5 text-gray-600'>
                        <label htmlFor='email'>Email / Nomor Telpon</label>
                        <input id='email' {...register("email")} type='email' placeholder='Contoh: admin@gmail.com' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                        <p className='text-red-400'>{errors.email?.message}</p>

                        <label htmlFor='password'>Password</label>
                        <input id='password'{...register("password")} type='password' placeholder='Masukkan passward' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                        <p className='text-red-400'>{errors.password?.message}</p>

                        <button type='submit' className='font-sans font-semibold mt-5 h-10 px-4 py-1 bg-primary  uppercase text-white border-blackrounded-xs'>
                            Masuk
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AdminLoginPage