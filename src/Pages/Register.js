import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../firebase.init'
import { useForm } from "react-hook-form";

const Register = () => {
    const [signInWithGoogle, guser,gloading] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
      const navigate= useNavigate();
    
   if(loading || gloading || updateerror ){
       return <button className="btn loading">loading</button>
   }
    if (guser) {
        
         console.log(guser);
        
      }

      const onSubmit = async  data =>{
      console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName:data.name });
      console.log('update done')
      navigate('/appointment');
      }
    return (
        <div>
            
            <div className='flex h-screen justify-center items-center'>
            
            <div className="card w-96 bg-base-100 shadow-xl text-primary-content">
            <div className="card-body"> 
            <h3 className='text-center text-2xl'>Register</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Name</span>
                
            </label>
            <input type="name" placeholder="enter name"
            {...register("name", {
                required:{
                    value: true,
                    message:'name is required'
                },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: 'provide a valid name'
                }
              })}
             className="input input-bordered w-full max-w-xs" />
            <label className="label">
               
                
            </label>
            </div>
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
          <input className='btn w-full max-w-xs' type="submit" value='Register' />
            </form>
            <div className="divider">OR</div>
          <p  className='text-center mb-4'> All ready have ac account? <Link to='/login'>pleace Login</Link> </p>
            
            
        </div>
      </div>
              </div>
        </div>
    );
};

export default Register;