import React from 'react';
import { motion } from 'framer-motion';

const Bottom = () => {
  return (
    <div>
      <motion.div
        className='absolute bottom-0 w-full'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='w-full text-white text-[14px] leading-[28px] font-medium'>
          <motion.div
            className='flex flex-row justify-between h-20 lg:h-48 px-4 gap-3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
                     <div className='absolute bottom-0 w-full'>
                <div className='w-full text-white text-[14px] leading-[28px] font-medium'>
                    <div className='flex flex-row justify-between h-20 lg:h-48 px-4 gap-3'>
                    <div className='flex flex-col justify-end h-[70%]'>
                        <div className='peru' >Peru</div>
                    </div>
                    <div className='flex flex-col justify-center h-[25%]'>
                        <div className='canada'>Canada</div>
                    </div>
                    <div className='flex flex-col justify-end h-[30%]'>
                        <div className='usa'>USA</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-end h-[40%]'>
                        <div className='mexico'>Mexico</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-end h-[55%]'>
                        <div className='argentina'>Argentina</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-center h-[45%]'>
                        <div className='brazil'>Brazil</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-start h-[5%]'>
                        <div className='iceland'>Iceland</div>
                    </div>
                    <div className='flex flex-col justify-end h-[45%]'>
                        <div className='portugal'>Portugal</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-center h-[35%]'>
                        <div className='spain'>Spain</div>
                    </div>
                    <div className='flex flex-col justify-center h-[20%]'>
                        <div className='france'>France</div>
                    </div>
                    <div className='flex flex-col justify-center h-[45%]'>
                        <div className='italy'>Italy</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-start h-[5%]'>
                        <div className='croatia'>Croatia</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-end h-[40%]'>
                        <div className='greece'>Greece</div>
                    </div>
                    <div className='flex flex-col justify-center h-[35%]'>
                        <div className='turkey'>Turkey</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-end h-[40%]'>
                        <div className='georgia'>Georgia</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-end h-[50%]'>
                        <div className='india'>India</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-center h-[35%]'>
                        <div className='thailand'>Thailand</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-center h-[55%]'>
                        <div className='malaysia'>Malaysia</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-end h-[60%]'>
                        <div className='australia'>Australia</div>
                    </div>
                    <div className='hidden lg:flex flex-col justify-center h-[65%]'>
                        <div className='japan'>Japan</div>
                    </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div
        className='absolute bottom-0 w-full h-[140px] bg-[#ECEFF1] circle'
      />
    </div>
  );
};

export default Bottom;



   