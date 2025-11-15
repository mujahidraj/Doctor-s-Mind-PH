import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router';


const DoctorCard = ({ doctor }) => {

  // const [doctorImage,name,education,speciality,yearExperience,registrationNumber,availabilityDays,workingPlace,workingArea,consultationFee] = doctor

  const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();
  const dayToCheck = dayMap[today.getDay()];



  return (
    <div>
      <div className='sm:w-[335px] w-[380px] mx-auto shadow-slate-300 shadow-sm flex flex-col bg-white rounded-lg p-5'>
        <img src={doctor.doctorImage} className='h-60 rounded-lg' alt="" />


        <div className='flex my-3 flex-row gap-8'>
          {
            doctor.availabilityDays.includes(dayToCheck) ? <p className='px-6 py-1 bg-[#09982F]/30 rounded-full text-[#09982F]'>Available</p> : <p className='py-1 px-3 bg-amber-300/30 rounded-full text-amber-500'>Unavailable</p>
          }
          <p className='py-1 px-3 bg-sky-300/50 rounded-full text-sky-500'>{doctor.yearExperience}yr Experience</p>
        </div>

          <div>
            <h3 className='jakarta text-2xl font-extrabold'>{doctor.name}</h3>
            <h3 className='text-[#0F0F0F99] jakarta font-medium '>{doctor.education}</h3>
          </div>

          <div className='flex flex-row items-center my-2 gap-2 jakarta font-medium text-[#0F0F0F99]'>
            <CgProfile />
            <h3>Reg.no : {doctor.registrationNumber}</h3>
          </div>

         <Link to={`/doctors-info/${doctor.id}`}>
          <button className='btn border-sky-500 my-5 rounded-lg text-sky-500'>View Details</button>
         </Link>
         

      </div>
    </div>
  );
};

export default DoctorCard;