import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import '../../Styles/styles.css'
import exlclaim from '../../assets/images/Frame.svg'
import { addToLocalStorage } from '../../Utilities/storeAppointmentToLocal';

const DoctorsInfo = () => {

   const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();
  const dayToCheck = dayMap[today.getDay()];

  const {id} = useParams(); 
  const doctorsData = useLoaderData()
  const doctor = doctorsData.find(doctor=>doctor.id === parseInt(id));


  const handleOnClick = (id)=>{
    addToLocalStorage(id)
  }

  return (
    <div className='my-24 bg-slate-100 mx-10 '>
      <h2 className='jakarta text-center text-4xl font-extrabold'>Doctor’s Profile Details</h2>
      <p className='jakarta text-center my-3 text-[#141414B2] font-medium'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>



      <div className='flex sm:flex-row bg-white  shadow-slate-300 shadow-sm flex-col my-16 sm:mx-20 p-4 sm:p-0 gap-10'>
        <img src={doctor.doctorImage} className='h-86' alt={doctor.name} />
        <div>
          <h3 className='jakarta text-3xl font-extrabold mt-5'>{doctor.name}</h3>
          <h3 className='jakarta text-xl font-medium mt-2'>{doctor.education}</h3>
          <p className='jakarta text-base font-medium mt-4 text-[#141414B2]'>Speciality: <span className='text-[#176AE5]'>{doctor.speciality}</span></p>
          <div className='flex sm:flex-row flex-col sm:gap-10 my-3'>
            <p className='jakarta text-base font-medium mt-2 text-[#141414B2]'>Experience: <span className='text-[#176AE5]'>{doctor.yearExperience}</span> years</p>
          <p className='jakarta text-base font-medium mt-2 text-[#141414B2]'>Registration Number: <span className='text-[#176AE5]'>{doctor.registrationNumber}</span></p>
          </div>
         <div className='flex items-center gap-2'>
           <p className='jakarta  text-base font-medium mt-2 text-[#141414B2]'>Available Days: </p>
          {
            doctor.availabilityDays.map((day,index)=><span className='jakarta mt-2 text-[#176AE5]' key={index}> {day},</span>)
          }
         </div>
          <p className='jakarta text-base font-medium mt-2 text-[#141414B2]'>Working At: <span className='text-[#176AE5] font-bold'>{doctor.workingPlace}</span></p>
          <p className='jakarta text-base font-medium mt-2 text-[#141414B2]'>Working Area: <span className='text-[#176AE5]'>{doctor.workingArea}</span></p>
          <p className='jakarta text-base font-medium mt-2 text-[#141414B2]'>Consultation Fee: <span className='text-[#176AE5]'>${doctor.consultationFee}</span> <span className='text-[#176AE5]/50'>+ vat</span></p>

        </div>
      </div>


      <div>
        <h3 className='text-2xl font-extrabold jakarta text-center my-10'>Book an Appointment</h3>
        <div className='flex flex-row justify-between'>
          <h2>Availability</h2>{
          doctor.availabilityDays.includes(dayToCheck) ? <p className='px-6 py-1 bg-[#09982F]/30 rounded-full text-[#09982F]'>Available</p> : <p className='py-1 px-3 bg-amber-300/30 rounded-full text-amber-500'>Unavailable</p>
}
        </div>
        <div className='flex flex-row gap-2 py-0.5 px-3 text-sm rounded-full my-3 sm:w-10/12 bg-amber-300/30'>
          <img src={exlclaim} alt="Exclamation Icon" />
        <p className='  text-amber-500'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
        </div>
        <Link to={`/bookings`}>
        <button onClick={()=>handleOnClick(doctor.id)} className={`${ doctor.availabilityDays.includes(dayToCheck) ? "" : "hidden"} bg-[#176AE5] w-full text-white px-4 py-2 rounded-full `} >Book Appointment Now</button>
        </Link>
      </div>


      
    </div>
  );
};

export default DoctorsInfo;