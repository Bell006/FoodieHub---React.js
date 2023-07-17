import { Container } from "./styles";

import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineClose } from 'react-icons/md';

export function IngredientsEdit({isNew, value, onClick, onChange, ...rest}) {

    return(
        <Container isNew={isNew}>
            <input
                type="text" 
                readOnly={!isNew} 
                value={value}
                onChange={onChange} 
                {...rest}
            />

            <button 
                onClick={onClick} 
                className={ isNew ? 'button-add' : 'button-delete'}
                type="button"
            >
                { isNew ? <AiOutlinePlus/> : <MdOutlineClose/> }
            </button>
        </Container>
    );
}