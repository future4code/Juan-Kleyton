import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import Header from '../components/Header';
import Line from '../components/Line';
import Trip from '../components/ListItem';
import TripsListContainer from '../components/MainContainer';
import TripsListPageContainer from '../components/PageContainer';
import TripsRegistered from '../components/ItemsRegistered';
import useChangeTitle from '../hooks/useChangeTitle';
import { usePrivatePage } from '../hooks/usePrivatePage';
import axios from 'axios';
import { baseUrlAPI } from '../utils/links';
import styled from 'styled-components';


const ButtonDetails = styled(Button)`
    background-color: 
    width: 70%;
    justify-self: center;
    border: 1px solid 
    border-radius: 5px;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 100%;
        font-size: 0.8em;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        width: 80%;
    }
`

const TripDescription = styled.div`
    width: 100%;
    height: 100%;

    p {
        font-size: 0.7em;
    }
`

const PlanetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const TripsList = () => {
    useChangeTitle("Lista de viagens");
    usePrivatePage();

    const [ trips, setTrips ] = useState([]);
    
    useEffect(() => {
        axios
            .get(`${baseUrlAPI}/trips`)
            .then( response => {
                setTrips(response.data.trips);
            })
            .catch(() => alert("Erro na obtenção de dados"));
    })

    let history = useHistory();
    const goToTripDetails = (id) => history.push(`/admin/trips/${id}`);

    const tripsList = trips.map( trip => {
        return (
            <Trip key={trip.id}>
                <TripDescription>
                    <h4>{trip.name}</h4>
                    <p>{trip.description}</p>
                </TripDescription>
                <PlanetContainer>
                    <p>{trip.planet}</p>
                </PlanetContainer>
                <p>{`${trip.durationInDays} ${trip.durationInDays > 1 ? 'dias' : 'dia'}`}</p>
                <ButtonDetails onClick={() => goToTripDetails(trip.id)}>Detalhes</ButtonDetails>
            </Trip>
        )
    })

    return (
        <TripsListPageContainer>
            <Header logo={true} />
            <TripsListContainer>
                <ContentContainer>
                    <ContentHeader>
                        <h1>Próximas viagens:</h1>
                    </ContentHeader>
                    <TripsRegistered>
                        <Trip>
                            <h3>Viagem:</h3>
                            <h3>Local:</h3>
                            <h3>Duração:</h3>
                        </Trip>
                        <Line />
                        {tripsList}
                    </TripsRegistered>
                </ContentContainer>
            </TripsListContainer>

        </TripsListPageContainer>
    )
}

export default TripsList;