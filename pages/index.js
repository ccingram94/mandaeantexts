import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/header'
import ginza from '@/public/ginza.png'
import epigraph from '@/public/epigraph.png'
import Hero from '@/components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mandaean Texts</title>
        <meta name="description" content="Mandaean texts free online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-row flex-wrap justify-center items-center text-center min-h-screen bg-gradient-to-br h-full from-amber-50 to-amber-50 via-stone-50">
        
        <Link href="/ginza">
          
          <div className='flex flex-col flex-wrap max-w-xs p-2 rounded-xl drop-shadow-2xl'>
            <Image src={ginza} className="m-2 shadow-xl hover:shadow-2xl rounded-xl transition-all" />
            <h3 className='font-bold p-2'>Ginza Rabba</h3>
            <p className='font-bold p-2 '>ࡂࡉࡍࡆࡀ ࡓࡁࡀ</p>
            <p className='font-bold p-2 '>The famous holy book of the Mandaeans, translated from the Lidzbarski German version to English</p>
          </div>
        </Link>
        <Link href="/alphabet">
          <div className='flex flex-col flex-wrap max-w-xs p-2 m-2 rounded-xl drop-shadow-2xl'>
            <Image src={epigraph} className="m-2 shadow-xl hover:shadow-2xl rounded-xl transition-all" />
            <h3 className='font-bold p-2'>Alphabet (Abagada)</h3>
            <p className='font-bold p-2 '>ࡀࡁࡀࡂࡀࡃࡀ</p>
            <p className='text-md m-2 max-w-lg'>
              the Mandaic alphabet, the "Abagada" (ࡀࡁࡀࡂࡀࡃࡀ) and how to read Mandaic
            </p>
          </div>
        </Link>
      </main>
    </>
  )
}
