import { Container } from "./styles";
import logo from "../../assets/brand_grey.svg";

export function Footer() {
    return(
        <Container>
            <img src={logo} alt="Brand image" />
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    );
}