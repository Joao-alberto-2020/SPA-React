import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Topo from "./components/Topo";
import Among from "./img/among.jpg";
import Footer from "./components/footer";
import Serviços from "./components/serviços";
import About from "./components/about";
import Contato from "./components/contato";
import Parceiros from "./components/parceiros"
import 'bootstrap/dist/css/bootstrap.min.css'
import ads from "./imagem anuncio/anuncio.gif"
// function App() {
//   return (
//     <div className="App">
//       <Topo></Topo>
//     </div>
//   );
// }

class App extends Component {
  render(){
    return (
      <div className="App-header" >
        <Topo></Topo>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
        <img src={ads} className="anuncio"></img>
       
        <About></About>
        <Serviços></Serviços>
        <Contato></Contato>
        <Parceiros></Parceiros>
        <Footer></Footer>
        </div>
    )
  }
}
export default App;

