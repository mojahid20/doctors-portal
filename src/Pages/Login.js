
import React from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from '../firebase.init'
import { useForm } from "react-hook-form";



const Login = () => {
    const [signInWithGoogle, guser,gloading] = useSignInWithGoogle(auth);
    const { register, formState: {}, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location= useLocation();

      const  from = location.state?.from?.pathname || "/";
     if(loading || gloading ){
       return <button className="btn loading">loading</button>
   }
    if (user || guser) {
        
      navigate(from, { replace: true });
        
      }

      const onSubmit = data =>{
     
      signInWithEmailAndPassword(data.email, data.password);
      }
    return (
        <div>
            
            <div className='flex h-screen justify-center items-center'>
            
            <div className="card w-96 bg-base-100 shadow-xl text-primary-content">
            <div className="card-body"> 
            <h3 className='text-center text-2xl'>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Email</span>
                
            </label>
            <input type="email" placeholder="enter email"
            {...register("email", {
                required:{
                    value: true,
                    message:'email is required'
                },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: 'provide a valid email'
                }
              })}
             className="input input-bordered w-full max-w-xs" />
            <label className="label">
               
                
            </label>
            </div>



           
      
          
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">password</span>
                
            </label>
            <input type="password" placeholder="enter password"
            {...register("password", {
                required:{
                    value: true,
                    message:'password is required'
                },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: 'provide a valid password'
                }
              })}
             className="input input-bordered w-full max-w-xs" />
            <label className="label">
                
                
            </label>
            </div>
          <input className='btn w-full max-w-xs' type="submit" value='Login' />
            </form>
            <div className="divider">OR</div>
          <p  className='text-center mb-4'>are you new? <Link to='/register'>create new account</Link> </p>
            
             <div className="card-actions justify-center">
             <button onClick={() => signInWithGoogle()} className="btn">Sign With Google</button>
          </div>
        </div>
      </div>
              </div>
        </div>
    );
};

export default Login;