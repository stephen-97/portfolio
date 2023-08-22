import React from 'react';
import "../style.scss"
import {connect, useSelector} from "react-redux";


import { RootState} from "../../redux/redux";
import {styled, css} from "styled-components";

type StudyProps = {
}



const createLoopCSS = styled.div`
  .active-project {
    transform: scale(0);

    ${() => {
        let cssAcc= ``;
        for (let i = 0; i < 5; i++) {
            cssAcc += css`
            &:nth-child(${i + 1}) {
              opacity: 1;
              animation: scalingBox 0.5s ease 500ms*calc($i - 1) forwards;
              background-color: gray;
            }
          `;
        }
        return cssAcc; 
    }} 
    
    
    @keyframes scalingBox {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
    
  }
  
`;



// LA CLASS active-blockstudy est dans le fichier CSS car on ne peut pas faire des loops avec styled components
const StyledSectionStudy = styled.section`
  
  .containerStudy{
    margin-top: 30px;
  }
  // STUDY
  .blockStudy {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
    width: 100%;
    font-size: 16px;
    text-align: left;
    margin-bottom: 50px;
    opacity: 0;

    h2 {
      font-size: 18px;
      margin: 5px 0px;
      color: #3b3a3a;
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
        font-size: 13px;
      }
    }
    > div {
      color: #282c34;
      font-weight: 200;
    }
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

`


const Study = (props : StudyProps) =>  {


    return(
        <StyledSectionStudy>
            <div className={'containerStudy'}>
                <div className={'blockStudy'}>
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
                </div>
                <div className={'blockStudy'}>
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
                </div>
                <div className={'blockStudy'}>
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
                </div>
            </div>
        </StyledSectionStudy>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Study);
