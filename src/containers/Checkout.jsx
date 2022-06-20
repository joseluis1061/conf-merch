import React from 'react';
import '../style/components/Checkout.css';
import { Link } from 'react-router-dom';
export const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <Link to='/checkout/information'>
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
}


