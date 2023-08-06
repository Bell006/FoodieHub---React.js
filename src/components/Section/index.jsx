import { Container } from "./styles";

export function Section({title, children}) {
    return(
        <Container>
            <header>
                <h2>{title}</h2>
                <div id="line"/>
            </header>

            <main>
                {children}
            </main>
        </Container>
    );
};