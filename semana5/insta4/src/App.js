import React from 'react';
import Post from './components/Post/Post';
import "./App.css";
import styled from "styled-components";

const FormPost = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const FormInput = styled.input`
  margin-top: 5px;
  padding-left: 5px;
  height: 25px;
`;
const FormButton = styled.button`
  height: 25px;
  margin-top: 5px;
`;

class App extends React.Component {

  state = {

   postagens: [
      {
        
        nomeUsuario : "Paulinha",
        fotoUsuario : "https://ca.slack-edge.com/TLAVDH7C2-UMB17KS2Z-a3f5cbe0c5f9-512",
        fotoPost : "https://i.picsum.photos/id/104/367/267.jpg?hmac=Ya5ofdI7j8QmNxPqZfsKKi9TL4eyDuk8Hc-7Yl1y2-0"
        
      },

      {
        nomeUsuario : "Soter",
        fotoUsuario : "https://ca.slack-edge.com/TLAVDH7C2-ULV6PQGCF-453a00e08a1f-512",
        fotoPost : "https://i.picsum.photos/id/1035/367/267.jpg?hmac=Bq8Xh0z-VRVWm9RfovGy3iXDBaVyNPVGHKOganDNmwI"
        
      },

      {
        
        nomeUsuario : "Caio",
        fotoUsuario : "https://ca.slack-edge.com/TLAVDH7C2-U01048UJVFD-d5ddc01fbba1-512",
        fotoPost : "https://i.picsum.photos/id/1025/367/267.jpg?hmac=xlFGYDf9CLQQCJ2NTBxS8qTTOLkD28zsznZAt9XFCJw"
        
      },


    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
    
    }

postar = (event) => {
  event.preventDefault()
  const novoPost = {
    nomeUsuario: this.state.valorInputNomeUsuario,
    fotoUsuario: this.state.valorInputFotoUsuario,
    fotoPost: this.state.valorInputFotoPost,
  };

  const novoPosts = [...this.state.postagens, novoPost]

  this.setState({
    postagens: novoPosts,
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  })
}

onChangeInputUsuario = (event) => {
  this.setState({ valorInputNomeUsuario: event.target.value })
}

onChangeInputFotoUsuario = (event) => {
  this.setState({ valorInputFotoUsuario: event.target.value })
}

onChangeInputFotoPost = (event) => {
  this.setState({ valorInputFotoPost: event.target.value })
}

render(){
  const listaDePosts = this.state.postagens.map((postagens) => {
    return (
      <Post
        nomeUsuario={postagens.nomeUsuario}
        fotoUsuario={postagens.fotoUsuario}
        fotoPost={postagens.fotoPost}
      />
    )
  }) 

  return (
    <div className={"app-container"}>
      <FormPost>
        <FormInput
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Nome do usuário"}
        />
        <FormInput
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Link da foto do usuário"}
        />
        <FormInput
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Link da foto do post"}
        />
        <FormButton onClick={this.postar}>Adicionar</FormButton>
      </FormPost>

      {listaDePosts}
    </div>
  )
  }
}


export default App