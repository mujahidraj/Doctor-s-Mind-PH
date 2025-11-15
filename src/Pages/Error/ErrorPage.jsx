import React from 'react';
import { Link } from 'react-router';
import errorImage from '../../assets/images/404.jpg';

const ErrorPage = () => {
  return (
    <div>

      <img src={errorImage} className='mx-auto w-96' alt="404 Not Found" />
      <h1 className='text-5xl font-bold text-center mt-20'>404 - Page Not Found</h1>
      <p className='text-center mt-4'>Sorry, the page you are looking for does not exist.</p>
      <Link to='/' className='block text-center mt-6 text-blue-500 underline'>Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;