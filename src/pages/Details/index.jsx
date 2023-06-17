import { Container, Content, MealImg, Tags, Order } from './styles';
import food from "../../assets/FoodTestHD.png";


import logo from "../../assets/brand_mobile.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";

import { Amount } from '../../components/Amount';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextButton } from '../../components/TextButton';
import { Tag } from '../../components/Tag';

const tags = ["alface", "cebola", "pão naan", "pepino", "rabanete", "mostarda e mel"];

export function Details() {

    return (
        <Container>
            <Header/>
            <Content>
                <TextButton title="voltar" icon={AiOutlineArrowLeft}/>
                
                <section>
                    <MealImg src={food}/>

                    <h1>Salada Ravanello</h1>

                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                    
                    <Tags>
                        {                        
                            tags.map(tag => {
                                return(
                                    <Tag title={tag} key={tag}/>
                                )
                            })
                        }
                    </Tags>

                    <Order>
                        <Amount/>
                        <Button icon={BiMoney} title="Pedir - R$25,00" AddToCard/>
                    </Order>

                </section>

            </Content>
            


            <Footer/>
        </Container>
    )
}