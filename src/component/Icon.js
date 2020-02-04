import React from 'react';
import ResponsiveComponent from "./ResponsiveComponent";

export default class Icon extends ResponsiveComponent{
  constructor(props){
    super(props);
    this.state = {
      size     : null,
      resStyle : null,
      hover    : false
    }
    
  }
  render(){
    const { 
      src,
      minW, 
      style, 
      color, 
      alt, 
      onClick,
      w,
      h, 
    } = this.props
    
    const { size, resStyle, hover } = this.state

    const icon = {
      color: 
        color ? color :
        '#00c',
      width : 
        size ? size * 8.333 + "%" :
        w ? w : 
        null,
      minWidth:
        minW ? minW :
        null,
      textDecoration: 
        hover ? color ? 'underline solid' + color :
        'underline solid #00c ':
        'none',
      height: 
        h ? h :
        null,
      cursor: 'pointer',
    }

    return(
      <img 
        src           = { src }
        alt           = { alt } 
        style         = { Object.assign({},icon, style, resStyle ) }
        onClick       = { onClick }
        onMouseOver   = { ()=> this.setState({ hover: true }) }
        onMouseLeave  = { ()=> this.setState({ hover: false }) }
        onFocus       = { ()=> this.setState({ hover: true }) }
        onBlur        = { ()=> this.setState({ hover: false }) }
      />

    );
  }
} 