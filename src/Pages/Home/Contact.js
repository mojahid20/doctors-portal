import React from 'react';
import contact from '../../assets/images/contact.jpg'

const Contact = () => {
    return (
        <div className='my-10' style={{
            background:`url(${contact})`,
            backgroundSize:'cover',
            height:'600px'
        }}>
        <div  className='w-80 mt-24 mx-auto '>
            <div className='pt-5'>
            <h4 className='text-xl font-bold text-light text-center text-white '>Contact Us</h4>
            <h1 className='text-3xl mb-4 text-center'>Sty Connected  With Us</h1>
            </div>
            <div class="form-control outline-none ">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" required/>
          <label class="label">
          <span class="label-text">Massage</span></label>
         <textarea  name="massage" id="name" cols="20" rows="10" required placeholder='enter your text'
         class="input input-bordered resize-none"></textarea>
          <button class="btn btn-outline btn-primary mt-3">Button</button>
        </div>
        <div class="form-control mt-6"></div>
        </div>
        </div>
    );
};

export default Contact;