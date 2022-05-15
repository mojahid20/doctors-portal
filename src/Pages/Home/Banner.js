import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src={chair} className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile  Starts <br /> Heare!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in.<br /> Quaerat 
      fugiat ut assumenda excepturi   <br />
       In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;