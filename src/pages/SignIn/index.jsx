import { Container, Logo } from './styles';

import logo from "../../assets/brand_mobile.svg";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn, loading } = useAuth();

    function handleSignIn(e) {
        signIn({email, password})
    }

    return (
        <Container>
            <main>
                <Logo>
                    <img src={logo} alt="Brand image"/>
                </Logo>

                <section>
                    <Input 
                        icon={AiOutlineMail} 
                        type="text" 
                        placeholder="usuario@email.com" 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    
                    <Input 
                        icon={AiOutlineLock} 
                        type="password" 
                        placeholder="senha" 
                        onChange={e => setPassword(e.target.value)} 
                    />

                    {
                        loading ? <Button title="Entrar" loading/> : <Button title="Entrar" onClick={handleSignIn}/>
                    }
                    
                    
                </section>

                <aside>
                    <p>Não possui uma conta?</p>
                    <Link to="/register">Criar conta</Link>
                </aside>
            </main>
        </Container>
    )
}