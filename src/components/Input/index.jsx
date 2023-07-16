import { Container } from "./styles";

export function Input({onChange, placeholder, type, icon: Icon, ...rest}) {
    
    return(
        <Container>
            {Icon &&  <Icon size={20} />}
            <input type={type}  placeholder={placeholder} onChange={onChange}/>
        </Container>
    );
}