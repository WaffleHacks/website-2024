import React, { useEffect, useState } from 'react';


const NumberDisplay = ({number, text}: {number: number, text: string}) => {
  let num_chars = number.toString();
  if (num_chars.length < 2) num_chars = '0' + num_chars;
  return (
    <div className='flex flex-col items-center relative'>

      <div className='flex flex-row gap-2'>
        {num_chars.split('').map((char, index) => {
          return (
            <span key={index} className='text-2xl font-extrabold bg-gray-200 rounded-lg py-3 px-3'>{char}</span>
          )
        })}
      </div>
      <span className='text-base font-medium absolute top-[100%]'>{text}</span>
    </div>
  )
}

const LandingPanel = () => {

  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    function showtime() {
      let subDate = Date.UTC(2024, 5, 23, 16, 0, 0);
      let now = Date.now();
      let subTimeLeft = Math.max(0, subDate - now);
  
      let daysLeft = Math.floor(subTimeLeft / (1000 * 60 * 60 * 24));
      subTimeLeft -= daysLeft * 24 * 60 * 60 * 1000;
  
      let hoursLeft = Math.floor(subTimeLeft / (1000 * 60 * 60));
      subTimeLeft -= hoursLeft * 60 * 60 * 1000;
      let minutesLeft = Math.floor(subTimeLeft / (1000 * 60));
      subTimeLeft -= minutesLeft * 60 * 1000;
      let secondsLeft = Math.floor(subTimeLeft / 1000);
  
      setDaysLeft(daysLeft);
      setHoursLeft(hoursLeft);
      setMinutesLeft(minutesLeft);
      setSecondsLeft(secondsLeft);
    }

    let interval = setInterval(() => {
      showtime();
    }, 1000);

    showtime();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='font-mplus p-12 h-screen'>
        <h2 className='text-2xl font-normal'>Put your best code forward for the</h2>
        <h1 className='text-[2.5rem] font-medium'>WaffleHacks games!</h1>

        <div className='landing-panel-img p-8'>
            <img className='h-full object-contain' src='/assets/images/olympics_placeholder.png' alt=""/>
        </div>

        <div className='flex flex-row justify-end w-full'>
          <div>
            <span className='text-2xl'>Countdown to the WaffleHacks Games</span>
            <div className='flex text-2xl font-bold gap-2 items-center'>
              <NumberDisplay number={daysLeft} text='Days'/> <span>:</span>
              <NumberDisplay number={hoursLeft} text='Hours'/> <span>:</span>
              <NumberDisplay number={minutesLeft} text='Minutes'/> <span>:</span>
              <NumberDisplay number={secondsLeft} text='Seconds'/>

            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPanel