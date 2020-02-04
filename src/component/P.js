import React from 'react';
import ResponsiveComponent from "./ResponsiveComponent";

export default class P extends ResponsiveComponent{
  constructor(props){
    super(props);
    this.state = {
      size     : null,
      resStyle : null,
    }
  }
  render(){
    const { 
      children, 
      label, 
      minW, 
      style, 
      color, 
    } = this.props
    
    const { size, resStyle } = this.state

    const p = {
      color: 
        color ? color :
        null,
      width : 
        size ? size * 8.333 + "%" :
        null,
      minWidth:
        minW ? minW :
        null,
      cursor: 'pointer',
    }

    return(
      <p style = { Object.assign({},p, style, resStyle ) }>
        { children }
        { label }
      </p>
    );
  }
} 