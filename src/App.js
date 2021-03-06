/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import pengsu from "./assets/pengsu.png";
import search from "./assets/search.png";
import search_ad from "./assets/search_ad.png";
import menuImg from "./assets/menu.png";
import epick from "./assets/epick.png";
import logo from "./assets/logo.png";
import cost_center from "./assets/cost_center.png";
import bn_footer from "./assets/bn_footer.png";
import adban from "./assets/adban.png";
import yaho from "./assets/yaho.png";
import soluni from "./assets/soluni.png";
import youtube from "./assets/youtube.png";
import facebook from "./assets/facebook.png";
import insta from "./assets/insta.png";
import kakao from "./assets/kakao.png";
import blog from "./assets/blog.png";
import arrow from "./assets/arrow.png";

import ImgCard from "./components/ImgCard";
import Card from "./components/Card";

import ad_1 from "./img/ad_1.png";
import ad_2 from "./img/ad_2.png";



const Header1 = styled.div`
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  height:47px;
`
const Header2 = styled.div`
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  height:93px;
`
const Button1 = styled.button`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF; 
  background-color:#4E81C0;
  border: none;
`
const Button2 = styled.button`
  align-self: flex-end;
  margin-left: 12px;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF; 
  font-weight: 550;
  background-color:#4E81C0;
  border: none;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`

const Center = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:15px;
  align-items: center;
`

const Input = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:white;
  margin-left: 15px;
  width:850px;
  height:60px;
  border:5px solid #5981bb;
  outline: none;
`

const InputConsol = styled.input`
  border: 1px solid white;
  width: 800px;
  margin-left: 15px;
  outline: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:50px;
  //?????? ??????
`
const ImgCardWrapper = styled.div`
  display: grid;   
  grid-template-columns: 220px 220px 220px 220px;
  grid-template-rows: 180px 180px;
`
const AdCard = styled.button`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 5px 10px 0px rgba(97,97,97,0.25);
  height: 160px;
  width: 420px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  :hover{
      background-color: gray;
  }

`
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ImgCardWrapper2 = styled.div`
  display: grid; 
  grid-template-columns: 440px 220px 220px;
  grid-template-rows: 180px;

`
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
	grid-template-rows: 95px 95px 95px 95px 95px 95px;
`

const Navigation = styled.div`
  background-color: #e0e0e0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
