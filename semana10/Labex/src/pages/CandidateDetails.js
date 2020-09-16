import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Candidate from '../components/ContentContainer';
import CandidateDetailsPageContainer from '../components/PageContainer';
import CandidateDetailsContainer from '../components/MainContainer';
import Details from '../components/Details';
import DescriptionContainer from '../components/DescriptionContainer';
import Header from '../components/Header';
import InfoContainer from '../components/InfoContainer';
import Line from '../components/Line';
import ResponseContainer from '../components/SingleLineContainer';
import useChangeTitle from '../hooks/useChangeTitle';
import { usePrivatePage } from '../hooks/usePrivatePage';
import axios from 'axios';
import { baseUrlAPI } from '../utils/links';
import styled from 'styled-components';


const PresentationText = styled.p`
    align-self: flex-start;
`

const ButtonCandidate = styled.button`
    background-color: ${props => props.color};
    width: 40%;
    height: 100%;
    justify-self: center;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.75em;
    cursor: pointer;
    outline: none;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 50%;
        font-size: 0.8em;
    }
`


const CandidateDetails = () => {
    useChangeTitle("Detalhes do candidato");
    usePrivatePage();

    const [candidate, setCandidate] = useState({});
    
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
                setCandidate(response.data.trip.candidates.find(element => element.id === pathParams.candidate_id));
            })
            .catch( error => {
                console.log(error)
                alert("Erro na obtenção dos dados");
            })
    })


    const decideCandidate = async (decision) => {
        const body = { approve: decision };

        try {
            await axios.put(`${baseUrlAPI}/trips/${pathParams.trip_id}/candidates/${pathParams.candidate_id}/decide`, body, {
                headers: {
                    auth: sessionStorage.getItem("token")
                }
            });
            history.goBack();
        } catch {
            alert("Erro no envio dos dados");
        }


    }

    return (
        <CandidateDetailsPageContainer>
            <Header logo={true} />
            <CandidateDetailsContainer>
                <Candidate>
                    <Details>
                        <InfoContainer>
                            <h3>{candidate.name}</h3>
                            <p>{candidate.country}</p>
                            <p>{candidate.profession}</p>
                            <p>{candidate.age}</p>
                        </InfoContainer>
                        <DescriptionContainer>
                            <Line />
                            <h4>Texto de apresentação:</h4>
                            <PresentationText>{candidate.applicationText}</PresentationText>
                        </DescriptionContainer>
                    </Details>
                    <ResponseContainer>
                        <ButtonCandidate  onClick={() => decideCandidate(false)}>REJEITAR CANDIDATURA</ButtonCandidate>
                        <ButtonCandidate  onClick={() => decideCandidate(true)}>ACEITAR CANDIDATURA</ButtonCandidate>
                    </ResponseContainer>
                </Candidate>
            </CandidateDetailsContainer>
        </CandidateDetailsPageContainer>
    )
}

export default CandidateDetails;