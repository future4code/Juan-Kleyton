import React from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import ButtonLoginContainer from '../components/ButtonContainer';
import Content from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import FormContainer from '../components/FormContainer';
import Header from '../components/Header';
import Input from '../components/Input'
import InputContainer from '../components/InputContainer'
import LoginContainer from '../components/MainContainer';
import LoginPageContainer from '../components/PageContainer';
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

const Login = () => {
    useChangeTitle("Login");

    const [ email, onChangeEmail ] = useInputValue("");
    const [ password, onChangePassword ] = useInputValue("");

    let history = useHistory();

    const login = async () => {
        const body = {
            email,
            password
        }

        try {
            const response = await axios.post(`${baseUrlAPI}/login`, body);
            sessionStorage.setItem('token', response.data.token);
            history.replace("/admin");
        } catch(error) {
            alert("Email ou senha inexistentes")
            history.replace("/register")
        }
    } 

    return (
        <LoginPageContainer>
            <Header logo={true} center={true} />
            <LoginContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h1>LOGIN</h1>    
                    </ContentHeader>
                    <FormContainer>
                        <InputContainer>
                            <label>Email:</label>
                            <Input type={"email"} value={email} onChange={onChangeEmail} />
                        </InputContainer>
                        <InputContainer>
                            <label>Senha:</label>
                            <Input type={"password"} value={password} onChange={onChangePassword} />
                        </InputContainer>
                    </FormContainer>
                    <ButtonLoginContainer>
                        <Button onClick={login}>ENTRAR</Button>
                    </ButtonLoginContainer>
                </ContentContainer>
            </LoginContainer>
        </LoginPageContainer>
    )
}

export default Login;