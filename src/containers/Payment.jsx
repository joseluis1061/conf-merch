import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../contex/AppContext';
import '../style/components/Payment.css';

export const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  //Opciones de pago
  const paypalOtions = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent: 'capture',
    currency: 'USD'
  }

  //Estilos del boton de paypal
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  //Función que registra los datos de compra y cambia de pagina
  const handlePaymentSuccess = (data) => {
    console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success')
    }
  }
  //Total de la compra
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onStart={() => console.log('Start Payment')}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

