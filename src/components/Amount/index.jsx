import { MdOutlineRemove, MdOutlineAdd } from "react-icons/md";
import { Container } from "./styles";
import { useState } from "react";


export function Amount() {
    const [counter, setCounter] = useState("1");

    function handleAdd() {
        setCounter(prevCounter => Number(prevCounter) + 1);
    }

    function handleDecrease() {
        if(counter > 0) {
            setCounter(prevCounter => Number(prevCounter) - 1);
        }

        return
    }

    function formatCounterValue(value) {
        if (value > 0) {
            return value.toString().padStart(2, '0');
        } if (value === 0) {
            return 0;
        }
    }

    return(
    <Container>
        <button onClick={handleDecrease}> 
            <MdOutlineRemove/> 
        </button>
        <p>{formatCounterValue(counter)}</p>
        <button onClick={handleAdd}> 
            <MdOutlineAdd/> 
        </button>
    </Container>
    )
}