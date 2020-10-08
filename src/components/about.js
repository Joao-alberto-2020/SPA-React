import React, {Component} from 'react';


class about extends Component{


   constructor(props){
       super()
       this.state = {
           text: props.text,
           name: "fulanitos"
       }
       this.setName = this.setName.bind(this);
       this.resetName = this.resetName.bind(this);
   }
   

setName () {
    this.setState({
        name: "ciclanildo"
    })
}

resetName(){
    this.setState({
        name:"fulano"
    });
}
render(){
    return(
        <div className = "App">
            <h1>about</h1>
            <p>{this.state.text}</p>
            <p >eu sou o {this.state.name}</p>
            <button onClick={this.setName} animation = "@media">mudar nome</button>
        </div>
    )
}
}


export default about