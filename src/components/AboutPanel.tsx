import React from 'react'

const AboutPanel = () => {
  return (
    <div id="about" className='font-mplus px-8'>
        <h1 className='text-4xl font-extrabold mb-4'>About</h1>

        <div className='flex flex-row justify-between'>
          <p className='w-[35rem]'>
              WaffleHacks is a 48-hour student-organized hackathon working to bring technical solutions to your local communities and small businesses.
              <br /> <br />
              We welcome all students, of high school level and beyond, and of all technical proficiency levels, to join us on June 23th - 25th, 2023.
          </p>

          <img src="/assets/images/rick.gif" alt="" className='w-5/12' />
        </div>
    </div>
  )
}

export default AboutPanel