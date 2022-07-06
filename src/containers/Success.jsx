import React, { useContext } from 'react';
import AppContext from '../contex/AppContext';
import Map from '../components/Map';
import usePositionAddress from '../hooks/usePositionAddress';
import '../style/components/Success.css';
import useGoogleAddress from '../hooks/useGoogleAddress';

export const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  //código postal, nombre de ciudad, nombre de región).

  const location = usePositionAddress(`%${buyer[0].cp},%${buyer[0].city},%${buyer[0].state}`);

  //const location = useGoogleAddress(buyer[0].address);
  console.log('Localización******')
  console.log(location)
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
         {/* <Map location = {{latitude:51.505, longitude:-0.09}}/> */}
         {
          /*location.lenght>0 && <Map location = {location}/>*/
         }
         <Map location = {location}/>
        </div>
      </div>
    </div>
  );
}


