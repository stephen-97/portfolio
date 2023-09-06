import React from 'react';
import {connect, useSelector} from "react-redux";
import {styled, ThemeProvider, css} from "styled-components";


import { RootState} from "../../redux/redux";


type ProjectProps = {
}


const theme = {
    duration: "2s",
    bgColor: "red",
}

const loopSkillsList = () => {
    let style = '';

    for(let i=1; i<= 5; i++){
        style+= `
            .skills-List > span:nth-of-type(${i}) {
                opacity: 1;
                background-color: red;
                transition: ease 1s;
                transition-delay:  ${i/3+2}s;
            } 
        `
    }
    return css`${style}`
}

const StyledSkills = styled.section`
    $duration: .5s;
  
    & {
      position: relative;
    }
    .skills-Container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        transition: ease 5s;
        flex-wrap: wrap;
    }
  
  
  .skills-Block {
    position: relative;
    overflow: hidden;
    width: 48%;
    height: 250px;
    //border: 1px  #3b3a3a solid;
    border-radius: 20px;

    .skills-Content {
      opacity: 1;
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      height: 98%;
      width: 99%;
      z-index: 1;
      border-radius: 20px;
      background-color: white;
    }
    .skills-Content > * {
      opacity: 0;
      transition: ease 1s;
    }

    .skills-Title {
      text-align: center;
      font-size: 20px;
    }

    .skills-List {
      display: flex;
      flex-wrap: wrap;
      margin: 10px;

    }
    .skills-List > span {
      opacity: 0;
      transition: ease 1s;
      font-size: 18px;
      display: inline-block;
      margin-left: 20px;
      margin-top: 20px;
      border-radius: 10px;
      padding: 5px;
      background-color: #dfdddd;
    }
  }

  
  .skills-Block:nth-of-type(1) {
    >span {
      position: absolute;
      display: block;
      background-color: black;
      transition: all calc(${props => props.theme.duration}/4)linear;
    }
    .top,  .bottom {
      width: 100%;
      height: 15px;
      transform: scaleX(0);
    }
    .left, .right {
      width: 15px;
      height: 100%;
      transform: scaleY(0);
    }
   
    .right {
      top:0;
      right: 0;
      transition-delay: 0s;
      transform-origin: top right;
    }
    .top {
      top:0;
      left: 0;
      transition-delay: calc(${props => props.theme.duration}/4);
      transform-origin: top left;
    }
    .left {
      bottom:0;
      left: 0;
      transition-delay: calc(${props => props.theme.duration}/2);
      transform-origin: bottom left;
    }
    .bottom {
      bottom:0;
      right: 0;
      transition-delay: calc(${props => props.theme.duration}*3/4);
      transform-origin: bottom right;
    }
  }



  .skills-Block:nth-of-type(2) {
    >span {
      position: absolute;
      display: block;
      background-color: black;
      transition: all calc(${props => props.theme.duration}/4)linear;
    }
    .top,  .bottom {
      width: 100%;
      height: 15px;
      transform: scaleX(0);
    }
    .left, .right {
      width: 15px;
      height: 100%;
      transform: scaleY(0);
    }

    .left {
      top:0;
      left: 0;
      transform-origin: top left;
    }
    .top {
      top:0;
      left: 0;
      transition-delay: calc(${props => props.theme.duration}/4);
      transform-origin: top right;
    }
    .right {
      top:0;
      right: 0;
      transition-delay: calc(${props => props.theme.duration}/2);
      transform-origin: bottom left;
    }
    .bottom {
      bottom:0;
      right: 0;
      transition-delay: calc(${props => props.theme.duration}*3/4);
      transform-origin: bottom left;
    }
  }


  .active-skills-Container  {
    .skills-Block:nth-of-type(1){
      .bottom {
        transition-delay: 0s;
      }
      .left {
        transition-delay: calc( ${props => props.theme.duration}/4);
      }
      .top {
        transition-delay: calc( ${props => props.theme.duration}/2);
      }
      .right {
        transition-delay: calc( ${props => props.theme.duration}*3/4);;
      }
      .top, .bottom {
        transform: scaleX(1);
      }
      .left, .right {
        transform: scaleY(1);
      }
    }
    .skills-Block:nth-of-type(2) {
      .bottom {
        transition-delay: 0s;
      }
      .right {
        transition-delay:  calc( ${props => props.theme.duration}/4) ;
      }
      .top {
        transition-delay: calc( ${props => props.theme.duration}/2);
      }
      .left {
        transition-delay: calc( ${props => props.theme.duration}*3/4);
      }
      .top, .bottom {
        transform: scaleX(1);
      }
      .left, .right {
        transform: scaleY(1);
      }
    }

    .skills-Content > *{
        opacity: 1;
        transition: ease 1s;
        transition-delay: ${props => props.theme.duration};
    }
    
    ${loopSkillsList()}
  }
}
  
`




/**
 *
 *
 *       .skills-active-blocks {
 *         transform: scale(0);
 *
 *       @for $i from 1 through 3 {
 *         &:nth-child(#{$i}) {
 *           opacity: 1;
 *           animation: scalingBox 0.5s ease 500ms*calc($i - 1) forwards;
 *           background-color: gray;
 *         }
 *       }
 *
 *         @keyframes scalingBox {
 *           from {
 *             transform: scale(0);
 *           }
 *           to {
 *             transform: scale(1);
 *           }
 *         }
 *       }
 * @param props
 * @constructor
 */
const Skills = (props : ProjectProps) =>  {

    return(
        <ThemeProvider theme={theme}>
            <StyledSkills>
                <div className={'skills-Container'}>
                    <div className={'skills-Block block1'}>

                        <div className={'skills-Content'}>
                            <h4 className={'skills-Title'}>FrontEnd Developpement</h4>
                            <div className={'skills-List'}>
                                <span>HTML</span>
                                <span>SCSS</span>
                                <span>JavaScript</span>
                                <span>TypeScript</span>
                                <span>React</span>
                                <span>React Native</span>
                            </div>
                        </div>

                        <span className={'top'}></span>
                        <span className={'right'}></span>
                        <span className={'bottom'}></span>
                        <span className={'left'}></span>

                    </div>

                    <div className={'skills-Block block2'}>

                        <div className={'skills-Content'}>
                            <h4 className={'skills-Title'}>BackEnd Developpement</h4>
                            <div className={'skills-List'}>
                                <span>PostgreSQL</span>
                                <span>MongoDB</span>
                                <span>Express JS</span>
                                <span>Node JS</span>
                                <span>Symfony</span>
                            </div>
                        </div>

                        <span className={'top'}></span>
                        <span className={'right'}></span>
                        <span className={'bottom'}></span>
                        <span className={'left'}></span>
                    </div>
                </div>
            </StyledSkills>
        </ThemeProvider>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Skills);
