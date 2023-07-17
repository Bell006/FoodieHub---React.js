import { Container } from "../Button/styles";

export function Button({onClick, title, placeholder, icon: Icon, RedIconButton, loading = false, ...rest}) {
    return(
        <Container 
            type="button" 
            {...rest} 
            placeholder={placeholder} 
            RedIconButton={RedIconButton} 
            onClick={onClick}
            disabled= { loading } 
        >
            {Icon && (
                <div className="icon-container">
                    <Icon size={15} />
                </div>
            )}
            { loading ? "Carregando..." : title }
        </Container>
    );
}