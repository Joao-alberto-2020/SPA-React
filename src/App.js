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
      <header className="App-header">
        <Topo name={this.props.name} age="28" email="fulano@gmail.com"></Topo>
        <About></About>
        <Serviços></Serviços>
        <Contato></Contato>
        <Parceiros></Parceiros>
        <Footer></Footer>
        </header>
    )
  }
}
export default App;
