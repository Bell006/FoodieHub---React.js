import { Container, MenuBar } from "./styles";
import { MdClose, MdSearch, MdLogout, MdAddCircle } from 'react-icons/md';
import { GrConfigure } from 'react-icons/gr';
import { RxCookie } from 'react-icons/rx';

import { Input } from '../Input';
import { Section } from '../Section';
import { useAuth } from '../../hooks/auth';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';

export function Menu({ Admin, children,...rest}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const { signOut } = useAuth();

    const navigate = useNavigate();

    function handleSignOut() {
      signOut();
      navigate("/");
    };
    
    return(
        <Container Admin={Admin}>
            <button onClick={handleButtonClick}>
                {isOpen ? <MdClose /> : <RxCookie />}
            </button>

            {isOpen && ReactDOM.createPortal(
                <MenuBar  className={isOpen ? 'open' : 'closed'}>
                    
                    <Section title="Menu"/>

                    <main>
                        <ul>
                            <li>
                                <GrConfigure/>
                                Configurações
                            </li>

                            {
                                Admin &&
                                <li onClick={() => navigate("/new")}>
                                <MdAddCircle/>
                                Novo Item
                                </li>
                            }

                            <li onClick={handleSignOut}>
                                <MdLogout/>
                                Sair
                            </li>
                        </ul>

                    </main>

                </MenuBar>,
                document.body
            )};
        </Container>
    );
};