import React, {Dispatch, ForwardedRef, forwardRef, useEffect, useState} from 'react';
import {css, styled} from "styled-components";
import {connect, useSelector} from "react-redux";
import { RootState} from "../../../redux/redux";
import constants from "../../../constants/constants";


type ExperienceBlockPops = {
    date1: number,
    date2: number,
    title: string,
    description: string,
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

const loopExperienceSkills = () => {
    let style = '';

    for(let i=1; i<= 10; i++){
        style+= `
            > span:nth-of-type(${i}) {
                position: relative;
                background-color: purple;
                animation: animationSkills 1s ease ${i/3+0.5}s forwards;
                @keyframes animationSkills {
                  0% {
                    transform: translate(-20px, -20px);
                    opacity: 0;
                  }
                  50% { 
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
    document.querySelectorAll('.')
}

const StyledExperienceBlock = styled.section`
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
  

`


const ExperienceBlock = forwardRef<HTMLDivElement, ExperienceBlockPops>((props: ExperienceBlockPops, ref: ForwardedRef<HTMLDivElement>) =>  {


    return (
        <StyledExperienceBlock>
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
        </StyledExperienceBlock>
    )

})

const mapState = (state: RootState) => state.page

export default connect(mapState)(ExperienceBlock);
