import React from 'react';
import '../style/components/Success.css';
export const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Jose, Gracias por tu compra</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          Google Maps
        </div>
      </div>
    </div>
  );
};
