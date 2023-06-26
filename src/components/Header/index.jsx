import { Container, DesktopHeader } from "../Header/styles";

import { FiShoppingBag } from "react-icons/fi";
import { GrConfigure } from 'react-icons/gr';
import { BiExit } from "react-icons/bi";
import { MdAddCircle, MdSearch, MdOutlineShoppingBasket } from 'react-icons/md';

import logo from "../../assets/logo.svg";
import logoAdmin from "../../assets/Logo_admin.svg";

import { useEffect, useState } from "react";

import { Menu } from '../Menu';
import { Input } from "../Input";
import { Button } from "../Button";

export function Header({Admin}) {
    const [isMobile, setIsMobile] = useState(false);








      
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 650);
      };
  
      handleResize(); 
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    return(
        <Container Admin={Admin}>

            {
              isMobile ? (
                <>
                    { Admin ? <Menu Admin/>  : <Menu/> }
                    { Admin ?  <img src={logoAdmin} alt="Brand admin logo" /> : <img src={logo} alt="Brand logo" /> }
                    { !Admin ?   <button> <FiShoppingBag/></button> : ""  }
                </>
                ) 
                : 
                <DesktopHeader>
                    { Admin ?  <img src={logoAdmin} alt="Brand admin logo" /> : <img src={logo} alt="Brand logo" /> }

                    <Input icon={MdSearch} placeholder="Busque por pratos ou ingredientes"/>

                    <Button title="Incluir" RedIconButton icon={MdAddCircle}/>

                    { Admin ?  <Button title="Novo" RedIconButton icon={MdAddCircle}/> : <Button title="Pedidos" RedIconButton icon={MdOutlineShoppingBasket}/> }
                    
                    <div className="sideButtons">
                      <button id="configs"> 
                          <GrConfigure/>
                      </button>

                      <button id="exit"> 
                          <BiExit/>
                      </button>
                    </div>
                </DesktopHeader>
            }
            
        </Container>
    );
}