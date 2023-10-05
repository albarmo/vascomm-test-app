import React from 'react'

const AdminLoginPage = () => {
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
                    <form className='grid grid-cols-1 gap-y-2 py-5 text-gray-600'>
                        <label htmlFor='email'>Email / Nomor Telpon</label>
                        <input id='email' type='email' placeholder='Contoh: admin@gmail.com' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password' placeholder='Masukkan passward' className='border border-gray-500 rounded-sm h-10 w-full p-2' />
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