import React from 'react'

const Sponsors = () => {
  return (
    <div id="sponsors" className='font-mplus p-8'>
        <h1 className='text-4xl font-extrabold mb-4'>Sponsors</h1>
        <div className='flex flex-col items-center'>

            {/* PLATINUM */}
            <div className='flex flex-col items-center'>
                <div className='text-2xl font-bold flex items-center mb-4 grid grid-cols-2 w-[10rem]'>
                    <img src="/assets/images/sponsors/platinum.svg" alt="platinum medal" className='w-16' />
                    <span className='text-[#9DDCF8] font-bold'>Platinum</span>
                </div>

                <img src='/assets/images/sponsors/balsamiq-logo.png' alt='Balsamiq' className='h-24' />
            </div>

            {/* GOLD */}

            <div className='flex flex-col items-center'>
                <div className='text-2xl font-bold flex items-center mb-4 grid grid-cols-2 w-[10rem]'>
                    <img src="/assets/images/sponsors/gold.svg" alt="gold medal" className='w-16' />
                    <span className='text-[#FBAD24] font-bold'>Gold</span>
                </div>

                <img src='/assets/images/sponsors/genxyz.svg' alt='Genxyz' className='h-20' />
            </div>

            {/* SILVER */}

            <div className='flex flex-col items-center'>
                <div className='text-2xl font-bold flex items-center mb-4 grid grid-cols-2 w-[10rem]'>
                    <img src="/assets/images/sponsors/silver.svg" alt="silver medal" className='w-14' />
                    <span className='text-[#AEAEAE] font-bold'>Silver</span>
                </div>

                <img src='/assets/images/sponsors/NordVPN.svg' alt='NordVPN' className='h-16' />
            </div>

            {/* BRONZE */}

            <div className='flex flex-col items-center'>
                <div className='text-2xl font-bold flex items-center mb-4 grid grid-cols-2 w-[10rem]'>
                    <img src="/assets/images/sponsors/bronze.svg" alt="bronze medal" className='w-14' />
                    <span className='text-[#A47556] font-bold'>Bronze</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sponsors