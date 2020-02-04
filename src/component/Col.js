import React from 'react';
import ResponsiveComponent from "./ResponsiveComponent";

export default class Col extends ResponsiveComponent{
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
      span,
      minW, 
      maxW,
      style,
      h,
      
      right, 
      middle, 
      center,
      bottom,
    
    } = this.props
    
    const { size, resStyle, hover } = this.state
    
    const Col = {
      display:"flex",
      flexDirection:"column",
      // flexWrap: 'wrap',
      // border:"2px solid red",
      padding:8,
      height:
        h ? h : 
        null,
      width : 
        size ? size * 8.333 + "%" :
        span ? span * 8.333 + "%" :
        null,
      minWidth:
        minW ? minW :
        null,
      maxWidth: 
        maxW ? maxW :
        null,
      justifyContent: 
        bottom ? 'flex-end' :
        middle ?'center' : 
        null,
      alignItems: 
        center ?'center' :
        null,

    }

    return(
      <div style={Object.assign({},Col, style, resStyle )  }>
        { children }
      </div>
    );
  }
} 