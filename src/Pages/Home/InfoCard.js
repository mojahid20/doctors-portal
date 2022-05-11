
import React from 'react';

const InfoCard = ({img,cardTile,bgCls}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl  px-4 ${bgCls}`}>
  <figure>
      <img src={img} alt="Album"/>

      </figure>
  <div class="card-body text-white">
    <h2 class="card-title">{cardTile}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
    );
};

export default InfoCard;