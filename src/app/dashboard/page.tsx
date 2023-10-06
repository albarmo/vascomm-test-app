'use client'

import React from 'react'
import useCustomQuery from '../utils/hooks/useCustomQuery';
import { fetchProductList } from '../helpers/product_server';
import { currencyFormat } from '../utils/initial';

const Dashboard = () => {

    const Insights = [
        {
            id: 0,
            title: 'Jumlah User',
            value: 8,
            prefix: 'user'
        },
        {
            id: 1,
            title: 'Jumlah User Aktif',
            value: 6,
            prefix: 'user'
        },
        {
            id: 2,
            title: 'Jumlah Produk',
            value: 10,
            prefix: 'item'
        },
        {
            id: 3,
            title: 'Jumlah Produk Aktif',
            value: 9,
            prefix: 'item'
        },
    ]

    const { data: products, refetch } = useCustomQuery(
        'fetchProductList',
        { limit: 10, offset: 0 },
        fetchProductList
    );

    return (
        <div className='w-full grid grid-cols-1 gap-y-5'>
            <h1 className='text-lg font-light'>
                Dashboard
            </h1>
            <div className='grid grid-cols-4 gap-5 h-full'>
                {Insights.map((insight) =>
                    <article key={insight.id} className='gradient-1 h-28 px-5 flex flex-col justify-center items-start rounded-xl'>
                        <p className='text-sm font-light'>{insight.title}</p>
                        <p><span className='text-2xl mr-1'>{insight.value}</span>{insight.prefix}</p>
                    </article>
                )}
            </div>
            <div className='bg-white mt-5 p-5 w-4/5 rounded-md'>
                <h2>Produk Terbaru</h2>
                <div className="mt-3 relative overflow-x-auto rounded">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-white">
                            <tr className='bg-primary rounded-xl'>
                                <th scope="col" className="px-6 py-3 font-normal">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal">
                                    Tanggal Dibuat
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal">
                                    Harga(Rp)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.data?.map((product: any, index: number) =>
                                <tr key={product?.id} className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                        {product?.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {product?.createdAt}
                                    </td>

                                    <td className="px-6 py-4">
                                        {currencyFormat(product?.price)}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dashboard