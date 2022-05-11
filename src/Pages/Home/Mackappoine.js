import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const Mackappoine = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex items-center justify-center mt-14 '>
            <div className='flex-1 hidden lg:block'>
               <img className='mt-[-130px]' src={doctor} alt="" /> 
            </div>
            <div className='flex-1 text-white p-4'>
                <h2 className='text-4xl'>Appiontment</h2>
                <h4 className='text-2xl py-3'>Mack Appiontment Today</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />  Nam assumenda aliquam tempore nostrum? Eius consequatur, <br /> exercitationem veritatis et similique architecto tenetur harum <br />  in expedita aperiam itaque perferendis quae sit esse!</p>
                <div className="btn btn-primary mt-3">Get Started</div>
            </div>
        </section>
    );
};

export default Mackappoine;