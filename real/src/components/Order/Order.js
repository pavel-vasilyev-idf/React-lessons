import React from 'react'
import styled from 'styled-components';
// import dbMenu from '../DBMenu'
import { ButtonCheckOut } from '../Style/ButtonCheckOut/ButtonCheckOut';
import { OrderListItem } from './OrderListItem/OrderListItem';



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

const EmptyList = styled.p`
    text-align: center;
`;


export const Order = ({ orders }) => {
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ? 
                    <OrderList>
                        {orders.map( order => <OrderListItem key={order.id} order={order}/>)}
                    </OrderList> : 
                    <EmptyList>Список заказов пуст</EmptyList>
                }
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
