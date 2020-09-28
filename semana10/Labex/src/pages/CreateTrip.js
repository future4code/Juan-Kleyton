import React from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import ButtonLoginContainer from '../components/ButtonContainer';
import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import CreateTripPageContainer from '../components/PageContainer';
import CreateTripContainer from '../components/MainContainer';
import FormContainer from '../components/FormContainer';
import Header from '../components/Header';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import { usePrivatePage } from '../hooks/usePrivatePage';
import axios from 'axios';
import { baseUrlAPI } from '../utils/links';
import styled from 'styled-components';

const Select = styled.select`
    width: 80%;
    height: 40%;
    border: 1px solid
    border-radius: 5px;
`

const CreateTrip = () => {
    useChangeTitle("Criar viagem");
    usePrivatePage();
    
    const [tripName, onChangeTripName] = useInputValue("");
    const [planet, onChangePlanet] = useInputValue("Mercúrio");
    const [date, onChangeDate] = useInputValue("");
    const [description, onChangeDescription] = useInputValue("");
    const [duration, onChangeDuration] = useInputValue("");

    let history = useHistory();

    const saveTrip = async (event) => {
        event.preventDefault();

        const body = {
            name: tripName,
            planet,
            date,
            description,
            durationInDays: duration
        }

        try {
            await axios.post(`${baseUrlAPI}/trips`, body, {
                headers: {
                    auth: sessionStorage.getItem("token")
                }
            });

            history.goBack();
            alert("Viagem criada com sucesso!");
        } catch(error) {
            alert("Erro na criação da viagem.")
        }
    }

    const planets = ["Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"].map( option => {
        return <option value={option}>{option}</option>
    })

    return (
        <CreateTripPageContainer>
            <Header logo={true} />
            <CreateTripContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h3>Criar viagem</h3>
                    </ContentHeader>
                    <FormContainer onSubmit={saveTrip}>
                        <InputContainer>
                            <label forHtml={"trip-name"}>Nome da viagem:</label>
                            <Input id={"trip-name"}
                                type={"text"}
                                value={tripName}
                                pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú ]{5,}"}
                                onChange={onChangeTripName}
                                required={true}
                            />
                        </InputContainer>
                        <InputContainer>
                            <label forHtml={"planet"}>Planeta:</label>
                            <Select
                                id={"planet"}
                                value={planet}
                                onChange={onChangePlanet}
                            >
                                {planets}
                            </Select>
                        </InputContainer>
                        <InputContainer>
                            <label forHtml={"date"}>Data:</label>
                            <Input
                                id={"date"}
                                type={"date"}
                                value={date}
                                min={new Date().toISOString().split("T")[0]}
                                onChange={onChangeDate}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <label forHtml={"description"}>Descrição:</label>
                            <Input
                                id={"description"}
                                type={"text"}
                                value={description}
                                pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú0-9 ]{30,}"}
                                onChange={onChangeDescription}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <label forHtml={"duration"}>Duração:</label>
                            <Input
                                id={"duration"}
                                type={"number"}
                                value={duration}
                                min={50}
                                onChange={onChangeDuration}
                                required
                            />
                        </InputContainer>
                        <ButtonLoginContainer>
                            <Button type={"submit"}>CRIAR</Button>
                        </ButtonLoginContainer>
                    </FormContainer>
                </ContentContainer>
            </CreateTripContainer>
        </CreateTripPageContainer>
    )
}

export default CreateTrip;