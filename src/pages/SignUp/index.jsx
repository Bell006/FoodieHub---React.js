import { Container, Logo, Admin } from './styles';

import logo from "../../assets/brand_mobile.svg";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineArrowLeft } from "react-icons/ai";

import { Link, useNavigate } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { useState } from 'react';
import { api } from '../../services/api';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();

    function handleSignUp() {
        api.post("/users", {name, email, password, isAdmin})
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate(-1)
        }) .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar o cadastro.")
            };
        });
    };

    return (
        <Container>
            <main>
                <Logo>
                    <img src={logo} alt="Brand image"/>
                </Logo>

                <section>
                    <Input icon={AiOutlineUser} type="text" placeholder="Nome" onChange={e => setName(e.target.value)}/>
                    <Input icon={AiOutlineMail} type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <Input icon={AiOutlineLock} type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>

                    <Button title="Criar conta" onClick={handleSignUp}/>

                    <Admin>
                        <label class="form-control">
                            <input type="checkbox" name="checkbox" onChange={e => setIsAdmin(e.target.checked)}/>
                            Cadastrar como Administrador
                        </label>
                    </Admin>
                </section>

                <aside>
                    <Link to="/" >
                        <AiOutlineArrowLeft/>
                        Voltar para tela de login
                    </Link>
                </aside>
            </main>
        </Container>
    )
}