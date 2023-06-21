import { Container, TextArea, FoodImg, SelectWrapper, Ingredients, IngredientsWrapper } from './styles';

import { AiOutlineArrowLeft, AiOutlineUpload } from "react-icons/ai";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { IngredientsEdit } from '../../components/IngredientsEdit';
import { Footer } from '../../components/Footer';


export function Edit_Admin() {
    return (
        <Container>
            <Header Admin/>

            <main>
                <TextButton title="voltar" icon={AiOutlineArrowLeft}/>

                <Section title="Editar Item">

                    <form>
                        <FoodImg htmlFor='img' >
                            <label>
                                <AiOutlineUpload/>
                                Selecione uma imagem para alterá-la
                                <input
                                    id='img'
                                    type='file'
                                />
                            </label>
                        </FoodImg>

                        <div className="input-wrapper">
                            <label htmlFor="name" >Nome</label>
                            <Input type="text" placeholder="Salada Ceasar" id="name"/>

                            <label htmlFor="price" >Preço</label>
                            <Input type="number" placeholder="R$40,00" id="price"/>
                        </div>

                        <SelectWrapper>
                            <label htmlFor="select">Categoria</label>

                            <select id='select'>
                                <option value="opcao1">Refeição</option>
                                <option value="opcao2">Sobremesa</option>
                                <option value="opcao3">Bebidas</option>
                            </select>
                        </SelectWrapper>

                        <Ingredients>
                            <label htmlFor="tags">Ingredientes</label>

                            <IngredientsWrapper>
                                <IngredientsEdit isNew placeholder="Adicionar"/>
                                <IngredientsEdit value="Pão de batata"/>
                            </IngredientsWrapper>
                        </Ingredients>

                        <div className="textArea-wrapper">
                            <label htmlFor="description" >Descrição</label>
                            <TextArea id='description' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'/>
                        </div>

                        <div className="button-wrapper">
                            <Button title="Excluir Item" RedIconButton />
                            <Button title="Salvar Alterações" />
                        </div>
                        
                    </form>
                
                </Section>

            </main>

            <Footer/>
        </Container>
    )
}