


import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'

const AppointmetBanner = ({date, setDate}) => {
    
    return (
    <div>
         <div className="hero min-h-screen ">
     <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div className='border border-primary'>
    return <DayPicker
    mode="single"
    selected={date}
    onSelect={setDate}
    />;
    <p className='text-center'>You have selected </p>;
    </div>
    
    
    
  </div>
  
 
</div>

    </div>

    );
};

export default AppointmetBanner;