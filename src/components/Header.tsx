import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row gap-8 justify-center items-center py-6 shadow-lg font-semibold'>
        <a href="#about">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#calendar">Calendar</a>
        <img src="/assets/images/header.svg" alt="" />
        <a href="#sponsors">Sponsors</a>
        <a href="#faqs">FAQs</a>
        <a href="#apply">Apply Now</a>
    </div>
  )
}

export default Header