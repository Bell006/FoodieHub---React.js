import { Container } from "../Header/styles";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import logoAdmin from "../../assets/Logo_admin.svg";

import { Menu } from '../Menu';

export function Header({Admin}) {
    return(
        <Container Admin={Admin}>

            { Admin ? <Menu Admin/>  : <Menu/> }

            { Admin ?  <img src={logoAdmin} alt="Brand logo" /> : <img src={logo} alt="Brand logo" /> }

            {
                !Admin &&
                <button>
                    <FiShoppingBag/>
                </button> 
            }
            
        </Container>
    );
}