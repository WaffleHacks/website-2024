"use client"
import { Switch } from '@mui/material'
import CustomSlider from '@/src/components/CustomSlider'
import type { NextPage } from 'next'
import Image from 'next/image'
import LandingPanel from '../components/LandingPanel'
const label = { inputProps: { "aria-label": "Switch demo" } };
const Home: NextPage = (): JSX.Element => {
  return (
    <main className="flex w-screen">
      <LandingPanel />

      {/* <img src='/assets/images/olympics_placeholder.png' alt="" style={{objectFit: 'contain'}} /> */}
      
    {/* //   <Header />
    //   {NavLinks.map((link, index) => {
    //     return (
    //       <section
    //         key={index}
    //         id={link[index]}
    //         className={`
    //           flex items-center justify-center ${(index % 2 === 0) ? `bg-gray-100` : `bg-gray-500`} w-full h-[80dvh]
    //         `}
    //       >
    //         <h2
    //           className={``}
    //         >
    //           {link} section
    //         </h2>
    //       </section>
    //     )
    //   })} */}
    </main>
    
    
  )
}
export default Home