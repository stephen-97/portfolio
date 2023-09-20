import React, {Dispatch, ReactElement, SetStateAction, useEffect, useState} from 'react';
import {css, styled, ThemeProvider} from "styled-components";
import {connect} from "react-redux";
import constants from "../../utility/constants";
import functions from "../../utility/functions";
import {RootState} from "../../redux/redux";
import config from "../../configs/config";
import Tag from "../Tag";

type ProjectContainerProps = {
    isBgColorLight: boolean,
}

type ProjectProps = {
    title: string,
    description: string,
    tags: Array<string>,
    githubLink: string,
    demoLink?: string,
}

const loopProjectsContainer = () => {
    let style: string = '';
    for (let i: number = 1; i <= 5; i++) {
        style += `
            .active-project:nth-of-type(${i}) {
                transform: translateX(-25%);
                animation: contactBlockAnimation 0.3s ease-in-out 0.3s forwards;
                @keyframes contactBlockAnimation {
                  to {
                    transform: translateY(0);
                  }
                }
            } 
            .active-project:nth-child(2n) {
                 transform: translateX(25%);
            } 
        `
    }
    return css`${style}`
}

const StyledProjectsContainer = styled.section`
  & {
    position: relative;
  }

  #project-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0;
    justify-content: space-around;
  }

  ${loopProjectsContainer()}
  .project {
    height: 350px;
    width: 350px;
    background-color: ${props => props.theme.isBgColorLight ? constants.colorLight2 : constants.colorDark2};
    list-style: none;
    border-radius: ${constants.borderRadius1}px;
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    header {
      font-size: ${constants.fontSize1};
      text-align: center;
      padding: 20px;
      font-weight: bolder;
    }

    main {
      flex: 1;
      padding: 10px 20px;

      p {
        margin: 10px 0;
        font-size: clamp(17px, 2vw, 18px);;
      }

      > ul {
        padding: 15px 0;
        display: flex;
        flex-wrap: wrap;
      }
    }

    footer {
      height: 80px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      a {
        width: 30%;
        height: 50px;
        display: flex;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        font-size: ${constants.fontSize4};
        font-weight: bolder;
        background-color: ${props => props.theme.isBgColorLight ? constants.colorLight1 : constants.colorDark1};
        border-radius: ${constants.borderRadius1}px;
        border: 2px ${props => props.theme.isBgColorLight ? constants.colorDarkGreen : constants.colorLightGreen} solid;
        cursor: pointer;
        color: ${props => props.theme.isBgColorLight ? constants.colorDark1 : constants.colorLight1};

        &:hover {
          background-color: ${props => props.theme.isBgColorLight ? constants.colorDarkGreen : constants.colorLightGreen};
          color: ${props => props.theme.isBgColorLight ? constants.colorLight1 : constants.colorDark2};;
          transition: 0.5s ease-in-out;
        }
      }
    }
  }
`

const ProjectsContainer = (props: ProjectContainerProps): ReactElement => {

    const [windowsWidth, setWindowsWidth]: [number, Dispatch<SetStateAction<number>>] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowsWidth(window.innerWidth))
        if (functions.detectWrap('project'))
            (document.getElementById('project-container') as HTMLElement).style.justifyContent = 'center'
        else
            (document.getElementById('project-container') as HTMLElement).style.justifyContent = 'space-around'
    }, [windowsWidth]);

    const theme = {
        isBgColorLight: props.isBgColorLight,
    }

    const Project = (props: ProjectProps): ReactElement => {
        return (
            <li className={'project'}>
                <header>
                    {props.title}
                </header>
                <main>
                    <p>{props.description}</p>
                    <ul>
                        {props.tags.map((tagName, i) => <Tag isBgColorLight={theme.isBgColorLight} key={i}
                                                             name={tagName}/>)}
                    </ul>
                </main>
                <footer>
                    <a href={props.githubLink} target={'_blank'}>GITHUB</a>
                    {props.demoLink ? <a href={props.demoLink} target={'_blank'}>DEMO</a> : null}
                </footer>
            </li>
        )
    }


    return (
        <ThemeProvider theme={theme}>
            <StyledProjectsContainer>
                <ul id={'project-container'}>
                    {config.projects.map((e, i) => <Project key={i} title={e.title} description={e.description}
                                                            tags={e.tags} githubLink={e.githubLink}
                                                            demoLink={e.demoLink}/>)}
                </ul>
            </StyledProjectsContainer>
        </ThemeProvider>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(ProjectsContainer);
