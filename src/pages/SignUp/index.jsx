import { Container, Logo } from './styles';

import logo from "../../assets/brand_mobile.svg";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineArrowLeft } from "react-icons/ai";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

export function SignUp() {
    return (
        <Container>
            <main>
                <Logo>
                    <img src={logo} alt="Brand image"/>
                </Logo>

                <section>
                    <Input icon={AiOutlineUser} type="text" placeholder="Nome"/>
                    <Input icon={AiOutlineMail} type="text" placeholder="Email" />
                    <Input icon={AiOutlineLock} type="password" placeholder="Senha"/>

                    <Button title="Criar conta" />
                </section>

                <aside>
                    <a href="#" >
                        <AiOutlineArrowLeft/>
                        Voltar para tela de login
                    </a>
                </aside>
            </main>
        </Container>
    )
}