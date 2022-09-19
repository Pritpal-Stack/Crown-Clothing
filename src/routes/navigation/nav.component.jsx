import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Fragment } from "react"; 
// components 
import { ReactComponent as CrownLogo } from "../../assets/logos/083 crown.svg"; 
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
// utils 
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector" 
import { selectIsCartOpen } from '../../store/cart/cart.selector'
// css
import {NavigationContainer, NavLinks, NavLink,LogoContainer} from "./nav.style.jsx";

const Nav = () => {
  // const { currentUser } = useContext(UserContext);

  const currentUser = useSelector( selectCurrentUser );
  const isCartOpen = useSelector( selectIsCartOpen )

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo"></CrownLogo>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={SignOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
