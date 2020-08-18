import React from 'react';
import styled from 'styled-components';
import  Etapa1  from './components/etapa1';
import  Etapa2  from './components/etapa2';
import  Etapa3  from './components/etapa3';
import  Final  from './components/final';

const Container= styled.div`
	display: flex;
	flex-direction: column;		
	align-items: center;
	width: 50vw;
	margin: auto;
`
const Botao = styled.button`
	width: 10vw;
    margin: 6px;
`

class App extends React.Component{
	state={
		etapa: 1
	};

	 renderizaEtapa=(event)=>{
		switch (this.state.etapa){			
			case 1 :
				return <Etapa1/>;
			case 2 :
				return <Etapa2/>;
			case 3 :
                return <Etapa3/>;
                
			default:
				return <Final/>;	
		}				 
	};

	Etapa =()=>{
		this.setState({etapa: this.state.etapa+1})
	}
	render (){			
  		return (			  
    	<Container>	
			{this.renderizaEtapa()}	  	  
		  <Botao onClick={this.Etapa}> Próxima etapa</Botao>
    	</Container>
  		);
	}
}

export default App;