import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import Interesses from './components/Interesses/Interesses'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars3.githubusercontent.com/u/63150484?s=460&u=0b23329ddb860ae084eb1994fb6aab196d04d374&v=4" 
          nome="Juan" 
          descricao="Oi, eu sou o Juan. Sou aluno da Labenu. Adoro comida japonesa e me aventurar no universo das tecnologias"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
        imagem="https://www.freepngimg.com/download/gmail/66440-google-icons-symbol-computer-email-gmail.png" 
        email="Email: juan.aluno@labenu.com.br" 
        
        />

        <CardPequeno
        imagem="https://img2.gratispng.com/20180328/gkq/kisspng-paper-google-map-maker-computer-icons-world-map-location-icon-5abbd6d90e8020.6712686415222596730594.jpg"  
        endereço="Endereço: p sherman, 42, wallaby way sydney" 
        
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif" 
          nome="Labenu" 
          descricao="Formado no primeiro módulo (HTML5, CSS, JAVASCRIPT)
          Atualmente estudando REACT" 
        />
        
        <CardGrande 
          imagem="https://www.escoteiros.org.br/wp-content/themes/escoteiros-theme/img/icons/fale-conosco.svg" 
          nome="UEB" 
          descricao="Auxiliar do Ramo Lobinho" 
        />

        </div>

        <div className="page-section-container">
        <h2>Interesses</h2>
      
        <Interesses
        imagem="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/tesla-512.png" 
        nome="Tesla - Electric Cars, Solar & Clean Energy" 
        descricao="Accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses."
        imagem2="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/tesla-512.png" 
        nome2="Tesla - Electric Cars, Solar & Clean Energy" 
        descricao2="Accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses."
        
        />      
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />   

        
      </div>
    </div>
  );
}

export default App;
