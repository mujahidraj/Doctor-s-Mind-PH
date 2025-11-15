import React from 'react';
import DoctorCard from '../../Components/DoctorCard/DoctorCard';
import '../../Styles/styles.css'

const DoctorsLists = ({doctorsData}) => {
  return (
    <div className='sm:px-10 py-24  bg-slate-100'>
      <div className="breadcrumbs text-sm">
  <ul>
    <li className='italic font-medium'><a>Home</a></li>
    <li className='italic font-medium'><a>Doctor's List</a></li>
    
  </ul>
</div>
      <h3 className='text-center jakarta text-4xl font-bold '>Our Best Doctors</h3>
      <p className='text-center jakarta opacity-80 my-5 text-[#0F0F0F]'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      <div className='grid sm:grid-cols-3  sm:my-14 grid-cols-1 items-center justify-center gap-10'>
        {
        doctorsData.map(doctor=><DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
      }
      </div>
    </div>
  );
};

export default DoctorsLists;