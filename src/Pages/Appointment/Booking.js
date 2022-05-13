import React from 'react';
import { format } from 'date-fns';
const Booking = ({date,treatment,setTreatment}) => {
    const {_id,name,slots}=treatment;

    const handalbooking = event =>{
        event.preventDefault();
       const slots= event.target.slot.value;
       console.log(slots,_id,name)
       setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-center my-3">Booking for: {name}</h3>
    
   <form onSubmit={handalbooking}>
   <div className='grid grid:cols-1 gap-3 justify-center'>
        

        <input type="text" value={format(date,'PP')} class="input input-bordered input-xs w-full max-w-xs" />
        
        <select name='slot' class="select select-accent w-full max-w-xs">
         {
             slots.map(slot=> <option value={slot}>{slot}</option>)
         }
        </select>
        
        <input type="text" name='name' placeholder="name" class="input input-bordered input-sm w-full max-w-xs" />
        
        <input type="email" placeholder="email" class="input input-bordered input-sm w-full max-w-xs" />
        <input type="text" placeholder="Phone number" class="input input-bordered input-sm w-full max-w-xs" />
        <input type="submit" value='Submit' class="btn btn-success w-full max-w-xs" />
            </div>
   </form>
  </div>
</div>
        </div>
    );
};

export default Booking;