import { Container } from "./styles";

export function Input({value, onChange, placeholder, type, icon: Icon, ...rest}) {
    
    return(
        <Container>
            {Icon &&  <Icon size={20} />}
            <input 
                type={type}  
                placeholder={placeholder} 
                onChange={onChange} 
                value={value} 
                {...rest}
            />
        </Container>
    );
}