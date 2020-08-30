import React from 'react';
import styled from "styled-components"
import axios from 'axios';

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const ContainerPokemon = styled.div`
  display: flex;
`
class App extends React.Component{
  state={
    pokemons: [],
    pokeImageFront: "",
    pokeImageBack: "",
    pokeType: [],
    pokeName:""
  }
  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151'
    ).then((response) => {
      this.setState({pokemons: response.data.results})
    })
  }
  pegaPokemon = (event) =>{
    
    const pokeName = event.target.value
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((response)=>{
      console.log(response.data.sprites.back_default)
      this.setState({
        pokeName: pokeName,
        pokeImageFront: response.data.sprites.front_default, 
        pokeType: response.data.types,
        pokeImageBack: response.data.sprites.back_default
      })
    }).catch((err)=>{
      console.log(err)
    })
  }
  render(){
    return(
      <ContainerPage>
        <select onChange={this.pegaPokemon}>
          <option value="">nenhum</option>
          {this.state.pokemons.map((pokemon)=>{
            return (
              <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
            )
          })}
        </select>
        {this.state.pokeName && (<ContainerPokemon>
          <img src={this.state.pokeImageBack} />
          <div>
            <h2>{this.state.pokeName}</h2>
              <strong>Tipo: </strong>{this.state.pokeType.map(tipo =>{
                return <span>{tipo.type.name + " "}</span>
                })
              }
          </div>
          <img src={this.state.pokeImageFront} />
        </ContainerPokemon>)}
        
      </ContainerPage>
    )
  }
}
export default App