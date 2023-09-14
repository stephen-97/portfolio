import React from 'react';
import {connect, useSelector} from "react-redux";

import { RootState} from "../../redux/redux";
import {styled, css} from "styled-components";
import constants from "../../constants/constants";

type StudyProps = {
    animationDelay: number,
}


const loopActiveBlock = () => {
    let style = '';
    for(let i=1; i<= 5; i++){
        style+= `
            .active-blockStudy:nth-child(${i}) {
                transform: translateX(-25%);
                animation: animateBlockStudy 0.5s ease ${(i-1)*300}ms forwards;
            }
            .active-blockStudy:nth-child(2n) {
                 transform: translateX(25%);
            } 
        `
    }
    return css`${style}`
}



// LA CLASS active-blockstudy est dans le fichier CSS car on ne peut pas faire des loops avec styled components
const StyledSectionStudy = styled.section`
  & {
    position: relative;
  }
  
  
  @keyframes animateBlockStudy {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  ${loopActiveBlock()}

  ul {
    padding: 0;
  }
  // STUDY
  .blockStudy {
    padding: 20px;
    background-color: ${constants.color3};
    box-shadow: ${constants.boxShadow};
    border-radius: 10px;
    font-size: 16px;
    text-align: left;
    margin-left: 0;
    margin-bottom: 50px;
    opacity: 0;

    h2 {
      font-size: ${constants.fontSize2};
      color: ${constants.colorWhite};
      margin: 5px 0;
      font-weight: 500;
    }
    p {
      margin: 10px 0;
      color: #282c34;
      display: flex;
      flex-wrap: wrap;
      padding: 0;

      > span {
        margin: 2px 3px 0 2px;
        background-color: #3b3a3a;
        padding: 5px ;
        border-radius: 10px;
        color: whitesmoke;
        font-size: ${constants.fontSize5};
      }
    }
    > div {
      color: #282c34;
      font-size: ${constants.fontSize4};
      font-weight: 200;
    }
  }
  
  
`


const Study = (props : StudyProps) =>  {

    return(
        <StyledSectionStudy>
            <ul>
                <ol className={'blockStudy'}>
                    <h2>RNCP36009 Directeur de projet informatique (Bac+5)</h2>
                    <div>Aston Ecole</div>
                    <p>
                        <span>Architecture Logiciel</span>
                        <span>Cloud Azure</span>
                        <span>Sécurité</span>
                        <span>Gestion de projet</span>
                        <span>Budgétisations</span>
                        <span>Normes ISO</span>
                    </p>
                </ol>
                <ol className={'blockStudy'}>
                    <h2>RNCP31678 Concepteur et Développeur d'application (Bac+3/4)</h2>
                    <div>2iTech Academy by M2i</div>
                    <p>
                        <span>Merise</span>
                        <span>UML</span>
                        <span>Javascript / TypeScript</span>
                        <span>Symfony</span>
                        <span>React</span>
                        <span>Node / Express</span>
                        <span>React Native</span>
                        <span>AWS</span>
                    </p>
                </ol>
                <ol className={'blockStudy'}>
                    <h2>L2 Informatique (Bac+2)</h2>
                    <div>Paris Descartes</div>
                    <p>
                        <span>Merise</span>
                        <span>UML</span>
                        <span>Javascript / TypeScript</span>
                        <span>Symfony</span>
                        <span>React</span>
                        <span>Node / Express</span>
                        <span>React Native</span>
                        <span>AWS</span>
                    </p>
                </ol>
            </ul>
        </StyledSectionStudy>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Study);
