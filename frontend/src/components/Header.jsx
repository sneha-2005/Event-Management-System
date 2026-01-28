import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavigationLink from './shared/NavigationLink';
import { getAuthContext } from '../context/AuthContext';


const Header = () => {

  const auth = getAuthContext();

  return (
    <AppBar
      sx={{ bgcolor: "#6a1b9a", position: "static", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", flexDirection:"row" }}>
        <h3 style={{ marginRight: "20px",color: "white"}}>
          Event Management System 
        </h3>
        <div style={{ display:"inline-flex"}}>
          <NavigationLink
              bg="#AE9D99"
              textColor="black"
              to="/about"
              text="About"
           />    
           
        { auth?.isLoggedIn ? 
          (
            <>
            <NavigationLink bg="#3F51B5"
            textColor="white"
            to="/"
            text="User logout"
            onClick={auth.logout} />
            </>
          ) 
          : 
          (
            <>
            <div style={{display:'inline-flex'}}>
            <NavigationLink
                bg="#AE9D99"
                to="/login"
                text="User Login"
                textColor="black"
              />
              <NavigationLink
                bg="#3F51B5"
                textColor="white"
                to="/signup"
                text="Register"
              />
              </div>
            </>) 
        }
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
