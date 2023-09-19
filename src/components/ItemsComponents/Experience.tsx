import React, {Dispatch, ForwardedRef, forwardRef, useEffect, useState} from 'react';
import {css, styled} from "styled-components";
import {connect } from "react-redux";
import computer from "../../assets/computer.svg"
import { RootState} from "../../redux/redux";
import constants from "../../utility/constants";
import ExperienceBlock from "./experience/ExperienceBlock";

type ExperienceProps = {
    ref: HTMLDivElement | undefined,
    animationDelay: number,
}


const animationDelay: number = 0.5;
const transitionExperienceSkillBlock: number = 0.5;

const loopBlockList = () => {
    let style = '';

    for(let i=1; i<= 5; i++){
        style+= `
            > ol:nth-of-type(${i}) {
                animation: animationListBlockExperience 1s ease-in-out ${i/3+1}s forwards;
                transform: translateX(50px);
                @keyframes animationListBlockExperience {
                  from {
                    opacity: 1;
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
            } 
            > ol:nth-of-type(2n) {
                transform: translateX(-50px)
            } 
        `
    }
    return css`${style}`
}

const loopExperienceSkills = () => {
    let style = '';

    for(let i=0; i<= 10; i++){
        style+= `
            > span:nth-of-type(${i}) {
                position: relative;
                animation: animationSkills 0.2s ease-in-out ${i*0.2}s forwards;
                @keyframes animationSkills {
                  0% {
                    transform: translate(-20px, -20px);
                    opacity: 0;
                  }
                  20% { 
                    opacity: 1;
                  }
                  to {
                    transform: translate(0, 0);
                    opacity: 1;
                  }
                }
            } 
           
        `
    }
    return css`${style}`
}

const StyledExperience = styled.section`
  & {
    position: relative;
  }

  #experienceList {
    position: relative;
    list-style-type: none;
    padding: 0;
    > li {
      
    }
  }
  
  
  .selected  {
      color: white;
  }

  #sectionBlock {
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 50px;
  }
  
  .experience-skills-block {
    top: 0;
    margin: auto;
    border-radius: ${constants.borderRadius1}px;
    position: relative;
    width: 490px;
    min-height: 350px;
    
    text-align: center;
    padding: 10px 0;
    
    // RIGHT
    &:nth-of-type(1){
      height: auto;
      min-height: auto;
      > .experience-skills-block-title {
        display: block;
        font-size: clamp(${constants.h3_min}px ,4vw, ${constants.h3_max}px);
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    
    // LEFT
    &:nth-of-type(2){
      background-color: ${constants.colorDark1};
      > .experience-skills-block-title {
        display: block;
        color: whitesmoke;
        font-size: clamp(${constants.h3_min}px ,3vw, ${constants.h3_max}px);
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    
    > img {
      margin: 0;
      filter:  ${constants.color2Filter};
    }
    
    //SKILLS RIGHT
    .skills-list  {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      
      > span {
        background-color: ${constants.colorDark2};
        opacity: 0;
        margin-top: 20px;
        width: clamp(125px, 7vw, 175px);
        padding: 20px 0 20px clamp(10px, 2vw, 30px);
        border-radius: ${constants.borderRadius1}px;
        font-weight: bolder;
        font-size: clamp(13px, 1vw, 16px);
        position: relative;
        text-align: left;
        color: whitesmoke;

        >span {
          display: block;
          font-size: clamp(15px, 1vw, 18px);
          color: ${constants.color2};
          font-weight: 100;
        }
      }
    }
    
    
    // Choice BLOCK
    ul {
      padding: 0;
      margin-top: 30px;
      
      >ol {
        opacity: 0;
        margin: 10px auto;
        width: 120px;
        padding: 0;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        text-align: left;
      }
      a {
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
      }
    }
  }

  .active-experience-skills-block{
    &:nth-of-type(1) {
      ul {
        ${loopBlockList()}
        a {
          transition: ease-in-out .2s;
          transform: scaleX(0);
          height: 4px;
          border-bottom: 0;
          transform-origin: left;
          background-color: ${constants.color1};
          position: absolute;
          bottom: -4px;
        }
        
        ol:nth-of-type(n) {
          &:hover{
            color: ${constants.color1};
            transition: ease-in-out .2s;
            a {
              transition: inherit;
              transform: scaleX(1);
              transform-origin: left;
            }
          }
        }
        
        .itemSelected {
          color: ${constants.color1};
          transition: ease-in-out .2s;
          a {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      }
    }
    
    &:nth-of-type(2) {
      transform: translateX(250px);
      animation: animation-Skills-Block ${transitionExperienceSkillBlock}s ease-in-out ${animationDelay}s forwards;
      @keyframes animation-Skills-Block {
        to {
          transform: translateX(0);
        }
      }
    }
      
    >section {
      ${loopExperienceSkills()}
    }
  }
  

`
enum Level {
    Experienced= 'Expérimenté',
    Confirmed= 'Confirmé',
    Intermediate= 'Intermédiaire',
    Basic= 'Basic',
}
interface Skill {
    name: string,
    level: string,
}


