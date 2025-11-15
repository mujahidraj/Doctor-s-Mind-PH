import React from 'react';

const DoctorCard = ({doctor}) => {
  console.log(doctor);
  
  return (
    <div>
      <h3>{doctor.name}</h3>
    </div>
  );
};

export default DoctorCard;