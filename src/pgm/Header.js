import React from 'react';
import * as C from "../component/Components"
import * as I from '../img/images'
import * as S from '../Styles'


export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      renderTest : true
    }
  }
  render(){
    //___________________________________________________________________________________________
    const header = {
      background:'rgba(0,0,80,0.9)',
      height: 50,
      position: 'fixed',
      top:0,
    }
    const logo = {
      color : "#ff0",
      fontFamily:'sans-serif',
      fontSize: '1.5rem',
    }
    const contact ={
      backgroundColor: '#fff',
      border: '1px solid #fff',
      borderRadius: 5,
      color:"#008",
      cursor: 'pointer',
      fontSize: '1.2rem',
    }

    const page = {
      fontSize: '1.2rem',
      padding:'0px 16px'
    }

    const icon = {
      width: 25,
      height: 25,
      display: 'none',
      marginRight:16,
    }

    return(
      <C.Row middle between nowrap style= { header }>
        <C.Col  middle style={ logo }  >学生就活応援団SUCCESS</C.Col>
        <C.Col　middle responsive={{ S: S.none, M: S.none }}>
          <div>
            {/* <C.Link label="活動理念"     color="#fff" style={ page }/>
            <C.Link label="体験者の声"   color="#fff" style={ page }/>
            <C.Link label="活動について" color="#fff" style={ page }/>
            <button style={contact}>お問い合わせ</button> */}
          </div>
        </C.Col>
        {/* <C.Icon src={ I.menu } alt="menu" style={ icon } responsive={{ S: S.flex, M:S.flex, }} /> */}
      </C.Row>
    );
  }
} 