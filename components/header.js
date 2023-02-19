
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
  return (
    <>
      <div className="flex flex-col w-screen justify-center items-center text-center bg-violet-900 text-white drop-shadow-2xl">
        <div className='flex flex-row flex-wrap w-screen justify-center items-center text-center bg-violet-800 text-white font-bold'>
          <Link href="/alphabet">
            <p className='p-2'>Alphabet</p>
          </Link>
          <Link href="/ginza">
            <p className='p-2'>Ginza Rabba</p>
          </Link>
        </div>
        <Link href="/">
            <h1 className='text-xl lg:text-3xl p-2 m-2 font-bold'>Mandaean Texts</h1>
        </Link>
      </div>
    </>
  )
}
