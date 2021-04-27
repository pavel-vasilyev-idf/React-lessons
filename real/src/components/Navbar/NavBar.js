import React from 'react'
import styled from 'styled-components';
import logoImg from '../../image/logo.svg'
import loginImg from '../../image/headerButton/login.svg'

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: #fff;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Enter = styled.span`
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`;

const EnterImage = styled.img`
    width: 32px;
    height: 32px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>MrDonald's</H1>
        </Logo>
        <Button>
            <EnterImage src={loginImg} alt="logo" />
            <Enter>войти</Enter>
        </Button>
    </NavBarStyled>
);