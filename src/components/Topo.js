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
              eu sou o {this.props.name}
              <img src={this.props.img}></img>
              </nav>
        </header>
        )
    }
    
}

export default Topo;