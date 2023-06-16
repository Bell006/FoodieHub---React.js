import { Container, Content ,Outdoor } from './styles';
import food from "../../assets/image 2.png";
import macarons from "../../assets/macarons.png";


import logo from "../../assets/brand_mobile.svg";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

export function Home() {
    const item1 = {
        img: food,
        title: "Salada Ravanello",
        price: "R$49,99",
    }

    const item2 = {
        img: food,
        title: "Spaguetti Gambe",
        price: "R$49,99",
    }
    const item3 = {
        img: food,
        title: "Prugna Pie",
        price: "R$49,99",
    }
    const item4 = {
        img: food,
        title: "Peachy pastrie",
        price: "R$49,99",
    }
    const items = [
        item1,
        item2,
        item3,
        item4
    ];
    return (
        <Container>
            <Header/>

            <Content>
                <Outdoor>
                    <div id='img'>
                        <img src={macarons} alt="Falling macarons" />
                    </div>
                    <aside>
                        <h1>Sabores Inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </aside>
                </Outdoor>

                <Section title="Refeições">
                    <Slider items={items}/>
                </Section> 
                
                <Section title="Pratos Principais">
                    <Slider items={items}/>
                </Section>

                <Section title="Sobremesas">
                    <Slider items={items}/>
                </Section>  

            </Content>

            <Footer/>
        </Container>
    )
}