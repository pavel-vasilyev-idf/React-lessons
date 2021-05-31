import React from 'react'
import styled from 'styled-components';


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
    height: 500px;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const PriceWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
`;

const OpenName = styled.div`
    color: black;
`;
const OpenPrice = styled.div`
    color: black;
`;

const OpenButton = styled.button`
    background: #299B01;
    width: 250px;
    height: 65px;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    display: block;
    margin: auto;
`;


export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if(!openItem) return null;
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <PriceWrapper>
                    <OpenName>{openItem.name}</OpenName>
                    <OpenPrice>{openItem.price}₽</OpenPrice>
                </PriceWrapper>
                <OpenButton>Добавить</OpenButton>
            </Modal>
        </Overlay>
    )
}
    

