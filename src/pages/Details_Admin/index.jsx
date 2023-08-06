import { Container, Content, MealImg, Tags, Order } from './styles';
import food from "../../assets/FoodTestHD.png";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { GoPencil } from 'react-icons/go';
import logoAdmin from "../../assets/Logo_admin.svg";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextButton } from '../../components/TextButton';
import { Tag } from '../../components/Tag';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

export function Details_Admin() {

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    };

    const params = useParams();
    const item_id = params.id;

    const itemImgUrl = `${api.defaults.baseURL}/files`;

    const [item, setItem] = useState({});
    const [ingredients, setIngredients] = useState([]);

    async function itemInfo(item_id) {
        try {
            const response = await api.get(`/items/details/${item_id}`);
            setItem(response.data);

            if (response.data.ingredients) {
                setIngredients(response.data.ingredients.map((ingredient) => ingredient.name));
            }
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível buscar dados antigos do item.")
            }
        }
    };

    function handleEdit(item_id) {
        return navigate(`/edit/${item_id}`);
    };


    useEffect(() => {
        itemInfo(item_id);
    }, [item_id]);

    return (
        <Container>
            <Header Admin>
                <img className='logo' src={logoAdmin} alt="Brand image"/>
            </Header>
            <Content>
                <TextButton title="voltar" icon={AiOutlineArrowLeft} onClick={handleBack}/>

                <div className="image-wrapper">
                    <MealImg src={`${itemImgUrl}/${item.image}`}/>
                </div>
                
                <section>

                    <h1>{item.title}</h1>

                    <p>{item.description}</p>
                    
                    <Tags>
                        {   
                            ingredients &&                     
                            ingredients.map((ingredient, index) => <Tag title={ingredient} key={index}/>)
                        }
                    </Tags>

                    <Order>
                        <Button icon={GoPencil} title="Editar" RedIconButton onClick={e => handleEdit(item_id)}/>
                    </Order>

                </section>

            </Content>

            <Footer/>
        </Container>
    )
}