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


const animationDelay: number = 0;
const transitionExperienceBlock: number = 0.5;



const StyledExperienceBlock = styled.section`
  & {
    position: relative;
  }

  .activeExperienceItem {
    animation: translateExperienceItem ${transitionExperienceBlock}s ease-in-out ${animationDelay}s forwards;
    @keyframes translateExperienceItem {
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
  
  .experienceItem{
    position: relative;
    transform: translateY(100px);
    background-color: ${constants.color3};
    box-shadow: ${constants.boxShadow};
    color: black;
    font-size: 25px;
    border-radius: 10px;
    transition: all ${transitionExperienceBlock}s ease;

    .dateExperience {
      width: 500px;
      font-size: ${constants.fontSize2};
      text-align: center;
      flex: 2;
    }
      // Div pour le titre et la description
      .contentDescription  {
        margin: 35px;
        padding: 20px 0;
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
      .titleExperience {
        margin: 10px 0;
        font-size: ${constants.fontSize1};
        color: ${constants.colorWhite};
        font-weight: bold;
      }

      .descriptionExperience {
        margin: 15px 0;
      }

      // Container des Tags

    &:hover {
      transition: all ${transitionExperienceBlock}s ease;
      transform: translateY(-10px);
    }
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
                    <div className={'contentDescription'}>
                        <h5 className={'titleExperience'}>{`${props.title}`}</h5>
                        <span className={'dateExperience'}>{`${props.date1} ${props.date2}`}</span>
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
        </StyledExperienceBlock>
    )

})

const mapState = (state: RootState) => state.page

export default connect(mapState)(ExperienceBlock);
