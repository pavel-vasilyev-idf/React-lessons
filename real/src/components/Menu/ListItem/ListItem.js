import React from 'react'
import styled from 'styled-components';
import { formatCurrency } from '../../Functions/secondaryFunction'

const List = styled.ul`
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap;
`;
const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    margin-right: 30px;
    padding: 15px;
    font-size: 25px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: black;
        opacity: 30%;
        z-index: -1;
        transition: 0.5s
    }
    &:hover&::after {
        opacity: 10%;
    }
`;


export const ListItem = ({itemList, setOpenItem}) => {
    return (
        <List>
            {itemList.map(item => (
                <Item 
                    key={item.id}
                    img={item.img}
                    onClick={() => setOpenItem(item)}
                    >
                    <p>{item.name}</p>
                    <span>{formatCurrency(item.price)}</span>
                </Item>
            ))}
        </List>
    )
};