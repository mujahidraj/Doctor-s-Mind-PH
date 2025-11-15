import React from 'react';
import bg from '../../assets/images/banner_background.jpg'
import '../../Styles/styles.css'

const Banner = () => {
  return (
    <div className=''>
      <img src={bg} className='h-[600px] w-full' alt="" />
      <div className='absolute top-40 bg-white/50 backdrop-blur-3xl p-5 rounded-md sm:w-7/12 sm:mx-10'>
        <h3 className='sm:text-4xl text-2xl jakarta sm:my-5 my-2 font-extrabold'>Dependable Care, Backed by Trusted Professionals.</h3>
        <h2 className='font-medium text-sm sm:text-base opacity-80 jakarta'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</h2>

        <div>
          <input type="text" className="input my-5 rounded-full bg-white/50 backdrop-blur-2xl" placeholder="Search for doctor" list="browsers" />
          <button className=' mx-3 btn rounded-full bg-[#176AE5] text-white'>Search Now</button>
        </div>
        
      </div>

    </div>
  );
};

export default Banner;