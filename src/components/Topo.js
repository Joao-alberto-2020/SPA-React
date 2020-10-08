import React, {Component} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
// function Topo() {
//     return(
//    <header>
//        <nav>
//            <a>Home</a>
//            <a>Sobre</a>
//        </nav>
//    </header>
//     )
// }


class Topo extends Component {
    render(){
        return(
          
          <header>
              <nav>
         <a href="">inicio</a>
         <a> </a>
         <a href="">contato</a>
         <a> </a>
         <a href="">sobre</a>
         <a> </a>
         <a href="">serviços</a>
              </nav>
        </header>
        )
    }
    
}

export default Topo;