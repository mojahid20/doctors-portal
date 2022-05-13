import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';

import ServiceDatils from './ServiceDatils';

const AvailableAppointment = ({date}) => {
    const [services,setServices]= useState([]);
    const [treatment, setTreatment]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/Appiontment')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[]);
    return (
        <div>
            <p className='text-center text-xl text-info'> AvailableAppointment{format(date,'PP')}</p>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                 services.map(service => <ServiceDatils
                 key={service.id}
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