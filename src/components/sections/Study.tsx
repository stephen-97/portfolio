import React, {ReactElement} from 'react';
import {connect} from "react-redux";
import Tag from "../Tag";
import {RootState} from "../../redux/redux";
import {styled, css, ThemeProvider} from "styled-components";
import constants from "../../utility/constants";

type StudyProps = {
    animationDelay: number,
    isBgColorLight: boolean,
}


const loopActiveBlock = () => {
    let style = '';
    for (let i = 1; i <= 5; i++) {
        style += `
            .active-block-study:nth-child(${i}) {
                transform: translateX(-25%);
                animation: animateblock-study 0.5s ease ${(i - 1) * 300}ms forwards;
            }
            .active-block-study:nth-child(2n) {
                 transform: translateX(25%);
            } 
        `
    }
    return css`${style}`
}


// LA CLASS active-block-study est dans le fichier CSS car on ne peut pas faire des loops avec styled components
const StyledSectionStudy = styled.section`
  & {
    position: relative;
  }


  @keyframes animateblock-study {
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
  .block-study {
    padding: 20px;
    background-color: ${props => props.theme.isBgColorLight ? constants.colorLight2 : constants.colorDark1};
    border-radius: ${constants.borderRadius1}px;
    font-size: 16px;
    text-align: left;
    margin-left: 0;
    margin-bottom: 50px;
    opacity: 0;

    h3 {
      font-size: clamp(${constants.h3_min}px, 4vw, ${constants.h3_max}px);
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
      font-weight: 200;
    }
  }
`


const Study = (props: StudyProps): ReactElement => {

    const theme = {
        isBgColorLight: props.isBgColorLight,
    }

    const tagsArrayBac5: Array<string> = ['Architecture logicielle', 'Cloud Azure', 'Cybersécurité','Gestion de projet','Budgétisation', 'Normes ISO'];
    const tagsArrayBac3: Array<string> = ['Merise', 'UML', 'Javascript / Typesript','Symfony','React', 'Node / Express', 'React Native', 'AWS'];
    const tagsArrayBac2: Array<string> = ['C', 'Java', 'OCaml','Algorithme','HTML', 'CSSO', 'Javascript', 'PHP'];

    return (
        <ThemeProvider theme={theme}>
            <StyledSectionStudy>
                <ul>
                    <ol className={'block-study'}>
                        <h3>RNCP36009 Directeur de projet informatique (Bac+5)</h3>
                        <span>Aston Ecole</span>
                        <ul>
                            {tagsArrayBac5.map((TagName, i) => <Tag key={i} isBgColorLight={theme.isBgColorLight} name={TagName}/>)}
                        </ul>
                    </ol>
                    <ol className={'block-study'}>
                        <h3>RNCP31678 Concepteur et Développeur d'application (Bac+3/4)</h3>
                        <span>2iTech Academy by M2i</span>
                        <ul>
                            {tagsArrayBac3.map((TagName, i) => <Tag key={i} isBgColorLight={theme.isBgColorLight} name={TagName}/>)}
                        </ul>
                    </ol>
                    <ol className={'block-study'}>
                        <h3>L2 Informatique (Bac+2)</h3>
                        <span>Paris Descartes</span>
                        <ul>
                            {tagsArrayBac2.map((TagName, i) => <Tag key={i} isBgColorLight={theme.isBgColorLight} name={TagName}/>)}
                        </ul>
                    </ol>
                </ul>
            </StyledSectionStudy>
        </ThemeProvider>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Study);
