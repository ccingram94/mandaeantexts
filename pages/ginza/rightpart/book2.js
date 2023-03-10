
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/header'
import { useState } from 'react'
import lidzbarskiginza from '@/lidzbarskiginza'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export default function GinzaRightBook2() {
    const [ language, setLanguage ] = useState(0);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col text-center items-center bg-gradient-to-br min-h-screen from-violet-300 to-indigo-300 via-blue-100">
        <div className='p-2 pt-12 m-2 font-bold text-violet-900 text-xl lg:text-3xl'>
            <h3>Ginza Rabba</h3>
            <p>ࡂࡉࡍࡆࡀ ࡓࡁࡀ</p>
            <div className='flex flex-col p-2 text-sm'>
                <button onClick={() => setLanguage(0)}>
                <p className='p-2 bg-white bg-opacity-10 hover:bg-opacity-70 rounded-xl transition-all'>🇺🇸 English (Translation)</p>
                </button>
                <button onClick={() => setLanguage(1)}>
                <p className='p-2 bg-white bg-opacity-10 hover:bg-opacity-70 rounded-xl transition-all'>🇩🇪 Deutsch (Lidzbarski)</p>
                </button>
            </div>
        </div>
        <div className='p-2 m-2 bg-violet-100 text-black rounded-xl'>
          <div className='flex flex-row flex-wrap justify-center items-center text-center'>
            <ArrowLeftCircleIcon className='h-6 w-6 m-2' />
            <p className='p-2 m-2 border-b-2 border-violet-200'>{lidzbarskiginza[language].sections[1].text[1].title}</p>
            <div className='flex flex-row justify-center items-center text-center'>
              <ArrowRightCircleIcon className='h-6 w-6 m-2' />
            </div>
          </div>
            <h3 className='text-xl lg:text-2xl font-bold uppercase p-4 m-4'>{lidzbarskiginza[language].sections[1].text[1].title}</h3>
            <h3 className='text-lg lg:text-xl font-bold uppercase p-4 m-4'>{lidzbarskiginza[language].sections[1].text[1].introduction}</h3>
            { lidzbarskiginza[language].sections[1].text[1].verses.map((paragraph) => 
              <div className='flex flex-row items-center'>
                <p className='rounded-full bg-violet-300 p-2 m-2'>{lidzbarskiginza[language].sections[1].text[1].verses.indexOf(paragraph) + 1}</p>
                <p className='text-sm text-justify max-w-4xl p-2 m-2'>{paragraph}</p>
              </div>
            )}
        </div>
      </main>
    </>
  )
}
