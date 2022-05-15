import React from 'react';

const ServiceDatils = ({service,setTreatment}) => {
    const {name, slots}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>
              {
                  slots.length >0
                  ? <span>{slots[0]}</span>
                  :<span className='text-red-500'>no slots avialable</span>
              }
          </p>
          <p>{slots.length}{slots.length >1 ? 'spaces' :'space'}</p>
          <div className="card-actions justify-end">
            
             <label htmlFor="booking"  disabled ={slots.length===0}
            onClick={()=> setTreatment(service)} className="btn btn-primary text-center">Book  Now</label>
          </div>
        </div>
      </div>
    );
};

export default ServiceDatils;