`
const Menu = styled.a`
  background-color: #e0e0e0;
  border-radius: 30px;
  height:40px;
  width: 160px;
  outline: none;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 25px;
  color: #55585c;
  text-decoration: none;
  margin-bottom: 10px;
  :active{
    background-color: #4E81C0;
  }
  :focus{
    background-color: #4E81C0;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
`

const Link = styled.button`
  align-self: flex-start;
  background-color: #FFFFFF;
  background-size: 100%;
  border: none;
  border-radius: 100%;
  width: 45px;
  height: 45px;
`
const Footer = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`
const Button3 = styled.button`
  align-self: flex-start;
  margin-left: 13px;
  margin-top: 31px;
  font-size: 11px;
  line-height: 15px;
  color: #111111;
  background-color: #FFFFFF;
  border: none;
`
const Button4 = styled.button`
  align-self: flex-start;
  margin-left: 13px;
  margin-top: 31px;
  font-size: 11px;
  font-weight: bold;
  line-height: 15px;
  color: #111111;
  background-color: #FFFFFF;
  border: none;
`
const Button5 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
background-color: #FFFFFF;
border: none;
border-radius: 50px;
height: 45;
width: 120px;
font-size: 16px;
`   


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCards: [{link:"http://ebs.co.kr", tag:"??????"}, {link:"http://ebs.co.kr", tag:"??????"},{link:"http://ebs.co.kr", tag:"??????"},{link:"http://ebs.co.kr", tag:"??????"},{link:"http://ebs.co.kr", tag:"??????"},{link:"http://ebs.co.kr", tag:"??????"},{link:"http://ebs.co.kr", tag:"??????"},{link:"http://ebs.co.kr", tag:"??????"}],
      cards: [{link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}, {link:"http://ebs.co.kr", name:"??????"}],
      notice_1: [{article:"1-1??? ???"}, {article:"1-2??? ???"}, {article:"1-3??? ???"}, {article:"1-4??? ???"}, {article:"1-5??? ???"}],
      notice_2: [{article:"2-1??? ???"}, {article:"2-2??? ???"}, {article:"2-3??? ???"}, {article:"2-4??? ???"}, {article:"2-5??? ???"}],
      notice_3: [{article:"3-1??? ???"}, {article:"3-2??? ???"}, {article:"3-3??? ???"}, {article:"3-4??? ???"}, {article:"3-5??? ???"}],
      menu: 0
    }
  }
  
  menuChange = (change) => {
    this.setState({menu: change})
  }

  render() {
    const {imgCards, cards, menu} = this.state;
    const contents = {
      0: this.state.notice_1,
      1: this.state.notice_2,
      2: this.state.notice_3,
    }
    return(
      <Wrapper>

        <Header1>
          <Button1 style = {{marginLeft: '120px'}}><img src={menuImg} alt='menu'/></Button1>
          <Button1>????????? ?????????</Button1>
          <Button1>?????????(?????????)</Button1>
          <Button1 style = {{marginLeft: "735px"}}>?????????</Button1>
          <Button1 style>???????????????</Button1>
          <Button1>????????????</Button1>
          <Button1>?????????</Button1>
        </Header1>

        <Header2>
          <Button2 style = {{marginLeft: "120px"}}>TV</Button2>
          <Button2>?????????</Button2>
          <Button2>??????</Button2>
          <Button2><img src={epick} alt="epick"/></Button2>
          <Button2 style={{marginLeft: "280px"}}><img src={logo} alt="logo"/></Button2>
          <Button2 style={{marginLeft: "310px"}}>????????????</Button2>
          <Button2>?????????</Button2>
          <Button2>?????????</Button2>
        </Header2>

        <Center>
          <img src={pengsu} width='550px' alt='pengsu'/>

          <InputWrapper>
            <img src={search_ad} width='110px' height='50px' alt='search_ad'/>
            <Input>
              <InputConsol placeholder="???-Pick) EBS?????? ?????? ?????? ?????????"/>
              <img src={search} alt='search' style={{margin:"10px"}}/>
            </Input>
          </InputWrapper>

          <Container>
            <ImgCardWrapper>
              {imgCards.map(card => (
                <ImgCard
                  link={card.link}
                  tag={card.tag}
                />
              ))}
              <SubContainer>
                <ImgCardWrapper2>
                  <img src = {ad_1} width = '410px' height = '160px' style = {{marginLeft: '10px'}}></img>
                  <ImgCard></ImgCard>
                  <ImgCard></ImgCard>
                </ImgCardWrapper2>
              </SubContainer>
            </ImgCardWrapper>
            
            <CardWrapper>
              {cards.map(card => (
                <Card
                  link={card.link}
                  name={card.name}
                />
              ))}
            </CardWrapper>
          </Container>

          <img src={adban} width='1000px' height='100px' alt='adban' style={{marginTop:"40px", marginBottom:"25px"}}></img>
        </Center>

        <Navigation>
          <Wrapper style={{marginLeft: "80px"}}>
            <Menu id='target0' onClick={()=>this.menuChange(0)}>????????? ??????</Menu>
            <Menu id='target1' onClick={()=>this.menuChange(1)}>?????? ??????</Menu>
            <Menu id='target2' onClick={()=>this.menuChange(2)}>EBS ??????</Menu>
          </Wrapper>
          <Wrapper style={{width: "350px"}}>
            <ul>
              {contents[menu].map(content => (
                <li>{content.article}</li>
              ))}
            </ul>
          </Wrapper>
          <Wrapper>
              <LinkWrapper>
                <Button5>EBS ???<img width="20px" src={arrow} alt="arrow" style={{width:"15px", marginLeft: "6px", marginBottom:"2px"}}></img></Button5>
                <Link><img src={blog} width="25px" alt="blog"></img></Link>
                <Link><img src={facebook} width="25" alt="facebook"></img></Link>
                <Link><img src={kakao} width="25" alt="kakao"></img></Link>
                <Link><img src={youtube} width="25" alt="youtube"></img></Link>
                <Link><img src={insta} width="25" alt="insta"></img></Link>
              </LinkWrapper>
              <img src={yaho} width="420px" alt="yaho" style={{marginTop: "20px"}}/>
          </Wrapper>
          <Wrapper>
            <img src={soluni} width="300px" height="205px" alt="soluni" style={{marginLeft: "50px"}}/>
          </Wrapper>
        </Navigation>

        <Footer height="58px">
          <Button4 style = {{marginLeft: '115px'}}>EBS ??????</Button4>
          <Button3>EBS ??????</Button3>
          <Button3>????????? ?????? ??????</Button3>
          <Button3>EBS????????????</Button3>
          <Button4>????????????</Button4>
          <Button4>??????/????????????</Button4>
          <Button3>????????????</Button3>
          <Button4 style = {{color: '#4E81C0'}}>????????????????????????</Button4>
          <Button3>????????? ????????????</Button3>
          <Button3>???????????? ????????? ??????</Button3>
          <img src={bn_footer} alt='bn_footer' width='136px' height='80px' style={{marginLeft: '25px', marginTop: '10px'}}></img>
          <img src={cost_center} alt='cost_center' width='136px' height='80px' style={{marginLeft: '20px', marginTop: '12px'}}></img>
        </Footer>
        <Footer height="27px">
          <a style = {{marginTop: '12px', marginLeft: '115px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF',fontWeight: 'bold' }}>10393 &nbsp;</a>
          <a style = {{marginTop: '12px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>????????? ????????? ???????????? ??????????????? 281 &nbsp;???????????????????????? 
           &nbsp; ????????????????????? : 229-82-01343 (?????????????????????????????? ?????????) </a>
        </Footer>
        <Footer height="27px">
          <a style = {{marginLeft: '115px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>????????????????????? :</a>
          <a style = {{fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF', fontWeight: 'bold' }}>&nbsp;hotline@ebs.co.kr </a>
          <a style = {{fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>&emsp; ???????????????????????? : 10077 ????????????????????? : 
          ???????????????-1415??? [?????????????????????]</a>
        </Footer>
        <Footer height="27px">
          <a style = {{marginLeft: '115px', marginBottom: '20px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>Copyright ??? EBS. All Rights Reserved. </a>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;