import React from 'react'
import styled from 'styled-components';
import { ButtonCheckOut } from '../ButtonCheckOut/ButtonCheckOut';


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
                    <Contenet>
                        <Wrapper>
                            <OpenName>{openItem.name}</OpenName>
                            <OpenPrice>{openItem.price}₽</OpenPrice>
                        </Wrapper>
                        <ButtonCheckOut>Добавить</ButtonCheckOut>
                    </Contenet>
            </Modal>
        </Overlay>
    )
}
    

