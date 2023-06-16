import { Container } from "../Header/styles";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../../assets/logo.svg";

import { Menu } from '../Menu';

export function Header() {
    return(
        <Container>

            <Menu/>

            <img src={logo} alt="Brand logo" />

            <button>
                <FiShoppingBag/>
            </button>
            
        </Container>
    );
}