import React, { useContext } from 'react';
import AppContext from '../contex/AppContext';
import Map from '../components/Map';
import usePositionAddress from '../hooks/usePositionAddress';
import '../style/components/Success.css';

export const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = usePositionAddress(`${buyer[0].cp},${buyer[0].city},${buyer[0].state},${buyer[0].address}`);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          {location?.latitude && <Map location={location} />}
        </div>
      </div>
    </div>
  );
}


