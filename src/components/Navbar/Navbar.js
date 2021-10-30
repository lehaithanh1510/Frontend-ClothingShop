import React from 'react';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import CartIcon from '../CartIcon/CartIcon.component.jsx';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.styles.scss';
import { setCurrentUser } from '../../redux/user/user.actions';
import { setItem } from '../../redux/cart/cart.actions';

const CustomNavbar = () => {
  const hidden = useSelector((state) => state.cart.hidden);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(setCurrentUser(null));
    dispatch(setItem([]));
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              handleClick();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth/signin">
            SIGN IN | SIGN UP
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden && <CartDropdown />}
    </div>
  );
};

export default CustomNavbar;
