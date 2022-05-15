
import React from 'react';

const InfoCard = ({img,cardTile,bgCls}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl  px-4 ${bgCls}`}>
  <figure>
      <img src={img} alt="Album"/>

      </figure>
  <div classNameName="card-body text-white">
    <h2 classNameName="card-title">{cardTile}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div classNameName="card-actions justify-end">
      
    </div>
  </div>
</div>
    );
};

export default InfoCard;