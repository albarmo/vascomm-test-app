'use client'

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
                router.push('/dashboard')
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    }
    return (
        <div className='w-full h-screen flex flex-col md:flex-row justify-start md:justify-between bg-red-50'>
            <section className='w-full h-3/5 md:h-full md:w-2/4 flex justify-center items-center' style={{ backgroundImage: 'url(/assets/buble-bg.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='text-center w-4/5 leading-6 font-sans'>
                    <h1 className='text-4xl font-semibold uppercase'>
                        Nama Aplikasi
                    </h1>
                    <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </section>
            <section className='w-full h-full md:w-3/5 bg-white flex justify-center items-center'>
                <div className='text-left w-3/5 leading-6 font-sans'>
                    <h1 className='text-2xl font-semibold uppercase'>
                        Selamat Datang Admin
                    </h1>
                    <p className='mt-2'>Silahkan masukkan email atau nomor telepon dan password
                        Anda untuk mulai menggunakan aplikasi
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-y-2 py-5 text-gray-600'>
                        <label htmlFor='email'>Email / Nomor Telpon</label>
                        <input id='email'  {...register("email")} type='email' placeholder='Contoh: admin@gmail.com' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                        <p className='text-red-400'>{errors.email?.message}</p>

                        <label htmlFor='password'>Password</label>
                        <input id='password' {...register("password")} type='password' placeholder='Masukkan passward' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                        <p className='text-red-400'>{errors.password?.message}</p>

                        <button className='font-sans font-semibold mt-5 h-10 px-4 py-1 bg-primary  uppercase text-white border-blackrounded-xs'>
                            Masuk
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AdminLoginPage