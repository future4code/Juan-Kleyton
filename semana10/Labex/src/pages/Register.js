import React from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import ButtonRegisterContainer from '../components/ButtonContainer';
import Content from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import FormContainer from '../components/FormContainer';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import Header from '../components/Header';
import RegisterContainer from '../components/MainContainer';
import RegisterPageContainer from '../components/PageContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import axios from 'axios';
import { baseUrlAPI } from '../utils/links';
import styled from 'styled-components';


const ContentContainer = styled(Content)`
    width: 30%;
    height: 80%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 70%;
        font-size: 0.8em;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 60%;
        font-size: 1.2em;
    }
`


const Register = () => {
    useChangeTitle("Cadastro");
    const [ email, onChangeEmail ] = useInputValue("");
    const [ password, onChangePassword ] = useInputValue("");
    const [ confirmPassword, onChangeConfirmPassword ] = useInputValue("");

    let history = useHistory();

    const register = async (event) => {
        event.preventDefault();
        
        if(password === confirmPassword) {
            const body = {
                email,
                password
            }

            console.log(body);

            try {
                await axios.post(`${baseUrlAPI}/signup`, body);
                alert("Você foi cadastrado com sucesso");
                history.replace("/login")
            } catch(error) {
                alert("Erro no cadastro");
            }
        } else {
            alert("As senhas digitadas não estão iguais")
        }
    }

    return (
        <RegisterPageContainer>
            <Header logo={true} center={true} />
            <RegisterContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h1>Cadastro</h1>    
                    </ContentHeader>
                    <FormContainer onSubmit={register}>
                        <InputContainer>
                            <label>Email:</label>
                            <Input type={"email"} value={email} onChange={onChangeEmail} />
                        </InputContainer>
                        <InputContainer>
                            <label>Senha:</label>
                            <Input type={"password"} value={password} onChange={onChangePassword} />
                        </InputContainer>
                        <InputContainer>
                            <label>Confirme sua senha:</label>
                            <Input type={"password"} value={confirmPassword} onChange={onChangeConfirmPassword} />
                        </InputContainer>
                        <ButtonRegisterContainer>
                            <Button type={"submit"}>CADASTRAR</Button>
                        </ButtonRegisterContainer>
                    </FormContainer>
                </ContentContainer>
            </RegisterContainer>
        </RegisterPageContainer>
    )
}

export default Register;