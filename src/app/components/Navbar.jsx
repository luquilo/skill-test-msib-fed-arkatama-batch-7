import React from 'react'
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='flex flex-col p-4 mb-6'>

        <div className='flex justify-between'>        {/* top nav */}
            <div className='flex text-[grey]'>
                <div className='flex flex-col p-2'>
                    <Image src="/red.svg" alt="Logo" width={22.5} height={11.25} />
                </div>
                <p className='pr-6'>Indonesia</p>

                <Image src="/phone.svg" alt="phone" width={15.3} height={11.25} />
                <p className='px-2'>(+62)851 6993 3122</p>

                <Image src="/mail.svg" alt="phone" width={15.3} height={11.25} />
                <p>hello@alkautsar.id</p>
            </div>
            <div className='flex'>

                <div className='flex gap-2 pr-4'>
                    <Image  src="/wa.svg" alt="whatsapp" width={30} height={30} />
                    <Image  src="/ig.svg" alt="instagram" width={30} height={30} />
                    <Image  src="/in.svg" alt="linkedin" width={30} height={30} />
                    <Image  src="/yt.svg" alt="youtube" width={30} height={30} />
                </div>

                <p>search</p>

            </div>
        </div>

        <div className='flex justify-between py-4'>        {/* bottom nav */}
            <Image  src="/logo-blue.png" alt="youtube" width={134} height={52} />
            <div className='flex items-center justify-center gap-6'>
                <p>About</p>
                <p>Produk</p>
                <p>Pendaftaran</p>
                <p>Donasi</p>
                <p>Blog</p>
                <p>Kontak</p>
                <p>Masuk</p>
                <button className='bg-[#002EC1] rounded-full p-3 text-white '>Daftar Sekarang</button>
            </div>
        </div>


    </div>
  )
}
