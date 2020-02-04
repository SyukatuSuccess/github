import React, { Fragment, Children } from 'react';
import ResponsiveComponent from "./ResponsiveComponent";

export default class Btn extends ResponsiveComponent{
  constructor(props){
    super(props);
    this.state={
      hover:false,
    }
  }
  
  render(){
    const { 
      style,
      color,
      label,
      children,
      w,
      h,
      marginTop 
    } = this.props
    const { hover,size,resStyle } = this.state

    const btn_style = {
      height: 
        h ? h :
        50,
      padding:"0px 24px",
      fontWeight: "bold",
      fontSize: 18,
      borderRadius: 5,
      // boxShadow:" 2px 2px 2px #aaa",
      cursor: "pointer",
      border:"3px solid " + color,
      color: 
        hover ? color :
        "#fff",
      backgroundColor: 
        hover ? "#fff" :
        color, 
      transition:"0.3s",
      width : 
      size ? size * 8.333 + "%" :
      w ? w  :
      null,
      marginTop: marginTop,
    }
    // ______________________________________________________________________________
    
    return(
      <button 
        style        = { Object.assign( {},btn_style, style, resStyle )}
        onClick      = { this.props.onClick } 
        onKeyDown    = { this.props.onKeyDown }
        onMouseOver  = { () => this.setState({ hover : true  }) }
        onMouseLeave = { () => this.setState({ hover : false }) }
        onFocus      = { () => this.setState({ hover : true }) }
        onBlur       = { () => this.setState({ hover : false }) }
      >
        { label }
        { children }
      </button>
    )
  }
}
