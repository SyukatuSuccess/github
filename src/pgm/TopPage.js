import React, { Fragment } from 'react';
import * as C from "../component/Components"
import * as I from '../img/images'
import * as S from '../Styles'


export default class TopPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      renderTest : true
    }
  }
  render(){
    const topBg = {
      paddingTop: 50,
      background:`url(${I.businessman})  no-repeat`,
      backgroundPosition:"center top",
      backgroundSize:"auto 100vh",
      minHeight: '100vh',      
    }
    const top = {
      height: '50vh',
    }
    // const topImage1 = {
    //   background:`url(${I.success})  no-repeat`,
    //   backgroundPosition:"center top",
    //   // backgroundSize:"100%",
    //   minHeight: '100vh',
    // }
    // const topImage2 = {
    //   background:`url(${I.syukatsu})  no-repeat`,
    //   backgroundPosition:"center top",
    //   backgroundSize:"100% 100%",
    //   width: 400,
    //   height: 400,
    //   minWidth: 400
    // }
    const catchcopy = {
      fontSize: 150,
      color: '#fff',
      fontWeight: 'bolder',
      // textShadow: "3px 3px 3px 3px #FF0"
    } 
    const subCatchcopy = {
      marginTop: 32,
      fontSize: 50,
      color: '#fff'
    }
    const contactBtn ={
      marginTop: 32,
      fontSize: 25,
      height: 100,
      width: 500,
    }
    const contactBtn_S = {
      height: 50,
      width: 200,
      fontSize: 16,
    }
    const contactBtn_M = {
      height: 70,
      width: 300,
      fontSize: 20,
    }
    const section = {
      minHeight:'100vh',
    }
    const sectionTitle = {
      padding:'32px 0px',
      height: null,
      marginTop: 42, 
      fontSize: 32,
      fontWeight: 'bolder',
    }
    const aboutUsIcon = {
      height: 'auto',
      maxWidth: '100%',
      padding : 32, 
    }
    const aboutUsSentence ={
      fontSize: 20,
      lineHeight: 4,
    }
    const aboutActHeading = {
      fontSize: 20,
      // marginBottom: 24,
      fontWeight: 'bold',
    }
    const aboutActSentence = {
      maxWidth: 600,
      lineHeight: 1.2,
      padding:24,
    }
    const aboutActImg = {
      cursor: null,
      height: '100%',
      maxHeight: '25vh',
      borderRadius: 30,
      minWidth: 300,
      maxWidth: "95vw"

    }
    const recommendImg = {
      height: 250,
      width: 250,
    }
    const recommendWords = {
      marginTop: 24,
      fontSize: 20,
    }
    const contact = {
      background:`url(${I.postBox})  no-repeat`,
      backgroundPosition:"center top",
      backgroundSize:"auto 100vh",
      minHeight: '100vh',  
      backgroundColor: "#005"
    } 
    const contactWordArea = {
      backgroundColor: '#005',
      maxWidth: 600,
      padding: 48,
      borderRadius: 10,
      // marginBottom: 104,
    }
    const greatWord = {
      fontSize: 30,
      color: '#FFF',
      // fontWeight: 'bolder',
      marginBottom: 24,
      fontStyle: 'oblique',
      fontFamily: 'ＭＳ 明朝',
      lineHeight: 1.5,
    }
    const greatMan = {
      fontSize: 20,
      color: '#FFF',
      marginBottom: 48,
      fontFamily: 'serif',
    }
    return(
      <Fragment>
        <C.Row style={ topBg }>
          <C.Row center middle style = { top }>
            <C.Col middle center>
              <C.P label="就活＜終活" style={ catchcopy } responsive={{ S:S.font(50), M:S.font(75)}} />
              <C.P label="内定で人生終わりじゃない" style={ subCatchcopy } responsive={{ S:S.font(20), M:S.font(30)}} />
            </C.Col>
          </C.Row>
          <C.Row  center nowrap style = { top }>
            <C.Col center>
              <p></p>
              <C.Btn label='お問い合わせ' color='#ea0' style={ contactBtn } responsive={{S : contactBtn_S, M : contactBtn_M}} />
            </C.Col>
            {/* <C.Col style={ topImage2 } responsive={{S:S.none}}/> */}
          </C.Row>
        </C.Row>
        {/* ___________________________________________________________ */}

        <C.Row style={ section }>
          <C.Col span="12">
            <C.Row center middle style={ sectionTitle }>
              学生就活応援団SUCCESSについて
            </C.Row>
            <C.Row　center>
              <C.Col center>
                <C.P label="私たちは学生の就職活動を支援しているボランティア団体です。" style={ aboutUsSentence } responsive={{S: {lineHeight: null }, M:{lineHeight: 2.5} }}/>
                <C.P label="しかし、私たちのミッションは内定さえ取れればいいという安易なものではありません。" style={ aboutUsSentence } responsive={{S: {lineHeight: null }, M:{lineHeight: 2.5} }}/>
                <C.P label="内定獲得後も豊かな人生を歩んでいただくこと、それが私たちのミッションです。" style={ aboutUsSentence } responsive={{S: {lineHeight: null }, M:{lineHeight: 2.5} }}/>
                <C.P label="そして、そのためのサポートがしたいという志を持ったメンバーが集まってできました。" style={ aboutUsSentence } responsive={{S: {lineHeight: null }, M:{lineHeight: 2.5} }}/>
                {/* <C.Link label="もっと詳しく" /> */}
              </C.Col>
            </C.Row>
            <C.Row center>
              {/* <C.Col center>
                <C.Icon src={ I.coin } style={ aboutUsIcon } />
                <p>講座費用：無料</p>
              </C.Col> */}
              <C.Col center>
                <C.Icon src={ I.menber } style={ aboutUsIcon } />
                <p>メンバー構成</p>
                <p>メンバー数：30人（2019年4月）</p>
                <p>男女比率　1:1</p>
              </C.Col>
              <C.Col center>
                <C.Icon src={ I.coin } style={ aboutUsIcon } />
                <p>講座費用：無料</p>
              </C.Col>
            </C.Row>
          </C.Col>
        </C.Row>
        {/* ___________________________________________________________ */}

        <C.Row style={ section }>
          <C.Col  span="12">
            <C.Row center middle style={ sectionTitle }>
              論理的で実践的なサポート
            </C.Row>
            <C.Row center >
              <C.Col center >
                <p style={ aboutActHeading } >『偉大な成功者たちの生き方を研究』</p>
                <p style={ aboutActSentence }>
                実は、人生において成功を収めてきた方々の生き方には<u>共通点</u>がありました。
                また、彼らは常に行動することを重視していました。
                それは社会で言われているような表面的な営業のテクニックでも、開発の技術でもなく、「成功」よりも「成長」することを重視し、行動していたのです。
                ですから、彼らが暗に意味するように、自分の至らない部分を克服するために挑戦し続けることは、重要なのです。
                </p>
              </C.Col>
              <C.Col>
                <C.Icon src={ I.library } style={ aboutActImg } />
              </C.Col>
            </C.Row>
            <C.Row center reverse>
              <C.Col>
                <C.Icon src={ I.marketing } style={ aboutActImg } />
              </C.Col>
              <C.Col center　>
                <p style={ aboutActHeading } >『研究を基にした徹底的な自己分析サポート』</p>
                <p style={ aboutActSentence }>
                Apple創設者のスティーブジョブズ氏はスピーチで<b><u><font color='#00a'>「もし今日が人生最後の日だったら、今やろうとしていることは本当に自分のやりたいことだろうか？」</font></u></b>
                と語りました。つまり、自己分析とは無意識に行っていることを意識化することなのです。したがって自分を知るということは非常に簡単なことなのです。
                {/* あなたは自分自身というものが、あなたのしていることが自分を幸せにしているのか、分からないのではないでしょうか？ */}
                </p>
              </C.Col>
            </C.Row>
            <C.Row center>
              <C.Col center>
                <p style={ aboutActHeading } >『実戦を重視』</p>
                <p style={ aboutActSentence }>
                  私たちは実践していただくことを重視しています。「なぜ自己分析をするだけなのに実践をしなければいけないの？」と思われるかもしれません。それは単に知識は本を読めば入ってきますが、自分の手足として使うにはもう一歩それを加工する必要があるからです。したがって、知識を入れるインプットよりも知識を使うアウトプットの実践が非常に重要ということになります。
                </p>
              </C.Col>
              <C.Col>
                <C.Icon src={ I.success_step2 } style={ aboutActImg } /> 
              </C.Col>
            </C.Row>
          </C.Col>
        </C.Row>
        {/* ___________________________________________________________ */}

        <C.Row style={ section }>
          <C.Col  span="12">
            <C.Row center middle style={ sectionTitle }>
              こんな方には特におすすめ
            </C.Row>
            <C.Row center>
              <C.Col center>
                <C.Icon src={ I.whiteMan1 } style={ recommendImg } />
                <p  style={ recommendWords }>『本当にやりたいことが分からない』</p>
              </C.Col>
              <C.Col center>
                <C.Icon src={ I.whiteMan3 } style={ recommendImg } />
                <p style={ recommendWords }>『これから社会に出て成功したい』</p>
              </C.Col>
              <C.Col center>
                <C.Icon src={ I.whiteMan2 } style={ recommendImg } />                
                <p style={ recommendWords }>『今は楽しいけど本当にこのままでいいのだろうか』</p>
              </C.Col>
            </C.Row>
            <C.Row center>
              <C.Col center>
                <C.Icon src={ I.whiteMan4 } style={ recommendImg } />
                <p style={ recommendWords }>『自己分析が苦手』</p>
              </C.Col>              
              <C.Col center>
                <C.Icon src={ I.whiteMan5 } style={ recommendImg } />
                <p style={ recommendWords }>『プライベートも充実させたい』</p>
              </C.Col>
            </C.Row>
          </C.Col>
        </C.Row>
        {/* ___________________________________________________________ */}

        <C.Row right style={ contact }>
          <C.Col middle span="6" S="12" L="6">
            <C.Col style={ contactWordArea } responsive={{S: S.padding(8)}}>
              <C.P label="「本当のことを知りたければ、経験を積まないといけない。それは試練だが、その先には真実がある。」" style={ greatWord } responsive={{ S:S.font(14)}}/>
              <C.P label="アルベルト・アインシュタイン" style={ greatMan } responsive={{ S:S.font(10)}}/>
              <C.Btn label="お問い合わせ" color="#ea0"/>
            </C.Col>
          </C.Col>
        </C.Row>
        {/* ___________________________________________________________ */}

      </Fragment>
    );
  }
}