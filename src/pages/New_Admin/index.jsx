import { Container, TextArea, FoodImg, SelectWrapper, Ingredients, IngredientsWrapper } from './styles';

import { AiOutlineArrowLeft, AiOutlineUpload } from "react-icons/ai";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { IngredientsEdit } from '../../components/IngredientsEdit';
import { Footer } from '../../components/Footer';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';


export function New_Admin() {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const [labelText, setLabelText] = useState(null);
    const [itemImg, setItemImg] = useState(null);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();

    console.log([title, price, description, category, itemImg, ingredients]);

    function handleAddIngredient() {
        if(!newIngredient) {
            return alert("Nomeie um ingrediente antes de adiciona-lo.")
        } else if(ingredients.includes(newIngredient)) {
            return alert("O ingrediente mencionado já foi listado.")
        }
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleDeleteIngredient(deletedIngredient) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deletedIngredient));
    }

    function handleImgChange(event) {
        const file = event.target.files[0];
        setLabelText(file ? file.name : null);
        setItemImg(file);
    }

    async function handleAddItem() {

        try {
            const response = await api.post("items", { title, description, price, ingredients, category })
            const item_id = response.data;

            const fileUploadForm = new FormData();
            fileUploadForm.append("image", itemImg);
            
            const imgUpload = await api.patch(`items/img/${item_id}`, fileUploadForm);
            
            alert("Item cadastrado com sucesso!");
            navigate(-1);
        } catch(error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar o item.");
            }
        }
    }


    return (
        <Container>
            <Header Admin/>

            <main>
                <TextButton title="voltar" icon={AiOutlineArrowLeft}/>

                <Section title="Novo Item">

                    <form>
                        <div className="img-wrapper">
                            <span>Imagem do item</span>
                            <FoodImg htmlFor='img' >
                                <label>
                                    <AiOutlineUpload/>
                                    {labelText ? labelText : 'Selecione uma imagem'}
                                    <input
                                        id='img'
                                        type='file'
                                        onChange={(e) => handleImgChange(e)}
                                    />
                                </label>
                            </FoodImg>
                        </div>

                        <div className="input-name">
                            <label htmlFor="name" >Nome</label>
                            <Input 
                                type="text" 
                                placeholder="Salada Ceasar" 
                                id="name"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="input-price">
                            <label htmlFor="price" >Preço</label>
                            <Input 
                                type="number" 
                                placeholder="R$40,00" 
                                id="price" 
                                label
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>

                        <SelectWrapper>
                            <label htmlFor="select">Categoria</label>

                            <select id="select" onChange={e => setCategory(e.target.value)}>
                                <option value="Refeição">Refeição</option>
                                <option value="Sobremesa">Sobremesa</option>
                                <option value="Bebida">Bebida</option>
                                <option value="Acompanhamento">Acompanhamento</option>
                            </select>
                        </SelectWrapper>

                        <Ingredients>
                            <label htmlFor="tags">Ingredientes</label>

                            <IngredientsWrapper>
                                <IngredientsEdit 
                                    isNew 
                                    placeholder="Adicionar" 
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                />

                                {
                                    ingredients &&
                                    ingredients.map((ingredient, index) => (
                                        <IngredientsEdit 
                                            value={ingredient} 
                                            key={String(index)}
                                            onClick={() => handleDeleteIngredient(ingredient)}
                                        /> 
                                    ))
                                }
                            </IngredientsWrapper>
                        </Ingredients>

                        <div className="textArea-wrapper">
                            <label htmlFor="description" >Descrição</label>
                            <TextArea 
                                id='description' 
                                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        
                        <Button title="Salvar" onClick={handleAddItem}/>
                    </form>
                
                </Section>

            </main>

            <Footer/>
        </Container>
    )
}