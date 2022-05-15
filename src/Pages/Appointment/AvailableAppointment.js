import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Booking from './Booking';

import ServiceDatils from './ServiceDatils';

const AvailableAppointment = ({date}) => {
    const [services,setServices]= useState([]);
    const [treatment, setTreatment]=useState(null);
    const formattedDate = format(date, 'pp');

   
   
    useEffect(()=>{
        fetch(`http://localhost:5000/available`)
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[]);
    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                 services?.map(service => <ServiceDatils
                 key={service._id}
                 service={service}
                 setTreatment={setTreatment}
                 ></ServiceDatils>)
               }
            </div>
            {treatment && <Booking date={date}
             treatment={treatment}
             setTreatment={setTreatment}
             >
               
                  </Booking>}
        </div>
    );
};

export default AvailableAppointment;