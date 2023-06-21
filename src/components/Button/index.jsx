import { Container } from "../Button/styles";

export function Button({title, placeholder, icon: Icon, RedIconButton, ...rest}) {
    return(
        <Container typeof="button" {...rest} placeholder={placeholder} RedIconButton={RedIconButton}>
            {Icon && (
                <div className="icon-container">
                    <Icon size={15} />
                </div>
            )}
            { title }
        </Container>
    );
}