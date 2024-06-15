import React from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";

import article1Img from './assets/imgs/image 28.png'
import article2Img from './assets/imgs/image 27.png'
import article3Img from './assets/imgs/image 26.png'
import article4Img from './assets/imgs/image 25.png'


import './styles/App.css'


//Componente em classe e uma Classe que herda a classe Componente do React,
//e retorna HTML dentro do metodo render

class App extends React.Component {
  //Metodo responsavel por renderizar o conteudo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />
        
        <section id="article">
          <Article
            title="Mel Moonlight"
            link="https://online.fliphtml5.com/zgmth/ljkb/#p=1"
            provider="Savage Magazine"
            description="PRIMEIRA EDIÇÃO DE 2024 by SAVAGE MAGAZINE
            Começando o ano com a nossa Mellina Moonlight que conta como é viver com TDI"
            thumbnail={article1Img}
          />

          <Article
            title="EDIÇÃO REVEILLON"
            link="https://online.fliphtml5.com/zgmth/puyx/#p=1"
            provider="Savage Magazine"
            description="Uma simples edição para saber o que os nossos modelos esperam da Savage em 2024."
            thumbnail={article2Img}
          />

          <Article
            title="EDIÇÃO NATAL"
            link="https://online.fliphtml5.com/cayjj/qlni/ "
            provider="Savage Magazine"
            description="RASGOS E RITMOS"
            thumbnail={article3Img}
          />

          <Article 
          title="Uma entrevista de MILHÕES (ou bilhões?)"
          link="https://online.fliphtml5.com/zgmth/xden/#p=1"
          provider="Savage Magazine"
          description="Evangeline Raven abre sua vida e habla sobre seu passado, presente e futuro!"
          thumbnail={article4Img}
          />

        </section>

      </>
    )
  }
}
export default App;
