import { Container, Content ,Outdoor } from './styles';
import macarons from "../../assets/macarons.png";
import {  MdSearch } from 'react-icons/md';

import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';

import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Home() {

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState("");

    const [search, setSearch] = useState("");

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
            const searchBar = await api.get(`/items/index?&title=${search}`);
            setItems(searchBar.data);
        }

        fetchItems();
    }, [search])
    

    return (
        <Container>
            <Header>
                <Input 
                    icon={MdSearch} 
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={e => setSearch(e.target.value)}
                />
            </Header>

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
                        categories.map((category, index) => {
                            const itemsInCategory = items.filter(item => item.category === category);

                            if(itemsInCategory.length > 0) {
                                return(
                                    <Section title={category} key={index}>
                                        <Slider items={items.filter(item => item.category === category)}/>
                                    </Section>
                                )
                            }
                        })
                    ) : (
                        <div className="noItems">
                            <h1>Não encontramos nenhum produto :(</h1>
                        </div>
                    )
                }    

            </Content>

            <Footer/>
        </Container>
    )
}