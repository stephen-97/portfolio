import React, {Dispatch, ForwardedRef, forwardRef, useEffect, useState} from 'react';
import {css, styled} from "styled-components";
import "../style.scss"
import {connect, useSelector} from "react-redux";
import computer from "../../assets/computer.svg"
import { RootState} from "../../redux/redux";
import constants from "../../constants/constants";
import ExperienceBlock from "./experience/ExperienceBlock";

type ExperienceProps = {
    ref: HTMLDivElement | undefined,
    animationDelay: number,
}


const animationDelay: number = constants.duration_itemAnim;
const transitionExperienceBlock: number = 1;

const loopBlockList = () => {
    let style = '';

    for(let i=1; i<= 5; i++){
        style+= `
            > ol:nth-of-type(${i}) {
                animation: animationListBlockExperience 1s ease-in-out ${i/3+0.5}s forwards;
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
                background-color: purple;
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

const changeClassName = (e: Element) => {
    document.querySelectorAll('.s')
}

const StyledExperience = styled.section`
  & {
    position: relative;
  }

  #experienceList {
    position: relative;
    background-color: rebeccapurple;
  }
  
  .activeExperienceBlock {
    animation: scalingBlockExperience 1s ease forwards;
    @keyframes scalingBlockExperience {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }
  }
  
  .selected  {
      color: white;
  }
  .experienceBlock{
    height: 0;
    top: 0;
    border-radius: 10px;
    position: relative;
    width: 500px;
    text-align: center;
    padding: 10px 0;
  }

  #sectionBlock {
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    background-color: red;
    margin-bottom: 50px;
  }
  
  .experienceAnne {
    top: 0;
    border-radius: 10px;
    position: relative;
    width: 500px;
    height: 300px;
    background-color: yellow;
    text-align: center;
    padding: 10px 0;
    
    > img {
      background-color: #61dafb;
      margin: 0;
    }
    > span {
      display: block;
      background-color: #cbded9;
      font-size: 23px;
      font-weight: bold;
    }
    
    .skills-list  {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      
      > span {
        display: block;
        opacity: 0;
        margin-top: 20px;
        width: 100px;
        padding: 10px 15px;
        border-radius: 10px;
        background-color: #282c34;
        font-weight: bolder;
        position: relative;
        
        >span {
          display: block;
          font-weight: 200;
          color: whitesmoke;
        }
      }
    }

    .skills-list  {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      > span {
        display: block;
        opacity: 0;
        margin-top: 20px;
        width: 100px;
        padding: 10px 15px;
        border-radius: 10px;
        background-color: #282c34;
        font-weight: bolder;
        position: relative;

        >span {
          display: block;
          font-weight: 200;
          color: whitesmoke;
        }
      }
    }
    
    ul {
      background-color: rebeccapurple;
      padding: 0;

      >ol {
        opacity: 0;
        background-color: green;
        padding: 0;
        margin-top: 10px;
        font-size: 20px;
        cursor: pointer;

        >span {
          color: #cbded9;
        }
      }
    }
  }

  .active-experienceAnne {
    >section {
      ${loopExperienceSkills()}
    }
    ul {
      ${loopBlockList()}
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

/**
 * <span>DevOps</span>
 *                             <section    key={experiencePattern}  className={'skills-list'} id={'DevOps'}>
 *                                 <span>Ansible <span>Intermédiaire</span></span>
 *                                 <span>Docker <span>Intermédiaire</span></span>
 *                                 <span>Terraform <span>Basic</span></span>
 *                             </section>
 *
 *
 * <span>BackEnd</span>
 *                             <section  key={experiencePattern} className={'skills-list'}  id={'BackEnd'}>
 *                                 <span>SYMFONY <span>Confirmé</span></span>
 *                                 <span>NODE JS<span>Intermédiaire</span></span>
 *                                 <span>Express<span>Intermédiaire</span></span>
 *                                 <span>MYSQL<span>Basic</span></span>
 *                                 <span>POSTGRESQL<span>Intermédiaire</span></span>
 *                                 <span>MongoBB <span>Basic</span></span>
 *                             </section>
 */
const othersToolsSkills: Array<Skill> =
    [
        {name: 'Ansible', level:    Level.Confirmed},
        {name: 'Docker', level: Level.Intermediate},
        {name: 'Terraform', level: Level.Basic},
    ]


const Experience = forwardRef<HTMLDivElement, ExperienceProps>((props: ExperienceProps, ref: ForwardedRef<HTMLDivElement>) =>  {


    const [experiencePattern, setExperiencePattern]:[ string, Dispatch<string>] = useState('FrontEnd')


    useEffect(() => {
        document.querySelectorAll('.skills-list')
    }, []);

    const choicePattern = (s: string) => {
        setExperiencePattern(s);
        switch (s) {
            case 'FrontEnd':
                document.querySelectorAll('.skills-list').forEach((e: Element) => e!.classList.remove('active-experienceAnne'))
                document.getElementById(s)!.classList.add('active-experienceAnne');
                break;
            case 'BackEnd':
                //document.getElementById('FrontEnd')!.classList.remove('active-experienceAnne');
                //document.getElementById('DevOps')!.classList.remove('active-experienceAnne');
                document.querySelectorAll('.skills-list').forEach((e: Element) => e!.classList.remove('active-experienceAnne'))
                document.getElementById(s)!.classList.add('active-experienceAnne');
                break;
            case 'DevOps':
                //document.getElementById('FrontEnd')!.classList.remove('active-experienceAnne');
                //document.getElementById('BackEnd')!.classList.remove('active-experienceAnne');
                document.querySelectorAll('.skills-list').forEach((e: Element) => e!.classList.remove('active-experienceAnne'))
                document.getElementById(s)!.classList.add('active-experienceAnne');
                break;
            default:
                break;
        }
    }



    return(
        <StyledExperience>
            <section id={'sectionBlock'} >
                <div className={'experienceAnne'}>
                    <img height={70} width={70} src={computer} alt={'computer image'}/>
                    <span>3 années d'expérience</span>
                    <ul>
                        <ol onClick={() => setExperiencePattern('FrontEnd')} ><span>&lt;ol&gt;</span> Front End <span>&lt;ol/&gt;</span> </ol>
                        <ol onClick={() => setExperiencePattern('BackEnd')}><span>&lt;ol&gt;</span> Back End <span>&lt;ol/&gt;</span> </ol>
                        <ol onClick={() => setExperiencePattern('DevOps')}><span >&lt;ol&gt;</span>  Devops <span>&lt;ol/&gt;</span> </ol>
                    </ul>
                </div>
                <div className={'experienceAnne'}>
                    <span>{experiencePattern}</span>
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
                        title={'Gendarmerie Nationale'}
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

