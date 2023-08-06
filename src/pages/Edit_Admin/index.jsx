import { Container, TextArea, FoodImg, SelectWrapper, Ingredients, IngredientsWrapper } from './styles';

import { AiOutlineArrowLeft, AiOutlineUpload } from "react-icons/ai";
import logoAdmin from "../../assets/Logo_admin.svg";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { IngredientsEdit } from '../../components/IngredientsEdit';
import { Footer } from '../../components/Footer';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Edit_Admin() {

    const params = useParams();
    const item_id = params.id;

    const [item, setItem] = useState({});
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    
    const [newImg, setNewImg] = useState(null);
    const [currentImg, setCurrentImg] = useState("");
    
    const [ingredients, setIngredients] = useState("");
    const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    };

    async function itemInfo(item_id) {
        try {
            const response = await api.get(`/items/details/${item_id}`);
            setItem(response.data);

            if(response.data.ingredients) {
                setIngredients(response.data.ingredients.map((ingredient) => ingredient.name));
            } 

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível buscar dados antigos do item.")
            }
        };
    };

    function handleImgChange(event) {
        const file = event.target.files[0];

        setLabelText(file.name);
        setNewImg(file);
    };

    function handleAddIngredient() {
        if(ingredients.includes(newIngredient)) {
            return alert("O ingrediente citado já está definido.");
        };

        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("");
    };

    function handleDeleteIngredient(deletedIngredient) {
        setIngredients(prevState => prevState.filter(ingredient => deletedIngredient !== ingredient))
    };

    async function handleUpdate() {
        try {
            const response = await api.put(`items/update/${item_id}`, {title, price, category, description, ingredients});
            
            if(newImg) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("image", newImg);
                const imgUpload = await api.patch(`items/img/${item_id}`, fileUploadForm);
            }

            alert("Item atualizado!")
            handleBack();
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o item.")
            }
        };
    };


    async function handleDelete() {
        const deleteItem = confirm("Deseja deletar o item?");

        if(deleteItem) {
            try {
                const response = await api.delete(`/items/delete/${item_id}`);
                alert("Item deletado.")
                handleBack();
            } catch(error) {
                if(error.response) {
                    alert(error.response.data.message)
                }
            };
        };
    };

    useEffect(() => {
        itemInfo(item_id);
    }, [item_id]);

    useEffect(() => {
        if(Object.keys(item) != 0){
            setTitle(item.title);
            setPrice(item.price);
            setCategory(item.category);
            setDescription(item.description);
            setCurrentImg(String(item.image).slice(21));
    
            setIngredients(Array.isArray(item.ingredients) ? item.ingredients.map(ingredient => ingredient.name) : [])
        }
    }, [item])

    return (
        <Container>
            <Header Admin>
                <img className='logo' src={logoAdmin} alt="Brand image"/>
            </Header>

            <main>
                <TextButton title="voltar" icon={AiOutlineArrowLeft} onClick={handleBack}/>

                <Section title="Editar Item">

                <form>
                        <div className="img-wrapper">
                            <span>Imagem do item</span>
                            <FoodImg htmlFor='img' >
                                <label>
                                    <AiOutlineUpload/>
                                    {currentImg}
                                    <input
                                        id='img'
                                        type='file'
                                        onChange={e => handleImgChange(e)}
                                    />
                                </label>
                            </FoodImg>
                        </div>

                        <div className="input-name">
                            <label htmlFor="name" >Nome</label>
                            <Input  
                                value={title}
                                id="name"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="input-price">
                            <label htmlFor="price" >Preço</label>
                            <Input 
                                value={price} 
                                id="price" label
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>

                        <SelectWrapper>
                            <label htmlFor="select">Categoria</label>

                            <select id="select" onChange={e => setCategory(e.target.value)}>
                                <option value="Refeições">Refeições</option>
                                <option value="Sobremesas">Sobremesas</option>
                                <option value="Bebidas">Bebidas</option>
                                <option value="Acompanhamentos">Acompanhamentos</option>
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
                                value={item.description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        
                        <div className="button-wrapper">
                            <Button title="Excluir Item" RedIconButton onClick={handleDelete}/>
                            <Button title="Salvar Alterações" onClick={handleUpdate}/>
                        </div>
                    </form>
                
                </Section>

            </main>

            <Footer/>
        </Container>
    )
}