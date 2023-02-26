
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import abatur  from '@/public/abatur.png'

export default function Header() {
  return (
    <>
      <div className="flex flex-col w-screen justify-center items-center text-center bg-amber-50 text-stone-800 drop-shadow-2xl">
        <div className='flex flex-row flex-wrap w-screen justify-center items-center text-center bg-stone-800 text-white font-bold'>
          <Link href="/alphabet">
            <p className='p-2'>Alphabet</p>
          </Link>
          <Link href="/ginza">
            <p className='p-2'>Ginza Rabba</p>
          </Link>
        </div>
        <div className='bg-epigraph bg-cover bg-center w-full'>
          <div className='w-full bg-amber-50 bg-opacity-80 '>
            <Link href="/" className='flex flex-row p-2 justify-center items-center'>
                <Image src={abatur} className="h-12 w-12 rounded-full opacity-90 m-2" />
                <h1 className='text-xl lg:text-3xl font-bold p-2 m-2'>Mandaean Texts</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
