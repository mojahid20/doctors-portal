import React, { useState } from 'react';
import Footer from '../Shard/Footer';
import AppointmetBanner from './AppointmetBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoinetment = () => {
    const [date, setDate]=useState(new Date());
    return (
        <div>
            <AppointmetBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
            <Footer />
        </div>
    );
};

export default Appoinetment;