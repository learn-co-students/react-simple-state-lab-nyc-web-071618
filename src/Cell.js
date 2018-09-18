import React, { Component } from 'react';

class Cell extends Component{

    constructor(props){
        super(props);
        this.state = {
            color: this.props.value
        }
    }

    handleClick = (event) => {
        const newColorHex = '#333'
        this.setState({
            color: newColorHex
        })
    }

    render(){
        return(
            <div className='cell' 
                 style = {{backgroundColor:this.state.color}} 
                 onClick={this.handleClick}>
            </div>
        )
    }

} // end of Cell class

export default Cell