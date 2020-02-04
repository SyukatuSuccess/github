import React from 'react';

export default class Grid extends React.Component{
  render(){
    const{ children } = this.props
    const grid = {
      display:"flex",
      width : "100%",
      // border: '3px solid black',
      height:"100%",
      flexWrap :"wrap",

    }

    return(
      <div style={ grid }>
        { children }
      </div>
    );
  }
} 