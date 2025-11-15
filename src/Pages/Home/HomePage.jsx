import React, { createContext, Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import DoctorsLists from '../DoctorsLists/DoctorsLists';
import CountUp from '../../Components/CountUp/CountUp';

const DoctorsContext = createContext('')

const HomePage = () => {

  const doctorsData = useLoaderData()

  
  return (
    <div>
     <Banner></Banner>
     <Suspense fallback={<span class="loading loading-bars loading-lg"></span>}>
      <DoctorsLists doctorsData={doctorsData}></DoctorsLists>
     </Suspense>
     <CountUp></CountUp>
    </div>
  );
};

export default HomePage;