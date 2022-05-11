import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Info from './Info';
import Mackappoine from './Mackappoine';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
       
            <div className='px-12'>
               <Banner />
               
               <Info />
               <Services />
               <Banner2 />
               <Mackappoine />
               <Testimonial />
            </div>
        
    );
};

export default Home;