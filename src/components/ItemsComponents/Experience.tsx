import React, {ForwardedRef, forwardRef} from 'react';
import {css, styled} from "styled-components";
import "../style.scss"
import {connect, useSelector} from "react-redux";
import computer from "../../assets/computer.svg"
import { RootState} from "../../redux/redux";
import constants from "../../constants/constants";


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
                animation: animationListBlockExperience 1s ease ${i/3+2}s forwards;
                @keyframes animationListBlockExperience {
                  from {
                    opacity: 0;
                  }
                  to {
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
    background-color: rebeccapurple;
  }
  
  .activeExperienceItem {
    animation: scalingBlockExperience ${transitionExperienceBlock}s ease forwards;
    @keyframes scalingBlockExperience {
      from {
        opacity: 1;
        transform: scaleX(0);
      }
      to {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
  .experienceItem{
    background-color: ${constants.color2};
    position: relative;
    padding: 10px 0;
    font-size: 25px;
    border-radius: 10px;
    transition: all ${transitionExperienceBlock}s ease;
    

    .experienceContent{
      opacity: 1;
      color: gray;
      display: flex;
      flex-direction: row;
      margin: 10px 20px;

      // Div pour le titre et la description
      .contentDescription  {
        width: 100%;
        font-size: clamp(15px, 2em, 18px);
        min-width: 0;

        .tagsExperience {
          display: flex;
          flex-wrap: wrap;

          // TAGs
          span {
            padding: 5px 10px 5px 10px;
            background-color: #282c34;
            border-radius: 10px;
            margin: 10px 10px 0 0;
            color: white;
          }
        }
      }
      .dateExperience {
        font-size: 15px;
        min-width: 100px
      }
      .titleExperience {
        margin: 0;
        font-size: 25px;
        font-weight: bolder;
      }

      .descriptionExperience {
        margin: 10px 0;
      }

      // Container des Tags
    }

    &:hover {
      transition: all ${transitionExperienceBlock}s ease;
      transform: translateY(-10px);

    }
  }
  #sectionBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    background-color: red;
    padding: 10px;
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
  
  .experienceBlock{
    border-radius: 10px;
    position: relative;
    height: 300px;
    width: 500px;
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
    
    ul {
      background-color: rebeccapurple;
      padding: 0;
      
      ${loopBlockList()}
      
      >ol {
        opacity: 0;
        background-color: green;
        padding: 0;
        margin-top: 10px;
        font-size: 20px;
        
        >span {
          color: #cbded9;
        }
      }
    }
  }
  

`


const Experience = forwardRef<HTMLDivElement, ExperienceProps>((props: ExperienceProps, ref: ForwardedRef<HTMLDivElement>) =>  {

    type ExperienceBlockProps = {
        date1: number,
        date2:  number,
        title: string,
        description: string,
    }


    const ExperienceBlock = (props: ExperienceBlockProps) => {
        return (
            <div className={'experienceItem'}>
                <div className={'experienceContent'}>
                    <span className={'dateExperience'}>{`${props.date1} ${props.date2}`}</span>
                    <div className={'contentDescription'}>
                        <h5 className={'titleExperience'}>{`${props.title}`}</h5>
                        <div className={'descriptionExperience'}> {`${props.description}`}</div>
                        <div className={'tagsExperience'}>
                            <span>CSS</span>
                            <span>React</span>
                            <span>Node</span>
                            <span>TypeScript</span>
                            <span>Ansible</span>
                            <span>Terraform</span>
                        </div>
                    </div>
            </div>
            </div>
        )
    }

    return(
        <StyledExperience>
            <section id={'sectionBlock'}>
                <div className={'experienceBlock'}>
                    <img height={70} width={70} src={computer} alt={'computer image'}/>
                    <span>3 années d'expérience</span>
                    <ul>
                        <ol><span>&lt;ol&gt;</span> Front End <span>&lt;ol/&gt;</span> </ol>
                        <ol><span>&lt;ol&gt;</span> Back End <span>&lt;ol/&gt;</span> </ol>
                        <ol><span>&lt;ol&gt;</span>  Devops <span>&lt;ol/&gt;</span> </ol>
                    </ul>
                </div>
                <div className={'experienceBlock'}>
                    a
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
