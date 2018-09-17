import React, { Component } from 'react';
import Cell from "./Cell.js"

let defaultProps = []
for(let i = 0; i<10; i++){
  let row = []
  for( let j = 0; j <10; j++){
    row.push("#f00")
  }
  defaultProps.push(row)
}
export default class Matrix extends Component {
  static defaultProps={
    values:defaultProps
  }
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
