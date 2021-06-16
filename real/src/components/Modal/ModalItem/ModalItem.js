import React from 'react'
import styled from 'styled-components';
import { ButtonCheckOut } from '../../Style/ButtonCheckOut/ButtonCheckOut';
import { CountItem } from '../CountItem/CountItem'
import { useCount } from '../../Hooks/UseCount/useCount'
import { totalPriceItems } from '../../Functions/secondaryFunction'
import { formatCurrency } from '../../Functions/secondaryFunction'
import { Toppings } from '../../Modal/Toppings/Toppings'
import { Choices } from '../../Modal/Choices/Choices'
import { useToppings } from '../../Hooks/UseTopping/useTopping'
import { useChoices } from '../../Hooks/UseChoices/useChoices'


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 500px;
    height: 600px;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`;

const Contenet = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 250px);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    padding: 30px;
`;

const OpenName = styled.div`
    color: black;
    font-family: 'Pacifico', cursive;
`;
const OpenPrice = styled.div`
    color: black;
    font-family: 'Pacifico', cursive;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;





export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
    const counter = useCount();
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem)

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null);
    }


    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                    <Contenet>
                        <Wrapper>
                            <OpenName>{openItem.name}</OpenName>
                            <OpenPrice>{openItem.price}₽</OpenPrice>
                        </Wrapper>
                        <CountItem {...counter}/>
                        {openItem.toppings && <Toppings {...toppings}/>}
                        {openItem.choices && <Choices {...choices} openItem={openItem} />}
                        <TotalPriceItem>
                            <span>Цена: </span>
                            <span>{formatCurrency(totalPriceItems(order))}</span>
                        </TotalPriceItem>
                        <ButtonCheckOut 
                            onClick={addToOrder}
                            disabled={order.choices && !order.choice}
                        >Добавить</ButtonCheckOut>
                    </Contenet>
            </Modal>
        </Overlay>
    )
}
    

