import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
            <h3 className='text-3xl text-success'>Welcome to Your dashbord !</h3>
        <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashbord">Appiontments</Link></li>
            <li><Link to ="/dashbord/review">Review</Link></li>
            <li><Link to ="/dashbord/services">Myservise</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashbord;