import React from 'react'
import styled from 'styled-components';
import { ButtonCheckOut } from '../ButtonCheckOut/ButtonCheckOut';
import { OrderListItem } from '../OrderListItem/OrderListItem';



const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    background-color: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const TotalStyled = styled.div`
    display: flex;
    & span:first-child {
        flex-grow: 1;
    }
    margin: 0 35px 30px;
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

export const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem/>
                    <OrderListItem/>
                    <OrderListItem/>
                </OrderList>
            </OrderContent>
            <TotalStyled>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>850 Р</TotalPrice>
            </TotalStyled>
            <ButtonCheckOut>Оформить</ButtonCheckOut>  
        </OrderStyled>
    )
};
