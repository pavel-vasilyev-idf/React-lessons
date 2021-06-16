import React from 'react'
import styled from 'styled-components';


const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
`;
const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;
const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
`;

export function Choices({ openItem, choice, changeChoises }) {
    return (
            <>
            <h3>Выбирайте:</h3>
            <ChoiceWrap>
                {openItem.choices.map( (item, i) => (
                <ChoiceLabel key={i}>
                    <ChoiceRadio 
                        type="radio" 
                        name="choices"
                        checked={choice === item}
                        value={item}
                        onChange={changeChoises}
                        />
                    {item}
            </ChoiceLabel> 
                ))}
            </ChoiceWrap>
        </>
    )
}