import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-UMB17KS2Z-a3f5cbe0c5f9-512'}
          fotoPost={'https://i.picsum.photos/id/104/367/267.jpg?hmac=Ya5ofdI7j8QmNxPqZfsKKi9TL4eyDuk8Hc-7Yl1y2-0'}
        />
         <Post
          nomeUsuario={'Soter'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-ULV6PQGCF-453a00e08a1f-512'}
          fotoPost={'https://i.picsum.photos/id/1035/367/267.jpg?hmac=Bq8Xh0z-VRVWm9RfovGy3iXDBaVyNPVGHKOganDNmwI'}
        />
         <Post
          nomeUsuario={'Caio'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U01048UJVFD-d5ddc01fbba1-512'}
          fotoPost={'https://i.picsum.photos/id/1025/367/267.jpg?hmac=xlFGYDf9CLQQCJ2NTBxS8qTTOLkD28zsznZAt9XFCJw'}
        />
      </div>

      
    );
  }
}

export default App;
