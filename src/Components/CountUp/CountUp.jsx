import React, { useEffect, useRef, useState } from 'react';
import doctor from '../../Assets/Images/success-doctor.png'
import patients from '../../Assets/Images/success-patients.png'
import reviews from '../../Assets/Images/success-review.png'
import stuff from '../../Assets/Images/success-staffs.png'
import '../../Styles/styles.css'


const CountUp = () => {


  const CountUp = ({ end, start = 0, duration = 2000 }) => {

    const [count, setCount] = useState(start);

    const startTime = useRef(null);
    const frameId = useRef(null);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    useEffect(() => {
      startTime.current = null;
      const animate = (timestamp) => {
        if (startTime.current === null) {
          startTime.current = timestamp;
        }
        const elapsed = timestamp - startTime.current;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = easeOutCubic(progress);

        const newCount = start + (end - start) * easedProgress;

        if (progress < 1) {
          setCount(Math.round(newCount));
          frameId.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      frameId.current = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(frameId.current);
      };
    }, [start, end, duration]);

    return <span>{count.toLocaleString()}</span>;
  };



  return (
    <div className='px-10 mb-24 w-10/12 mx-auto'>
      <h3 className='jakarta text-3xl  font-extrabold mb-5 text-center'>We Provide Best Medical Services</h3>
      <p className='jakarta text-sm font-medium mb-10 opacity-80 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
      <div className='flex gap-10 sm:flex-row flex-col shadow-slate-300 shadow-sm py-10 px-24 justify-between'>
        <div className=''>
        <img src={doctor} alt="" />
        <h3 className='text-6xl my-3 font-bold'> <CountUp end={199} duration={10000} />+</h3>
        <h2 className='text-2xl font-medium jakarta text-[#0F0F0F99]'>Total Doctors</h2>
      </div>

      <div>
        <img src={patients} alt="" />
        <h3 className='text-6xl my-3 font-bold'> <CountUp end={467} duration={15000} />+</h3>
        <h2 className='text-2xl font-medium jakarta text-[#0F0F0F99]'>Total Patients</h2>
      </div>

      <div>
        <img src={reviews} alt="" />
        <h3 className='text-6xl my-3 font-bold'> <CountUp end={1990} duration={15000} />+</h3>
        <h2 className='text-2xl font-medium jakarta text-[#0F0F0F99]'>Total Reviews</h2>
      </div>

      <div>
        <img src={stuff} alt="" />
        <h3 className='text-6xl my-3 font-bold'> <CountUp end={300} duration={10000} />+</h3>
        <h2 className='text-2xl font-medium jakarta text-[#0F0F0F99]'>Total Staff</h2>
      </div>
      </div>
    </div>
  );
};

export default CountUp;