import { Container, DesktopHeader } from "../Header/styles";

import { FiShoppingBag } from "react-icons/fi";
import { GrConfigure } from 'react-icons/gr';
import { BiExit } from "react-icons/bi";
import { MdAddCircle, MdSearch, MdOutlineShoppingBasket } from 'react-icons/md';

import logo from "../../assets/logo.svg";
import logoAdmin from "../../assets/Logo_admin.svg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Menu } from '../Menu';
import { Input } from "../Input";
import { Button } from "../Button";

import { useAuth } from "../../hooks/auth";

export function Header({Admin}) {
    const [isMobile, setIsMobile] = useState(false);

    const { signOut } = useAuth();

    const navigate = useNavigate();

    function handleSignOut() {
      const exit = confirm("Deseja sair?");
      if(exit) {
        signOut();
        navigate("/");
      }
    }

    function handleHome() {
      navigate("/")
    }


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

        { isMobile ? 
          (<>
            { Admin ? <Menu Admin/>  : <Menu/> }
            { Admin ?  
              <img src={logoAdmin} alt="Brand admin logo" onClick={handleHome}/> : 
              <img src={logo} alt="Brand logo" onClick={handleHome}/> 
            }
            { !Admin ?   <button> <FiShoppingBag/></button> : ""  }
          </>) 
          : 
          <DesktopHeader>
              { Admin ?  
                <img src={logoAdmin} alt="Brand admin logo" onClick={handleHome}/> : 
                <img src={logo} alt="Brand logo" onClick={handleHome}/> 
              }

              <Input icon={MdSearch} placeholder="Busque por pratos ou ingredientes"/>

              <Button title="Incluir" RedIconButton icon={MdAddCircle}/>

              { Admin ?  
                <Button 
                  title="Novo" 
                  RedIconButton 
                  icon={MdAddCircle} 
                  onClick={() => navigate("/new")}
                /> 
                : 
                <Button 
                  title="Pedidos" 
                  RedIconButton 
                  icon={MdOutlineShoppingBasket}
                /> 
              }
              
              <div className="sideButtons">
                <button id="configs"> 
                    <GrConfigure/>
                </button>

                <button id="exit" onClick={handleSignOut}> 
                    <BiExit/>
                </button>
              </div>
          </DesktopHeader>
        }
            
      </Container>
    );
}