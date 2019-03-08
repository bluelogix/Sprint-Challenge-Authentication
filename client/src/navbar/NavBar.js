import React from  'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'







function NavBar(props) {

const NavBarStyle = styled.div`
   background: #fbf7cd;
   padding: 20px;
   font-weight: bold;

`
   const logout = () => {
      localStorage.removeItem('jwt');
    }
   return(
       
      <NavBarStyle>
        <NavLink 
        to='/login' 
        style={{ color: 'black', textDecoration: 'none', padding: '10px' }}>
        Login
        </NavLink>

        <NavLink  
        to='/register' 
        style={{ color: 'black', textDecoration: 'none', padding: '10px' }}>
        Sign Up
        </NavLink>

        <NavLink  
        to='/jokes' 
        style={{ color: 'black', textDecoration: 'none', padding: '10px' }}>
        Jokes
        </NavLink>
        
        <NavLink 
        to='/login' 
        style={{ color: 'black', textDecoration: 'none', padding: '10px' }}
        onClick={logout}>
         Logout
         </NavLink>

     </NavBarStyle>
    
   )
      
  }
  
  export default NavBar;