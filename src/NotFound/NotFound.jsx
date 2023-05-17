import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img className='rounded-2xl' src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg?w=740&t=st=1684362137~exp=1684362737~hmac=8fd9adb08df86a784474e2c25e72dae7c1aaab06ef6ceb55eeef667aa4ad7c3c" alt="" />
            </div>
            <Link className='px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold text-2xl' to='/'>Go Back</Link>
        </div>
    );
};

export default NotFound;