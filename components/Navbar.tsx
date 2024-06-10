"use client";

import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #333;

  img {
    margin-right: 10px;
  }
`;

const NavLinks = styled.div`
  a {
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    color: #333;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: #666;
    }
  }
`;

const SignUpButton = styled.button`
  position: relative;
  float: right;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #5753c9;
  }
  
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <img src="/logo.png" alt="Logo" /> COLEARN
      </Logo>
      <NavLinks>
        <a href="#about">About Us</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact Us</a>
      </NavLinks>
      <SignUpButton>Sign Up</SignUpButton>
    </NavbarContainer>
  );
};

export default Navbar;
