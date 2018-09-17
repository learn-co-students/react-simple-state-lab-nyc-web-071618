import React, { Component } from 'react';

class Cell extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  updateColor = () => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }

  render(){
    return(
      <div onClick={this.updateColor} className = 'cell' style={{backgroundColor: this.state.color}}></div>
    )
  }

}

export default Cell
