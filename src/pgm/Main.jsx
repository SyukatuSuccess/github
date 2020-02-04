import React from 'react';
import * as C from "../component/Components"
import * as P from "./Pages";

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      renderTest : true
    }
  }
  render(){
    return(
      <C.Grid>
        <P.Header />
        <P.TopPage />
      </C.Grid>
    );
  }
} 