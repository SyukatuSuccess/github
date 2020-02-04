import React from 'react';
import ResponsiveComponent from "./ResponsiveComponent";

export default class Row extends ResponsiveComponent{
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
      minW, 
      style, 

      between,
      right, 
      nowrap, 
      middle,
      center,
      reverse, 
    } = this.props
    
    const { size, resStyle, hover } = this.state
    const row = {
      display:"flex",
      flexWrap: 
        nowrap ? 'nowrap' :
        reverse ? 'wrap-reverse' :
        'wrap',
      // border:"2px solid blue",
      height: "100%",
      width : 
      size ? size * 8.333 + "%" :
      "100%",
    minWidth:
      minW ? minW :
      null,
    justifyContent: 
      between ? 'space-between' :
      center  ? 'center' :
      right   ? 'flex-end' :
      null,
    alignItems: 
      middle ? 'center':
      null,
    }

    return(
      <div style={Object.assign({},row, style, resStyle )  }>
        { children }
      </div>
    );
  }
} 