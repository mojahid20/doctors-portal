import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services=[
        {
            id:1,
            name:"fluoride treatment",
            descripton:"",
            img:fluoride,
        },
        {
            id:2,
            name:"cavity filing",
            descripton:"",
            img:cavity,
        },
        {
            id:3,
            name:"fluoride treatment",
            descripton:"",
            img:whitening,
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h2>Our Services</h2>
            <h4> Services with Provide</h4>
            </div>
            <div className='grid sm: grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
                {
                    services.map(service=> <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;