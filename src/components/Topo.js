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
          
//           <header>
//             <div class="container">
// <div class="row">
//  <div class="col"></div>
// </div>
// </div>

              <nav className="tossing camada">
                  
         <a href="" className="App-link ">inicio</a>
         <a> </a>
         <a href="" className="pink">contato</a>
         <a> </a>
         <a href="" className="yellow">sobre</a>
         <a> </a>
         <a href="" className="green">serviços</a>
        
              </nav>
              
        
        )
    }
    
}

export default Topo;