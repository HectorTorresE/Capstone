import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import Nav from './NavBar.style';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
  const navigate = useNavigate();
  const params = useLocation();

  const url = params.pathname.replaceAll('%20', ' ').split('/').slice(1, 3);
  return (
    <Nav>
      {params.pathname !== '/' && (
        <HiChevronLeft className="arrow-left" onClick={() => navigate(-1)} />
      )}
      <h2 className="header-title">{url[1] || url[0]}</h2>
      <img src={logo} alt="Header" className="logo" onClickCapture={() => navigate('/')} />
    </Nav>
  );
};

export default NavBar;
