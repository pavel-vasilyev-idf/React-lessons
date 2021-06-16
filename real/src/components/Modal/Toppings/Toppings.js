import React from 'react'
import styled from 'styled-components';

const ToppingWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
`;
const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
`;
const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;


export function Toppings({ toppings, checkToppings }) {
    return (
        <>
        <h3>Добавки</h3>
        <ToppingWrap>
            {toppings.map( (item, index) => (
              <ToppingLabel key={index}>
              <ToppingCheckbox 
                type="checkbox" 
                checked={item.checked}
                onChange={() => checkToppings(index)}
                />
                  {item.name}
          </ToppingLabel> 
            ))}
        </ToppingWrap>
        </>
    )
}