
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Hero() {
  return (
    <>
      <div className="flex flex-col w-screen justify-center items-center text-center bg-violet-900 text-white drop-shadow-2xl">
        
        <Link href="/">
            <h1 className='text-xl lg:text-3xl p-2 m-2 font-bold'>Mandaean Texts</h1>
        </Link>
      </div>
    </>
  )
}
