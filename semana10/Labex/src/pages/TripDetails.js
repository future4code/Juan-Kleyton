import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import DescriptionContainer from '../components/DescriptionContainer';
import Details from '../components/Details';
import DurationContainer from '../components/SingleLineContainer';
import Header from '../components/Header';
import InfoContainer from '../components/InfoContainer';
import Line from '../components/Line';
import Trip from '../components/ContentContainer';
import TripDetailsContainer from '../components/MainContainer';
import TripDetailsPageContainer from '../components/PageContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import { usePrivatePage } from '../hooks/usePrivatePage';
import axios from 'axios';
import { baseUrlAPI } from '../utils/links';
import styled from 'styled-components';


const DescriptionText = styled.p`
    align-self: flex-start;
`

const ButtonCandidate = styled.button`
    background-color:
    width: 30%;
    height: 10%;
    justify-self: center;
    border: 1px solid 
    border-radius: 5px;
    font-weight: bold;
    color: 
    cursor: pointer;
    outline: none;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 50%;
        font-size: 1em;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 40%;
        font-size: 1em;
    }
`

const TripDetails = () => {
    useChangeTitle("Detalhes da viagem");
    usePrivatePage();
    
    const [ trip, setTrip ] = useState({});

    const pathParams = useParams();
    let history = useHistory();

    useEffect(() => {
        axios
            .get(`${baseUrlAPI}/trip/${pathParams.trip_id}`, {
                headers: {
                    auth: sessionStorage.getItem("token")
                }
            })
            .then( response => {
                setTrip(response.data.trip);
            })
    })

    const listCandidates = () => {
        if(trip) {
            history.push(`/admin/trips/${pathParams.trip_id}/candidates`);
        }
    }

    return (
        <TripDetailsPageContainer>
            <Header logo={true} />
            <TripDetailsContainer>
                <Trip>
                    <Details>
                        <InfoContainer>
                            <h3>{trip.name}</h3>
                            <p>{trip.planet}</p>
                            <DurationContainer>
                                <p><strong>Data:</strong> {trip.date}</p>
                                <p><strong>Duração:</strong> {trip.durationInDays} {trip.durationInDays > 1 ? "dias" : "dia"}</p>
                            </DurationContainer>
                        </InfoContainer>
                        <DescriptionContainer>
                            <Line />
                            <h4>Descrição:</h4>
                            <DescriptionText>{trip.description}</DescriptionText>
                        </DescriptionContainer>
                    </Details>
                    <ButtonCandidate onClick={listCandidates}>Ver Candidatos</ButtonCandidate>
                </Trip>
            </TripDetailsContainer>
        </TripDetailsPageContainer>
    )
}

export default TripDetails;