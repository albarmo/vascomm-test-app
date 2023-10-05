import { currencyFormat } from '@/app/utils/initial'
import Image from 'next/image'
import React from 'react'


const ProductCard = ({ data }: { data: Product }) => {
    return (
        <div className='bg-white h-60 flex flex-col items-center justify-around hover:shadow-md hover:border-[1px] border-gray-100 cursor-pointer'>
            <Image src={`http://localhost:8080/${data?.image}`} priority alt='banner' width={70} height={70} className='w-20 object-contain' />
            <section>
                <h1 className='font-semibold'>{data?.title}</h1>
                <p className='text-primary'>{currencyFormat(data?.price)}</p>
            </section>
        </div>
    )
}

export default ProductCard