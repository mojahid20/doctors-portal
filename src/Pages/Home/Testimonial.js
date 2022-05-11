import React from 'react';
import testimonials from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews=[
        {
            id:1,
            name:"mojahid",
            deskcriptio:'',
            location:'Dhaka',
            img:people1,
        },
        {
            id:2,
            name:"jamal",
            deskcriptio:'',
            location:'Dhaka',
            img:people2,
        },
        {
            id:3,
            name:"hasan",
            deskcriptio:'',
            location:'Dhaka',
            img:people3,
        },
    ]
    return (
        <section>
            <div className='flex justify-between items-center'>
                <div className='text-center text-xl'>
                    <h3>Tstimonial</h3>
                    <h4>whats Our pations say</h4>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={testimonials} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   reviews.map(review=> <Review
                   key={review.id}
                   review={review}
                   ></Review>)
               }
            </div>
            
        </section>
    );
};

export default Testimonial;