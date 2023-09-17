import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {css, styled} from "styled-components";
import {connect, useSelector} from "react-redux";
import constants from "../../utility/constants";
import functions from "../../utility/functions";
import {RootState} from "../../redux/redux";


type ProjectProps = {
    animationDelay: number,
}
const loopProjectsContainer = () => {
    let style: string = '';
    for(let i: number=1; i<= 5; i++){
        style+= `
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
const StyledProject = styled.section`
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
      height: 400px;
      width: 350px;
      background-color: ${constants.colorDark1};
      list-style: none;
      border-radius: ${constants.borderRadius1}px;
      margin: 0 0 30px 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    main{
      flex: 1;
      background-color: darkred;
    }
  
    footer {
      height: 80px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  
    a {
      width: 30%;
      height: 50px;
      display: table-cell;
      vertical-align: center;
      background-color: ${constants.colorDark2};
      border-radius: ${constants.borderRadius1}px;
      border: 2px ${constants.color2} solid;
      cursor: pointer;
      color: ${constants.colorLight1};
      
      &:hover {
        background-color: ${constants.color1};
        color: ${constants.colorDark1};
        transition: 0.5s ease-in-out;
      }
    }
`




const Projects = (props : ProjectProps) =>  {

    const [windowsWidth, setWindowsWidth]: [number, Dispatch<SetStateAction<number>>] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowsWidth(window.innerWidth) )
        if(functions.detectWrap('project'))
            (document.getElementById('project-container') as HTMLElement).style.justifyContent = 'center'
        else
            (document.getElementById('project-container') as HTMLElement).style.justifyContent = 'space-around'
    }, [windowsWidth]);


    return(
        <StyledProject>
            <ul id={'project-container'}>
                <li className={'project'}>
                    <header>
                        Portfolio
                    </header>
                    <main>
                        <ul>
                            <li>React</li>
                            <li>Typescript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Responsive</li>
                        </ul>
                    </main>
                    <footer>
                        <a>GITHUB</a>
                        <a >DEMO</a>
                    </footer>
                </li>
                <li className={'project'}>
                    <header>
                        Projet d'étude
                    </header>
                    <main>
                        <ul>
                            <li>React Native</li>
                            <li>Javascript</li>
                            <li>Symfony</li>
                            <li>Docker</li>
                        </ul>
                    </main>
                    <footer>
                        <a>GITHUB</a>
                        <a>DEMO</a>
                    </footer>
                </li>
            </ul>
        </StyledProject>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Projects);
