import React from 'react'

const Dashboard = () => {

    const Insights = [
        {
            id: 0,
            title: 'Jumlah User',
            value: 150
        },
        {
            id: 1,
            title: 'Jumlah User Aktif',
            value: 150
        },
        {
            id: 2,
            title: 'Jumlah Produk',
            value: 150
        },
        {
            id: 3,
            title: 'Jumlah Produk Aktif',
            value: 150
        },
    ]
    return (
        <div className='w-full grid grid-cols-1 gap-y-5'>
            <h1 className='text-lg font-light'>
                Dashboard
            </h1>
            <div className='grid grid-cols-4 gap-5 h-full'>
                {Insights.map((insight) =>
                    <article key={insight.id} className='gradient-1 h-28 px-5 flex flex-col justify-center items-start rounded-xl'>
                        <p className='text-sm font-light'>{insight.title}</p>
                        <p><span className='text-2xl mr-1'>{insight.value}</span>User</p>
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
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                    Apple MacBook Pro 17
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>

                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dashboard