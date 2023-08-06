import { Container } from "./styles";

export function TextButton({title, placeholder, icon: Icon, ...rest}) {
    return(
        <Container typeof="button" {...rest} placeholder={placeholder}>
            {Icon &&  <Icon size={15} />}
            { title }
        </Container>
    );
};