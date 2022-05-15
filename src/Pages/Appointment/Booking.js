import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Booking = ({date,treatment,setTreatment}) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
      
       const booking = {
        treatmentId: _id,
        treatment: name,
        date: formattedDate,
        slot,
        patient: user.email,
        patientName: user.displayName,
        
    }

    fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`Appointment is set, ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            setTreatment(null);
        });
    }
    return (
        <div>
            <input type="checkbox" id="booking" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-center my-3">Booking for: {name}</h3>
    
   <form onSubmit={handleBooking}>
   <div className='grid grid:cols-1 gap-3 justify-center'>
        

        <input type="text" value={format(date,'PP')} className="input input-bordered input-xs w-full max-w-xs" />
        
        <select name='slot' className="select select-accent w-full max-w-xs">
         {
             slots.map((slot, index)=> <option value={slot}
             key={index}
             >{slot}</option>)
         }
        </select>
        
        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-sm w-full max-w-xs" />
        
        <input type="email" name='email' disabled valu={user?.email || ''} className="input input-bordered input-sm w-full max-w-xs" />
        <input type="text" placeholder="Phone number" className="input input-bordered input-sm w-full max-w-xs" />
        <input type="submit" value='Submit' className="btn btn-success w-full max-w-xs" />
            </div>
   </form>
  </div>
</div>
        </div>
    );
};

export default Booking;