import styled from 'styled-components';

export const ButtonCheckOut = styled.button`
    background: #299B01;
    width: 250px;
    height: 65px;
    border-color: transparent;
    font-size: inherit;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }
    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #aaa;
    }
`;

