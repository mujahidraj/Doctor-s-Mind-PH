import React from 'react';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router';
import { getAppointment, removeFromLocalStorage } from '../../Utilities/storeAppointmentToLocal';

const colorData = [
  { name: 'Bright Red', fill: '#FF6B6B' },
  { name: 'Ocean Blue', fill: '#4D96FF' },
  { name: 'Leaf Green', fill: '#6BCB77' },
  { name: 'Sun Yellow', fill: '#FFD93D' },
  { name: 'Royal Purple', fill: '#9B59B6' },
  { name: 'Vibrant Orange', fill: '#E67E22' },
  { name: 'Cool Teal', fill: '#1ABC9C' },
  { name: 'Deep Pink', fill: '#F472B6' },
  { name: 'Sky Blue', fill: '#82D1F5' },
  { name: 'Crimson', fill: '#DC143C' }
];

const Bookings = () => {
  const [storeAppointment, setStoreAppointment] = useState([]);
  const doctorData = useLoaderData();

  useEffect(() => {
    const storedAppointment = getAppointment();
    const convertedStoredBook = storedAppointment.map(id => parseInt(id));

    if (Array.isArray(doctorData)) {
      const myStoreAppointment = doctorData.filter(doctor => convertedStoredBook.includes(doctor.id));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStoreAppointment(myStoreAppointment);
    }


  }, [doctorData]);

  const HandleCancelButton = (id) => {
    const remainingAppointments = storeAppointment.filter(doctor => doctor.id !== id);
    setStoreAppointment(remainingAppointments);
    // also remove from local storage
    removeFromLocalStorage(id);
  };

  return (
    <div className='mt-20 sm:mx-10' style={{ width: '100%' }}>
      <div className="breadcrumbs text-sm">
        <ul>
          <li className='italic font-medium'><a>Home</a></li>
          <li className='italic font-medium'><a>My booking</a></li>
          

        </ul>
      </div>


      {
        storeAppointment.length === 0 ? <p className='text-center text-red-600 jakarta text-xl font-medium my-10'>No graph to show</p> : <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={storeAppointment}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="consultationFee">
            {
              storeAppointment.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colorData[index % colorData.length].fill}
                />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      }


      <div>
        
        <h2 className='text-3xl font-extrabold jakarta text-center my-10'>My Booked Appointments</h2>
        {
          storeAppointment.length === 0 ? <p className='text-center text-red-500 jakarta text-xl font-medium my-10'>You have no booked appointments yet.</p> : <div className='sm:px-10 px-4'>
            {
              storeAppointment.map(doctor => <div key={doctor.id} className='flex sm:flex-row flex-col justify-between items-center shadow-slate-300 shadow-sm my-5 p-4 rounded-md bg-white'>
                <div className='flex sm:flex-row flex-col items-center gap-5'>
                  <img src={doctor.doctorImage} className='h-24 rounded-lg' alt={doctor.name} />
                  <div>
                    <h3 className='jakarta text-2xl font-extrabold'>{doctor.name}</h3>
                    <h3 className='text-[#0F0F0F99] jakarta font-medium '>{doctor.education}</h3>
                  </div>
                </div>
                <div>
                  <h3 className='jakarta text-base font-bold text-[#176AE5]'>Consultation Fee: ${doctor.consultationFee} <span className='text-[#176AE5]/50'>+ vat</span></h3>
                  <button onClick={()=>HandleCancelButton(doctor.id)} className='btn bg-red-500 w-full hover:bg-red-600 border-0 text-white mt-3 rounded-full'>
                    Cancel Appointment
                  </button>
                </div>  


              </div>)
            }
          </div>
        }
      </div>

    </div>
  );
};

export default Bookings;