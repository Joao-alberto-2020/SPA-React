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
      <div>
        <Footer></Footer>
        <About></About>
        <Serviços></Serviços>
        <Contato></Contato>
        <Parceiros></Parceiros>
      </div>
    )
  }
}
export default App;
