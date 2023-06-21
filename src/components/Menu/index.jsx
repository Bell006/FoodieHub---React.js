import { Container, MenuBar } from "./styles";
import { MdClose, MdSearch, MdLogout, MdAddCircle } from 'react-icons/md';
import {GrConfigure} from 'react-icons/gr';
import { RxCookie } from 'react-icons/rx';

import { Input } from '../Input';
import { Section } from '../Section'


import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

export function Menu({ Admin, ...rest}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };
    
    return(
        <Container Admin={Admin}>
            <button onClick={handleButtonClick}>
                {isOpen ? <MdClose /> : <RxCookie />}
            </button>

            {isOpen && ReactDOM.createPortal(
                <MenuBar  className={isOpen ? 'open' : 'closed'}>
                    
                    <Section title="Menu"/>
                    
                    <header>

                        <p>Pesquisar refeições:</p>
                        <p>(estabelecimento, ingredientes...)</p>
                        <Input placeholder="Pesquisar" icon={MdSearch} type="text"/>

                    </header>

                    <main>
                

                        <ul>
                            <li>
                                <GrConfigure/>
                                Configurações
                            </li>

                            {
                                Admin &&
                                <li>
                                <MdAddCircle/>
                                Novo Item
                                </li>
                            }

                            <li>
                                <MdLogout/>
                                Sair
                            </li>
                        </ul>

                    </main>

                </MenuBar>,
                document.body
            )}
        </Container>
    );
};