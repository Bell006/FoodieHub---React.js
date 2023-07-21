import { Container, Content ,Outdoor } from './styles';
import macarons from "../../assets/macarons.png";

import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Home_Admin() {

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    function settingCategories() {
        const categoriesSet = new Set(categories);

        items.forEach(item => {
            categoriesSet.add(item.category);
        });

        setCategories(Array.from(categoriesSet));
    }

    
    useEffect(() => {
        settingCategories();
    }, [items]);

    useEffect(() => {
        async function fetchItems() {
            const response = await api.get(`/items/index`);
            setItems(response.data);
        }

        fetchItems();
        
    }, [])

    return (
        <Container>
            <Header Admin />

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
                {
                    items.length > 0 && categories.length > 0 ? (
                        categories.map((category, index) => (
                        <Section title={category} key={index}>
                            <Slider items={items.filter(item => item.category === category)} Admin />
                        </Section>
                        ))
                    ) : (
                        <div className="noItems">
                            <h1>Você ainda não possui itens cadastrados.</h1>
                        </div>
                    )
                }              
            </Content>

            <Footer/>
        </Container>
    )
}