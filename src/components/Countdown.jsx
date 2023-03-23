import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState(() => {
    const savedCountdown = localStorage.getItem('countdown');
    return savedCountdown !== null ? parseInt(savedCountdown) : 1* 6;
  });

  useEffect(() => {
    let interval = null;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      localStorage.removeItem('countdown');
    } else {
      localStorage.setItem('countdown', countdown.toString());
    }
  }, [countdown]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <p className='font-bold text-center text-white text-2xl'> {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
  );
}

export default Countdown;