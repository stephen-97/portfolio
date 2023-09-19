import React, {ReactElement} from 'react';
import {connect } from "react-redux";
import Tag from "../Tag";
import { RootState} from "../../redux/redux";
import {styled, css} from "styled-components";
import constants from "../../utility/constants";

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
    background-color: ${constants.colorDark1};
    border-radius: ${constants.borderRadius1}px;
    font-size: 16px;
    text-align: left;
    margin-left: 0;
    margin-bottom: 50px;
    opacity: 0;

    h3 {
      font-size: clamp(${constants.h3_min}px ,4vw, ${constants.h3_max}px);
      color: ${constants.colorLight1};
      margin: 5px 0 15px 0;
      font-weight: 500;
    }
    ul {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
    }
    > span {
      font-size: ${constants.fontSize4};
      color: ${constants.colorLight2};
      font-weight: 200;
    }
  }
`


const Study = (props : StudyProps): ReactElement =>  {

    return(
        <StyledSectionStudy>
            <ul>
                <ol className={'blockStudy'}>
                    <h3>RNCP36009 Directeur de projet informatique (Bac+5)</h3>
                    <span>Aston Ecole</span>
                    <ul>
                        <Tag name={'Architecture logicielle'}/>
                        <Tag name={'Cloud Azure'}/>
                        <Tag name={'Cybersécurité'}/>
                        <Tag name={'Gestion de projet'}/>
                        <Tag name={'Budgétisation'}/>
                        <Tag name={'Normes ISO'}/>
                    </ul>
                </ol>
                <ol className={'blockStudy'}>
                    <h3>RNCP31678 Concepteur et Développeur d'application (Bac+3/4)</h3>
                    <span>2iTech Academy by M2i</span>
                    <ul>
                        <Tag name={'Merise'}/>
                        <Tag name={'UML'}/>
                        <Tag name={'Javascript / Typesript'}/>
                        <Tag name={'Symfony'}/>
                        <Tag name={'React'}/>
                        <Tag name={'Node / Express'}/>
                        <Tag name={'React Native'}/>
                        <Tag name={'AWS'}/>
                    </ul>
                </ol>
                <ol className={'blockStudy'}>
                    <h3>L2 Informatique (Bac+2)</h3>
                    <span>Paris Descartes</span>
                    <ul>
                        <Tag name={'C'}/>
                        <Tag name={'Java'}/>
                        <Tag name={'OCaml'}/>
                        <Tag name={'Algorithme'}/>
                        <Tag name={'HTML'}/>
                        <Tag name={'CSS'}/>
                        <Tag name={'Javascript'}/>
                        <Tag name={'PHP'}/>
                    </ul>
                </ol>
            </ul>
        </StyledSectionStudy>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Study);
