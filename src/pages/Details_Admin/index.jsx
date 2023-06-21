import { Container, Content, MealImg, Tags, Order } from './styles';
import food from "../../assets/FoodTestHD.png";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { GoPencil } from 'react-icons/go';

import { Amount } from '../../components/Amount';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextButton } from '../../components/TextButton';
import { Tag } from '../../components/Tag';

const tags = ["alface", "cebola", "pão naan", "pepino", "rabanete", "mostarda e mel"];

export function Details_Admin() {

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
                        <Button icon={GoPencil} title="Editar" RedIconButton/>
                    </Order>

                </section>

            </Content>
            


            <Footer/>
        </Container>
    )
}