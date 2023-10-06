'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useCustomMutation from '@/app/utils/hooks/useCustomMutation';
import { useRouter } from 'next/navigation';
import { updateProduct } from '@/app/helpers/product_server';

type Inputs = {
    id?: string
    title: string,
    price: number,
    status: boolean
    image: string
};

const schema = yup
    .object({
        title: yup.string().min(3, 'Must be exactly 1 digits')
            .max(25, 'Must be exactly 25 digits').required("Harap isi nama produk"),
        price: yup.number().required("Harap isi harga product"),
        status: yup.boolean().required("Harap isi status"),
        image: yup.string().required("Harap upload image produk"),

    })
    .required()

interface IPropsEditProduk {
    data: Inputs
}
const ProductEditForm: React.FC<IPropsEditProduk> = ({ data: productValue }) => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors, isValid }, } = useForm<Inputs>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
        defaultValues: {
            title: productValue?.title,
            price: productValue?.price,
            status: productValue?.status,
            image: productValue?.image
        }
    })
    const { mutation } =
        useCustomMutation(updateProduct);

    const [file, setFile] = useState<File>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (!productValue?.id) return
        try {
            const resp = await mutation.mutateAsync({ id: productValue?.id, title: data?.title, price: data?.price, status: data.status, image: file });
            if (resp.status === 200) {
                router.push('/dashboard/product')
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    }

    return (
        <section className='w-full bg-white'>
            <div className='text-left leading-6 font-sans p-5'>
                {JSON.stringify(productValue)}
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-y-2 py-5 text-gray-600'>
                    <label htmlFor='title'>Nama Produk</label>
                    <input id='title' defaultValue={productValue?.title} {...register("title")} type='text' placeholder='Isi nama' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                    <p className='text-red-400'>{errors.title?.message}</p>

                    <label htmlFor='price'>Harga</label>
                    <input id='price' defaultValue={productValue?.price} {...register("price")} type='number' placeholder='0' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                    <p className='text-red-400'>{errors.price?.message}</p>


                    <label htmlFor='status'>Status</label>
                    <input id='status' {...register("status")} type='checkbox' defaultChecked={productValue?.status} className='border border-gray-500 rounded-sm h-5 w-5 p-2' />
                    <p className='text-red-400'>{errors.status?.message}</p>

                    <label htmlFor='image'>Foto Produk</label>
                    <input
                        {...register("image")}
                        id='image'
                        type='file'
                        defaultValue={productValue?.image}
                        onChange={(e) => setFile(e.target.files?.[0])}
                        className='text-center border border-gray-500 rounded-sm h-12 w-full p-2'
                    />
                    <p className='text-red-400'>{errors.image?.message}</p>

                    <button type='submit' className='font-sans font-semibold mt-5 h-10 px-4 py-1 bg-primary  uppercase text-white border-blackrounded-xs'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ProductEditForm