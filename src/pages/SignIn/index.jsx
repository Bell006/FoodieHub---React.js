import { Container, Logo } from './styles';

import logo from "../../assets/brand_mobile.svg";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

export function SignIn() {
    return (
        <Container>
            <main>
                <Logo>
                    <img src={logo} alt="Brand image"/>
                </Logo>

                <section>
                    <Input icon={AiOutlineMail} type="text" placeholder="usuario@email.com" />
                    <Input icon={AiOutlineLock} type="password" placeholder="senha"/>

                    <Button title="Entrar" />
                </section>

                <aside>
                    <p>Não possui uma conta?</p>
                    <a href="#">Criar conta</a>
                </aside>
            </main>
        </Container>
    )
}