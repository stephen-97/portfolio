import React from 'react';
import {styled} from "styled-components"
import constants from "../../../utility/constants";
import Tag from "../../Tag";


type ExperienceBlockPops = {
    date1: number,
    date2: number,
    title: string,
    description: string,
}


const animationDelay: number = 0;
const transitionExperienceBlock: number = 0.5;


const StyledExperienceBlock = styled.section`
  position: relative;

  .activeExperienceItem {
    animation: translateExperienceItem ${transitionExperienceBlock}s ease-in-out ${animationDelay}s forwards;
    @keyframes translateExperienceItem {
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }

  .experienceItem {
    position: relative;
    transform: translateY(100px);
    background-color: ${constants.colorDark1};
    font-size: 25px;
    border-radius: ${constants.borderRadius1}px;
    transition: all ${transitionExperienceBlock}s ease;

    .experience-date {
      width: 500px;
      font-size: ${constants.fontSize3};
      text-align: center;
      flex: 2;
    }

    // Div pour le titre et la description
    .contentDescription {
      margin: 35px;
      padding: 20px 0;
      font-size: clamp(15px, 2em, 18px);
      min-width: 0;

      .tagsExperience {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
      }
    }

    .title-experience {
      margin: 10px 0;
      font-size: clamp(${constants.h3_min}, 3vw, ${constants.h3_max});
      color: ${constants.colorLight1};
      font-weight: bold;
    }

    .experience-description {
      color: ${constants.colorLight2};
      margin: 15px 0;
    }
  }
`


const ExperienceBlock = (props: ExperienceBlockPops) => {

    return (
        <StyledExperienceBlock>
            <div className={'experienceItem'}>
                <div className={'contentDescription'}>
                    <h3 className={'title-experience'}>{`${props.title}`}</h3>
                    <span className={'experience-date'}>{`${props.date1} ${props.date2}`}</span>
                    <p className={'experience-description'}> {`${props.description}`}</p>
                    <ul className={'tagsExperience'}>
                        <Tag name={'CSS'}/>
                        <Tag name={'React'}/>
                        <Tag name={'Node'}/>
                        <Tag name={'Typescript'}/>
                        <Tag name={'Ansible'}/>
                        <Tag name={'Terraform'}/>
                    </ul>
                </div>
            </div>
        </StyledExperienceBlock>
    )

}


export default ExperienceBlock;
