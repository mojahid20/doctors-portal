import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid sm-1 grid-cols-3  gap-5 px-8'>
            <InfoCard cardTile="opennint Hour" bgCls="bg-gradient-to-r from-cyan-500 to-blue-500" img={clock} />
            <InfoCard cardTile="Our location" bgCls="bg-success" img={marker} />
            <InfoCard cardTile="Contact U" bgCls="bg-gradient-to-r from-cyan-500 to-blue-500" img={phone} />
        </div>
    );
};

export default Info;