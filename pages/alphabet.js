import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Alphabet() {
  return (
    <>
      <Head>
        <title>Mandaic Alphabet</title>
        <meta name="description" content="Mandaic alphabet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col p-2 items-center text-center text-violet-900 bg-gradient-to-br min-h-screen from-violet-300 to-indigo-300 via-blue-100">
        <div>
          <h1 className='text-2xl lg:text-4xl font-bold p-2 pt-6'>The Abagada</h1>
          <h1 className='text-2xl lg:text-4xl font-bold p-2'>ࡀࡁࡀࡂࡀࡃࡀ</h1>
          <h1 className='text-xl lg:text-2xl font-bold opacity-60 p-2'>The Mandaic Alphabet</h1>
        </div>
        <table className='table-auto w-full max-w-xl text-center p-2 m-4'>
          <thead>
            <tr className='border-b-2 border-violet-900 bg-indigo-200 text-lg lg:text-xl'>
              <th className='p-2 m-2 '>Letter</th>
              <th className='p-2 m-2 '>Name</th>
              <th className='p-2 m-2 '>Sound</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2 text-xl lg:text-2xl'>ࡀ</td>
              <td className='p-2 m-2'>a</td>
              <td className='p-2 m-2'><i>a</i> as in father</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡁ</td>
              <td className='p-2 m-2'>ba</td>
              <td className='p-2 m-2'><i>b</i> as in boy</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡂ</td>
              <td className='p-2 m-2'>ga</td>
              <td className='p-2 m-2'><i>g</i> as in girl</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡃ‎</td>
              <td className='p-2 m-2'>da</td>
              <td className='p-2 m-2'><i>d</i> as in dog</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡄ</td>
              <td className='p-2 m-2'>ha</td>
              <td className='p-2 m-2'><i>h</i> as in hello</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡅ</td>
              <td className='p-2 m-2'>wa</td>
              <td className='p-2 m-2'><i>w</i> as in way</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡆ</td>
              <td className='p-2 m-2'>za</td>
              <td className='p-2 m-2'><i>z</i> as in zebra</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡇ</td>
              <td className='p-2 m-2'>eh</td>
              <td className='p-2 m-2'><i>ch</i> as in loch</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡈ</td>
              <td className='p-2 m-2'>ta</td>
              <td className='p-2 m-2'><i>t</i> as in toy</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡉ</td>
              <td className='p-2 m-2'>ya</td>
              <td className='p-2 m-2'><i>y</i> as in you</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡊ</td>
              <td className='p-2 m-2'>ka</td>
              <td className='p-2 m-2'><i>k</i> as in kiss</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡋ</td>
              <td className='p-2 m-2'>la</td>
              <td className='p-2 m-2'><i>l</i> as in let</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡌ</td>
              <td className='p-2 m-2'>ma</td>
              <td className='p-2 m-2'><i>m</i> as in mat</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡍ‎</td>
              <td className='p-2 m-2'>na</td>
              <td className='p-2 m-2'><i>n</i> as in no</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡎ‎</td>
              <td className='p-2 m-2'>sa</td>
              <td className='p-2 m-2'><i>s</i> as in sink</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡏ‎</td>
              <td className='p-2 m-2'>e</td>
              <td className='p-2 m-2'><i>ay</i> as in may</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡐ‎</td>
              <td className='p-2 m-2'>pa</td>
              <td className='p-2 m-2'><i>p</i> as in pack</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡑ‎</td>
              <td className='p-2 m-2'>ṣa</td>
              <td className='p-2 m-2'><i>s</i> as in sand</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡒ‎</td>
              <td className='p-2 m-2'>qa</td>
              <td className='p-2 m-2'><i>c</i> as in cut</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡓ‎</td>
              <td className='p-2 m-2'>ra</td>
              <td className='p-2 m-2'><i>r</i> as in red</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡔ‎</td>
              <td className='p-2 m-2'>ša</td>
              <td className='p-2 m-2'><i>sh</i> as in show</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡕ‎</td>
              <td className='p-2 m-2'>ta</td>
              <td className='p-2 m-2'><i>t</i> as in toy</td>
            </tr>
            <tr className='border-b-2 border-violet-900 border-opacity-10'>
              <td className='p-2 m-2'>ࡖ‎</td>
              <td className='p-2 m-2'>ḏ</td>
              <td className='p-2 m-2'><i>de</i> as in de force</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}
