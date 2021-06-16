import { useState } from 'react';

export function useChoices() {
    const [choice, setChoice] = useState();

    function changeChoises(e) {
        setChoice(e.target.value);
    }
    
    return {choice, changeChoises}
}