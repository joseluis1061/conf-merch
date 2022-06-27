import React, { useContext } from 'react';
import AppContext from '../contex/AppContext';
import { Link } from 'react-router-dom';
import '../style/components/Header.css';


const Header = () => {
  const {state} = useContext(AppContext);
  const {cart} = state;
  return (
    <div className="Header">
        <Link  to= '/'>
          <h1 className="Header-title">
            PlatziConf Merch
          </h1>
        </Link>
      <div className="Header-checkout">
        <Link to='/checkout'>
          <i class="fa-solid fa-basket-shopping"></i>
        </Link>        
        {
          cart.length > 0 && 
            <div className="Header-alert">
              {cart.length}
            </div>
        }
      </div>
    </div>
  );
}

export default Header;