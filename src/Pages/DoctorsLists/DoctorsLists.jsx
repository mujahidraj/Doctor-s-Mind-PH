import React from 'react';
import DoctorCard from '../../Components/DoctorCard/DoctorCard';
import '../../Styles/styles.css'

const DoctorsLists = ({doctorsData}) => {
  return (
    <div className='sm:mx-10 my-10'>
      <h3 className='text-center jakarta text-4xl font-bold '>Our Best Doctors</h3>
      <p className='text-center jakarta opacity-80 my-3 text-[#0F0F0F]'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      {
        doctorsData.map(doctor=><DoctorCard key={doctor.registrationNumber} doctor={doctor}></DoctorCard>)
      }
    </div>
  );
};

export default DoctorsLists;