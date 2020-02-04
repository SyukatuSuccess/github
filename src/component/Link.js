import React from 'react';
import ResponsiveComponent from "./ResponsiveComponent";

export default class Link extends ResponsiveComponent{
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
      children, 
      label, 
      minW, 
      style, 
      color, 
      href, 
      onClick 
    } = this.props
    
    const { size, resStyle, hover } = this.state

    const link = {
      color: 
        color ? color :
        '#00c',
      width : 
        size ? size * 8.333 + "%" :
        null,
      minWidth:
        minW ? minW :
        null,
      textDecoration: 
        hover ? color ? 'underline solid' + color :
        'underline solid #00c ':
        'none',
      cursor: 'pointer',
    }

    return(
      <a 
        href          = { href } 
        style         = { Object.assign({},link, style, resStyle ) }
        onClick       = { onClick }
        onMouseOver   = { ()=> this.setState({ hover: true }) }
        onMouseLeave  = { ()=> this.setState({ hover: false }) }
        onFocus       = { ()=> this.setState({ hover: true }) }
        onBlur        = { ()=> this.setState({ hover: false }) }
      >
        { children }
        { label }
        { this.input }
      </a>
    );
  }
} 