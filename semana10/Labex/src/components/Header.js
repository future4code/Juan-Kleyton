import React from 'react';
import { useHistory } from 'react-router';
import { logo } from '../utils/links';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    position: relative;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5%;
    height: 100%;
    position: absolute;
    z-index: 1;
    cursor: pointer;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 20%;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 20%;
    }
`

const Logo = styled.img`
    width: 100%;
    height: 100%;
`

const ButtonLoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
    height: 100%;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 85%;
    }
`
const Button = styled.button`
    background: none;
    width: 10%;
    height: 50%;
    border: none;
    border-radius: 10px;
    color:
    font-weight: bold;
    cursor: pointer;

    :hover {
        border: 1px solid 
    }

    :focus {
        outline: none;
    }
`

const Header = (props) => {
    let history = useHistory();

    const login = () => {
        history.push("/login")
    }

    const exit = () => {
        sessionStorage.removeItem("token");
       login();
    }

    const goToHomePage = () => history.push("/")

    return (
        <HeaderContainer className={props.className}>
            <LogoContainer onClick={goToHomePage}>
                {props.logo ? <Logo src={logo} /> : null}
            </LogoContainer>
            {props.center ? null : <ButtonLoginContainer>
                                        {props.login ? <Button onClick={login}>LOGIN</Button> : <Button onClick={exit}>SAIR</Button>}
                                    </ButtonLoginContainer>
            }
        </HeaderContainer>
    )
}

export default Header;