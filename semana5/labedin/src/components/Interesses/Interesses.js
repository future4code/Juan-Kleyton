import React from 'react';

function Interesses(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default Interesses;