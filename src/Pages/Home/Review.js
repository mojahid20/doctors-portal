import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint aperiam placeat quo eligendi nam nisi adipisci, praesentium reprehenderit aut porro quisquam! Blanditiis odit quis natus, sed et cum obcaecati.</p>
    <div className='flex items-center'>
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
    <img src={review.img} alt="" />
  </div>
</div>
<div>
    <h4 className='text-whait'>{review.name}</h4>
    <p>{review.location}</p>
</div>
      
    </div>
  </div>
</div>
    );
};

export default Review;