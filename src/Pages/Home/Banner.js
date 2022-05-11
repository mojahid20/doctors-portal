import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse ">
    <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile  Starts <br /> Heare!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in.<br /> Quaerat 
      fugiat ut assumenda excepturi   <br />
       In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;