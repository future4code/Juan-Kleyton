import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import Details from '../components/Details';
import DescriptionContainer from '../components/DescriptionContainer';
import DurationContainer from '../components/SingleLineContainer';
import Form from '../components/FormContainer';
import HeaderContainer from '../components/Header';
import InfoContainer from '../components/InfoContainer';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import PageContainer from '../components/PageContainer';
import Select from '../components/Select';
import SelectCountry from '../components/SelectCountry';
import SubmitCandidatureContainer from '../components/MainContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import useInputValue from '../hooks/useInputValue';
import axios from 'axios';
import { baseUrlAPI } from '../utils/links';
import styled from 'styled-components';

const Header = styled(HeaderContainer)`
    height: 7.5%;
`

const SubmitCandidaturePageContainer = styled(PageContainer)`
    height: 150vh;
`

const FormContainer = styled(Form)`
    justify-content: flex-start;
`

const InputContainerCandidature = styled(InputContainer)`
    height: 10%;
`

const TripInformations = styled(Details)`
    height: 20%;
`

const ButtonSubmitContainer = styled(ButtonContainer)`
    height: 15%;
`

const DescriptionText = styled.p`
    margin-top: 5%;
    align-self: flex-start;
`

const SubmitCandidature = () => {
    useChangeTitle("Enviar candidatura");

    const [candidateName, onChangeCandidateName] = useInputValue("");
    const [age, onChangeAge] = useInputValue("");
    const [candidateText, onChangeCandidateText] = useInputValue("");
    const [profession, onChangeProfession] = useInputValue("");
    const [country, onChangeCountry] = useInputValue("");
    const [trip, onChangeTrip] = useInputValue("");
    const [tripsList, setTripsList] = useState([]);

    let history = useHistory();

    useEffect(() => {
        axios
            .get(`${baseUrlAPI}/trips`)
            .then( response => {
                setTripsList(["-", ...response.data.trips]);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro na obtenção de dados")
            });
    }, [setTripsList]);

    const findTrip = () => {
        if(trip !== "") return tripsList.find(element => element.id === trip);
        else return null;
    }


    const tripChoosed = findTrip();
    const tripInfoContainer = <TripInformations>
                                  <InfoContainer>
                                        <h3>{tripChoosed && tripChoosed.name}</h3>
                                        <p>{tripChoosed && tripChoosed.planet}</p>
                                        <DurationContainer>
                                            <p><strong>Data:</strong> {tripChoosed && tripChoosed.date}</p>
                                            <p><strong>Duração:</strong> {tripChoosed && tripChoosed.durationInDays} {tripChoosed && tripChoosed.durationInDays > 1 ? "dias" : "dia"}</p>
                                        </DurationContainer>
                                    </InfoContainer>
                                    <DescriptionContainer>
                                        <DescriptionText>{tripChoosed && tripChoosed.description}</DescriptionText>
                                    </DescriptionContainer>
                                </TripInformations>

    const registerCandidature = async (event) => {
        event.preventDefault();

        if(trip) {
            const body = {
                name: candidateName,
                age,
                profession,
                country,
                applicationText: candidateText
            }

            try {
                await axios.post(`${baseUrlAPI}/trips/${trip}/apply`, body);
                alert("Sua candidatura foi registrada. Em breve você saberá o resultado.")
                history.goBack();
            } catch(error) {
                alert("Erro ao cadastrar candidatura");
            }
        }
    }

    const tripsOptions = tripsList.map( trip => {
        return <option value={trip.id}>{trip.name}</option>
    })


    return (
        <SubmitCandidaturePageContainer>
            <Header logo={true} center={true} />
            <SubmitCandidatureContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h3>Candidatura</h3>
                    </ContentHeader>
                    <FormContainer onSubmit={registerCandidature}>
                        <InputContainerCandidature>
                            <label forHtml={"candidate-name"}>Nome:</label>
                            <Input
                                id={"candidate-name"}
                                type={"text"}
                                value={candidateName}
                                pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú ]{3,}"}
                                onChange={onChangeCandidateName}
                                required
                            />
                        </InputContainerCandidature>
                        <InputContainerCandidature>
                            <label forHtml={"candidate-age"}>Idade:</label>
                            <Input
                                id={"candidate-age"}
                                type={"number"}
                                value={age}
                                min={18}
                                onChange={onChangeAge}
                                required
                            />
                        </InputContainerCandidature>
                        <InputContainerCandidature>
                            <label forHtml={"candidate-profession"}>Profissão:</label>
                            <Input
                                id={"candidate-profession"}
                                type={"text"}
                                value={profession}
                                pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú ]{10,}"}
                                onChange={onChangeProfession}
                                required
                            />
                        </InputContainerCandidature>
                        <InputContainerCandidature>
                            <label forHtml={"candidate-country"}>País:</label>
                            <SelectCountry
                                id={"candidate-country"} 
                                type={"text"}
                                value={country}
                                onChange={onChangeCountry}
                                required
                            />
                        </InputContainerCandidature>
                        <InputContainerCandidature>
                            <label forHtml={"trip-choosed"}>Viagem:</label>
                            <Select
                                id={"trip-choosed"}
                                value={trip}
                                onChange={onChangeTrip}
                                required
                            >
                                {tripsOptions}
                            </Select>
                        </InputContainerCandidature>
                        {tripInfoContainer}
                        <InputContainerCandidature>
                            <label forHtml={"candidate-text"}>Quais motivos para a LabeX aceitá-lo ?</label>
                            <Input
                                id={"candidate-text"} 
                                type={"text"}
                                value={candidateText}
                                pattern={"[A-Za-zÁÃÀÂÉÊÍÓÔÚáãàâéêíóôú0-9 ]{30,}"}
                                onChange={onChangeCandidateText}
                                required
                            />
                        </InputContainerCandidature>
                        <ButtonSubmitContainer>
                            <Button type={"submit"}>ENVIAR</Button>
                        </ButtonSubmitContainer>
                    </FormContainer>
                </ContentContainer>
            </SubmitCandidatureContainer>
        </SubmitCandidaturePageContainer>
    )
}

export default SubmitCandidature;