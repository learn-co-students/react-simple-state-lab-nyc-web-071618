import React, { Component } from 'react'

class Cell extends Component {


  constructor(props) {
  super(props)
  this.state = {
    color: this.props.value
  }
  // ...define initial state with a key of 'color' set to the 'value' prop
}

render(){
  console.log(this.state)
  return (
    <div className="cell" style={{backgroundColor: this.state.color}} onClick={event => this.setState({ color: '#333'})}> </div>
  )
}





}

export default Cell;
