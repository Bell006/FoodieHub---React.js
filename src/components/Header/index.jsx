import { Container, DesktopHeader, MobileHeader } from "../Header/styles";

import { FiShoppingBag } from "react-icons/fi";
import { GrConfigure } from 'react-icons/gr';
import { BiExit } from "react-icons/bi";
import { MdAddCircle, MdOutlineShoppingBasket } from 'react-icons/md';

import logo from "../../assets/logo.svg";
import iconMobile from "../../assets/favicon.svg";
import logoAdmin from "../../assets/Logo_admin.svg"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Menu } from '../Menu';
import { Input } from "../Input";
import { Button } from "../Button";

import { useAuth } from "../../hooks/auth";

export function Header({Admin, children, SearchBarOff}) {
    const [isMobile, setIsMobile] = useState(false);

    const { signOut } = useAuth();

    const navigate = useNavigate();

    function handleSignOut() {
      const exit = confirm("Deseja sair?");
      if(exit) {
        signOut();
        navigate("/");
      };
    };

    function handleHome() {
      navigate("/");
    };


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
      <Container Admin={Admin} SearchBarOff={SearchBarOff}>
        { isMobile ? 
            (<MobileHeader>
              {Admin ? <Menu Admin/> :  <Menu/>} 

              {children}

              { Admin ?  
                <img src={iconMobile} alt="Brand logo" onClick={handleHome}/> 
                : 
                <button><FiShoppingBag/></button>
              }
            </MobileHeader>) 
          : 
          <DesktopHeader>
              { Admin ?  
                <img src={logoAdmin} alt="Brand admin logo" onClick={handleHome}/> 
                : 
                <img src={logo} alt="Brand logo" onClick={handleHome}/> 
              }

              {children}

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