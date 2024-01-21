"use client"
import { Switch } from '@mui/material'
import CustomSlider from '@/src/components/CustomSlider'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Header, NavLinks } from '../components/semantics'
const label = { inputProps: { "aria-label": "Switch demo" } };
const Home: NextPage = (): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      {/* <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <CustomSlider warning={true} />
      <CustomSlider warning={false} /> */}
      <Header />
      {NavLinks.map((link, index) => {
        return (
          <section
            key={index}
            id={link[index]}
            className={`
              flex items-center justify-center ${(index % 2 === 0) ? `bg-gray-100` : `bg-gray-500`} w-full h-[80dvh]
            `}
          >
            <h2
              className={``}
            >
              {link} section
            </h2>
          </section>
        )
      })}
    </main>
  )
}
export default Home