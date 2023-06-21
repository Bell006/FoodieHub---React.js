import { Container } from "./styles";

import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineClose } from 'react-icons/md';

export function IngredientsEdit({isNew, value, onClick, ...rest}) {
    return(
        <Container isNew={isNew}>
            <input
                type="text" 
                readOnly={!isNew} 
                value={value} 
                {...rest}
            />

            <button 
                onClick={onClick} 
                className={ isNew ? 'button-add' : 'button-delete'}
            >
                { isNew ? <AiOutlinePlus/> : <MdOutlineClose/> }
            </button>
        </Container>
    );
}