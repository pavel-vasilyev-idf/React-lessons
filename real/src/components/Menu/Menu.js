import React from 'react'
import styled from 'styled-components';
import dbMenu from '../DBMenu'
import { ListItem } from './ListItem/ListItem'
import { Banner } from './Banner/Banner'


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;


const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({setOpenItem}) => {
    return (
        <MenuStyled>
            <Banner/>
            <SectionMenu>
                <h2>Бургеры</h2>
                <ListItem 
                    itemList={dbMenu.burger}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
            <SectionMenu>
                <h2>Закуски и напитки</h2>
                <ListItem 
                    itemList={dbMenu.other}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
        </MenuStyled>
    )
}