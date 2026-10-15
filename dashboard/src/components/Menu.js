import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuClass = "menu";
  return (
      <div className="menu-container">
          <img src="logo.png" alt="FinOrbital" style={{ width: '50px' }} />
          <div className="menus">
              <ul>
                  <li>
                      <Link style={{ textDecoration: 'none' }} to="/">
                          <p className={menuClass}>Dashboard</p>
                      </Link>
                  </li>
                  <li>
                      <Link style={{ textDecoration: 'none' }} to="/orders">
                          <p className={menuClass}>Orders</p>
                      </Link>
                  </li>
                  <li>
                      <Link style={{ textDecoration: 'none' }} to="/holdings">
                          <p className={menuClass}>Holdings</p>
                      </Link>
                  </li>
                  <li>
                      <Link style={{ textDecoration: 'none' }} to="/positions">
                          <p className={menuClass}>Positions</p>
                      </Link>
                  </li>
                  <li>
                      <Link style={{ textDecoration: 'none' }} to="/funds">
                          <p className={menuClass}>Funds</p>
                      </Link>
                  </li>
                  <li>
                      <Link style={{ textDecoration: 'none' }} to="/apps">
                          <p className={menuClass}>Apps</p>
                      </Link>
                  </li>
              </ul>
              <hr />
              <div className="profile">
                  <div className="avatar">VFO</div>
                  <p className="username">USERID</p>
              </div>
          </div>
      </div>
  );
};

export default Menu;
