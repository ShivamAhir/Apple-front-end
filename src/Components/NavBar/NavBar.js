import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './NavBar.css';
import NavBarOption from "./NavBarOption";
import User from "../UserName/User";
import Login from '../LogSign/Login'

function NavBar() {
  const [sseData, setSseData] = useState({ UserName: '', UserEmail: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource('/api/logUser');
    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setSseData(newData);
      setIsLoggedIn(!!newData.UserName); // Set isLoggedIn based on UserName presence
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="navbar-parent">
      <div className="navbar">
        <Link to="/"><NavBarOption type="home" ></NavBarOption></Link>
        <Link to="/imac"><NavBarOption type='iMac'></NavBarOption></Link>
        <Link to="/ipad"><NavBarOption type='iPad'></NavBarOption></Link>
        <Link to="/iphone"><NavBarOption type='iPhone'></NavBarOption></Link>
        <Link to="/iwatch"><NavBarOption type='iWatch'></NavBarOption></Link>
        <Link to="/airpod"><NavBarOption type='Airpods'></NavBarOption></Link>
        <Link to="/support"><NavBarOption type='Support'></NavBarOption></Link>
        <Link to="/buy"><NavBarOption type='buy'></NavBarOption></Link>
      </div>
      {sseData.UserName !== "" && <User userName={sseData.UserName}></User>}
      {sseData.UserName === "" && <Login userName={sseData.UserName}></Login>}
      
    </div>
  );
}

export default NavBar;
