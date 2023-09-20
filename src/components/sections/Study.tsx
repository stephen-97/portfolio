import React, {ReactElement} from 'react';
import {connect} from "react-redux";
import Tag from "../Tag";
import {RootState} from "../../redux/redux";
import {styled, css, ThemeProvider} from "styled-components";
import constants from "../../utility/constants";
import config from "../../configs/config";

type StudyProps = {
    isBgColorLight: boolean,
}

type BlockStudyProps = {
    name: string,
    schoolName: string,
    tags: Array<string>,
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
    background-color: ${props => props.theme.isBgColorLight ? constants.colorLight2 : constants.colorDark2};
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
      opacity: 0.8;
      font-weight: 200;
    }
  }
`


const Study = (props: StudyProps): ReactElement => {

    const theme = {
        isBgColorLight: props.isBgColorLight,
    }

    const BlockStudy = (props: BlockStudyProps) => {
        return (
            <ol className={'block-study'}>
                <h3>{props.name}</h3>
                <span>{props.schoolName}</span>
                <ul>
                    {props.tags.map((TagName, i) => <Tag key={i} isBgColorLight={theme.isBgColorLight}
                                                         name={TagName}/>)}
                </ul>
            </ol>
        )
    }
    return (
        <ThemeProvider theme={theme}>
            <StyledSectionStudy>
                <ul>
                    {config.schoolExperiences.map((schoolExperience, i) =>
                        <BlockStudy key={i} name={schoolExperience.name} schoolName={schoolExperience.schoolName}
                                    tags={schoolExperience.tags}/>)
                    }
                </ul>
            </StyledSectionStudy>
        </ThemeProvider>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Study);
