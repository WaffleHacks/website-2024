"use client"
import { Switch } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import LandingPanel from '../components/LandingPanel'
import AboutPanel from '../components/AboutPanel'
import Calendar from '../components/Calendar'
import FaqPanel from '../components/FaqPanel'
import Sponsors from '../components/Sponsors'
import React from 'react'
import Footer from '../components/Footer'
const label = { inputProps: { "aria-label": "Switch demo" } };
const Home: NextPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-screen">
      <LandingPanel />
      <AboutPanel />
      <Calendar />
      <FaqPanel />
      
      <Sponsors />
      <Footer />
    </main>
    
    
  )
}
export default Home