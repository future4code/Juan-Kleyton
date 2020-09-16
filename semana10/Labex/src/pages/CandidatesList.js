import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Button from '../components/Button';
import Candidate from '../components/ListItem';
import Candidates from '../components/ContentContainer';
import CandidatesHeader from '../components/ContentHeader';
import CandidatesListContainer from '../components/MainContainer';
import CandidatesListPageContainer from '../components/PageContainer';
import CandidatesRegistered from '../components/ItemsRegistered';
import Header from '../components/Header';
import useChangeTitle from '../hooks/useChangeTitle';
import { usePrivatePage } from '../hooks/usePrivatePage';
import axios from 'axios';
import { baseUrlAPI } from '../utils/links';
import styled from 'styled-components';


const ButtonDetails = styled(Button)`
    background-color:
    width: 60%;
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

const CandidatesList = () => {
    useChangeTitle("Lista de candidatos");
    usePrivatePage();

    const [ candidates, setCandidates ] = useState([]);

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
                setCandidates(response.data.trip.candidates);
            })
            .catch( error => {
                alert("Erro na obtenção dos dados");
            })
    })

    const goToCandidateDetails = (id) => history.push(`/admin/trips/${pathParams.trip_id}/candidates/${id}`);

    const candidatesList = candidates.map( candidate => {
        return (
            <Candidate key={candidate.id}>
                <h3>{candidate.name}</h3>
                <p>País: {candidate.country}</p>
                <p>Idade: {candidate.age}</p>
                <ButtonDetails onClick={() => goToCandidateDetails(candidate.id)}>Detalhes</ButtonDetails>
            </Candidate>
        )
    })

    return (
        <CandidatesListPageContainer>
            <Header logo={true} />
            <CandidatesListContainer>
                <Candidates>
                    <CandidatesHeader>
                        <h1>Candidatos:</h1>
                    </CandidatesHeader>
                    <CandidatesRegistered>
                        {candidatesList}
                    </CandidatesRegistered>
                </Candidates>
            </CandidatesListContainer>
        </CandidatesListPageContainer>
    )
}

export default CandidatesList;