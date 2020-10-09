import React, {Component} from 'react';

class footer extends Component{
   constructor(){
       super()
       
       this.state = {
           contato: "51 99544-5644",
           email: "fulano@gmail.com",
           ano: 2020,
           autor: "fulano corp",
           
       }
       
   }
    
    
    render(){
        return(<footer className="footer">
            <p className='master'>fale conosco: Telefone: {this.state.contato} - E-mail: {this.state.email}</p>
                <p className='master'>Copyright@{this.state.ano} - {this.state.autor}</p>
        </footer>
        
        )   
    }
}


export default footer