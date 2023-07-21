import { Container, Content ,Outdoor } from './styles';
import food from "../../assets/image 2.png";
import macarons from "../../assets/macarons.png";

import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Home() {
    const item1 = {
        image: food,
        title: "Salada Ravanello",
        price: "R$49,99",
    }

    const item2 = {
        image: food,
        title: "Spaguetti Gambe",
        price: "R$49,99",
    }
    const item3 = {
        image: food,
        title: "Prugna Pie",
        price: "R$49,99",
    }
    const item4 = {
        image: food,
        title: "Peachy pastrie",
        price: "R$49,99",
    }

    const { user } = useAuth();
    const user_id = user.id;

    const [items, setItems] = useState([]);
    
    console.log(items)



    useEffect(() => {
        async function fetchItems() {
            const response = await api.get(`/items/index`);
            setItems(response.data);
        }

        fetchItems();
        
    }, [])
    

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