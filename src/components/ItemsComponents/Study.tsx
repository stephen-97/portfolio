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
    box-shadow: ${constants.boxShadow};
    border-radius: ${constants.borderRadius1}px;
    font-size: 16px;
    text-align: left;
    margin-left: 0;
    margin-bottom: 50px;
    opacity: 0;

    h2 {
      font-size: ${constants.fontSize2};
      color: ${constants.colorLight1};
      margin: 5px 0;
      font-weight: 500;
    }
    ul {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
    }
    > div {
      font-size: ${constants.fontSize4};
      font-weight: 200;
    }
  }
  
  
`


const Study = (props : StudyProps): ReactElement =>  {

    return(
        <StyledSectionStudy>
            <ul>
                <ol className={'blockStudy'}>
                    <h2>RNCP36009 Directeur de projet informatique (Bac+5)</h2>
                    <div>Aston Ecole</div>
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
                    <h2>RNCP31678 Concepteur et Développeur d'application (Bac+3/4)</h2>
                    <div>2iTech Academy by M2i</div>
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
                    <h2>L2 Informatique (Bac+2)</h2>
                    <div>Paris Descartes</div>
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
