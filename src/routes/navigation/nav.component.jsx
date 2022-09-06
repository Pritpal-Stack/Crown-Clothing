import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo }  from '../../assets/logos/083 crown.svg'

// css 
import './nav.style.scss'

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/' >
          <CrownLogo className="logo" ></CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
