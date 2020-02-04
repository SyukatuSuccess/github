import React from 'react';

export default class ResponsiveComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      resStyle: null,
      size    : null
    }
    this.props = {
      S  : null,
      M  : null,
      L  : null,
      XL : null,
      responsive : null,
    }
    this.renderSize = null ;  // 何度もレンダーさせないようにif文ではじくため
  }
  //_______________________________________________________________________________________

  componentDidMount() {
    window.addEventListener('resize',this.resizeEvent);
    this.handleOnResponsive()
  }
  //_______________________________________________________________________________________

  componentWillUnmount() {
    if(this.props.responsive){
      window.removeEventListener('resize', this.resizeEvent);
    }
  }
  //_______________________________________________________________________________________

  resizeEvent=()=>{
    this.handleOnResponsive()
  }
  //_______________________________________________________________________________________

  handleOnResponsive=()=>{
    const { S,M,L,XL,responsive} = this.props
    // let resKeys = []
    // if( responsive ){ resKeys = Object.keys( responsive ) } //  responsiveが設定されていたら、その中のKey情報を取得
    if( window.innerWidth <= 425 && this.renderSize !== 'S' ){
      if( S ){ 
        this.setState({ size: S })
      }
      if( responsive ){
        this.setState({ resStyle : responsive.S })
      }
      this.renderSize = 'S' 
      return;
    }
    else if( window.innerWidth > 425  && window.innerWidth < 1024 &&  this.renderSize !== 'M' ){
      if( M ){ 
        this.setState({ size: M })
      }
      if( responsive ){
        this.setState({ resStyle : responsive.M })
      }
      this.renderSize = "M"
      return;
    }
    else if( window.innerWidth >= 1024  && window.innerWidth < 1440 && this.renderSize !== 'L' ){
      if( L ){ 
        this.setState({ size: L })
      }
      if( responsive ){
        this.setState({ resStyle : responsive.L })
      }
      this.renderSize = "L"
      return;
    }
    else if( window.innerWidth >= 1440 && this.renderSize !== 'XL' ){
      if( XL ){ 
        this.setState({ size: XL })
      }
      if( responsive ){
        this.setState({ resStyle : responsive.XL })
      }
      this.renderSize = "XL"
      return;
    }
  }

  

} 