const frontEndSkills: Array<Skill> =
    [
        {name: 'REACT NATIVE', level: Level.Experienced},
        {name: 'JAVASCRIPT', level: Level.Confirmed},
        {name: 'TYPESCRIPT', level: Level.Intermediate},
        {name: 'HTML', level: Level.Experienced},
        {name: 'SCSS', level: Level.Confirmed},
        {name: 'TWIG', level: Level.Basic},
    ]

const backEndSkills: Array<Skill> =
    [
        {name: 'SYMFONY', level:    Level.Confirmed},
        {name: 'NODE', level: Level.Intermediate},
        {name: 'Express', level: Level.Intermediate},
        {name: 'MYSQL', level: Level.Basic},
        {name: 'POSTGRESQL', level: Level.Intermediate},
        {name: 'MongoDB', level: Level.Basic},
    ]


const othersToolsSkills: Array<Skill> =
    [
        {name: 'Ansible', level:    Level.Confirmed},
        {name: 'Docker', level: Level.Intermediate},
        {name: 'Terraform', level: Level.Basic},
    ]


const Experience = forwardRef<HTMLDivElement, ExperienceProps>((props: ExperienceProps, ref: ForwardedRef<HTMLDivElement>) =>  {

    const [experiencePattern, setExperiencePattern]:[ string, Dispatch<string>] = useState('FrontEnd')

    return(
        <StyledExperience>
            <section id={'sectionBlock'} >
                <div className={'experience-skills-block'}>
                    <img height={80} width={80} src={computer} alt={'computer image'}/>
                    <span className={'experience-skills-block-title'}>3 YEARS EXPERIENCES</span>
                    <ul>
                        <ol onClick={() => setExperiencePattern('FrontEnd')}  className={`${experiencePattern==='FrontEnd' ? 'itemSelected': ''}`}>
                            <a key={'BackEnd-Item'} ></a>
                            <span>Front End</span>
                        </ol>
                        <ol onClick={() => setExperiencePattern('BackEnd')}  className={`${experiencePattern==='BackEnd' ? 'itemSelected': ''}`}>
                            <a key={'FrontEnd-Item'}></a>
                            <span>Back End</span>
                        </ol>
                        <ol onClick={() => setExperiencePattern('DevOps')} className={`${experiencePattern==='DevOps' ? 'itemSelected': ''}`}>
                            <a key={'DevOps-Item'}></a>
                            <span>Devops</span>
                        </ol>
                    </ul>
                </div>
                <div className={'experience-skills-block'}>
                    <span className={'experience-skills-block-title'}>{experiencePattern}</span>
                    <section key={experiencePattern} className={'skills-list'} >
                        {
                            {
                                'FrontEnd':
                                    <>
                                        {frontEndSkills.map(e => <span>{e.name}<span>{e.level}</span></span>)}
                                    </>,
                                'BackEnd':
                                    <>
                                        {backEndSkills.map(e => <span>{e.name}<span>{e.level}</span></span>)}
                                    </>,
                                'DevOps':
                                    <>
                                        {othersToolsSkills.map(e => <span>{e.name}<span>{e.level}</span></span>)}
                                    </>
                            }[experiencePattern]
                        }
                    </section>
                </div>
            </section>
            <ul id={'experienceList'}>
                <li>
                    <ExperienceBlock
                        date1={2020}
                        date2={2023}
                        title={'GENDARMERIE NATIONALE'}
                        description={'Developpeur Web et Devops en apprentissage, trois projets effectués en tant que\n' +
                            'déveleoppeur web dont deux utilisant ReactJS et NodeJs en TypeScript et un utilisant\n' +
                            'Symfony. Un projet en Devops pour introduire la solution Airflow dans la messagerie,\n' +
                            'avec l\'utilisation de terraform, ansible et des principes architecturaux.'}

                    />
                </li>
            </ul>
        </StyledExperience>
    );
})

const mapState = (state: RootState) => state.page

export default connect(mapState)(Experience);

