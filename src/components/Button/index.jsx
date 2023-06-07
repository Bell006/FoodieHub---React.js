import { Container } from "../Button/styles";

export function Button({title, placeholder, ...rest}) {
    return(
        <Container typeof="button" {...rest} placeholder={placeholder}>
            { title }
        </Container>
    );
}