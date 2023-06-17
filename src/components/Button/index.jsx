import { Container } from "../Button/styles";

export function Button({title, placeholder, icon: Icon, AddToCard, ...rest}) {
    return(
        <Container typeof="button" {...rest} placeholder={placeholder} AddToCard={AddToCard}>
            {Icon && (
                <div className="icon-container">
                    <Icon size={15} />
                </div>
            )}
            { title }
        </Container>
    );
}