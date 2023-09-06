import React, {ForwardedRef, forwardRef} from 'react';
import {styled} from "styled-components";
import "../style.scss"
import {connect, useSelector} from "react-redux";

import { RootState} from "../../redux/redux";


type ExperienceProps = {
    ref: HTMLDivElement | undefined
}

const StyledExperience = styled.section`
  & {
    position: relative;
  }
  
  .blockExperience {
    border: 1px darkslategray solid;
    position: relative;
    padding: 10px 0;
    font-size: 25px;
    border-radius: 10px;

    .experienceContent{
      opacity: 1;
      color: gray;
      display: flex;
      flex-direction: row;
      margin: 10px 20px;

      // Div pour le titre et la description
      .contentDescription  {
        width: 100%;
        font-size: 15px;
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
        font-size: 18px;
        font-weight: bold;
      }

      .descriptionExperience {
        margin: 10px 0px;
      }

      // Container des Tags
    }

    &:hover {
      transition: all .4s ease;
      background-color: #dfdddd;
      border: 1px solid #4b4b4b;

      .dateExperience {
        color: #284d53;
      }

      .titleExperience {
        font-size: 18px;
        font-weight: bolder;
        color: black;
      }
    }
  }

  .active-blockExperience {
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
            <div className={'blockExperience'}>
                <div className={'experienceContent'}>
                    <span className={'dateExperience'}>{`${props.date1} ${props.date2}`}</span>
                    <div className={'contentDescription'}>
                        <div className={'titleExperience'}>{`${props.title}`}</div>
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
                <ExperienceBlock
                    date1={2020}
                    date2={2023}
                    title={'Gendarmerie Nationale'}
                    description={'Developpeur Web et Devops en apprentissage, trois projets effectués en tant que\n' +
                        'déveleoppeur web dont deux utilisant ReactJS et NodeJs en TypeScript et un utilisant\n' +
                        'Symfony. Un projet en Devops pour introduire la solution Airflow dans la messagerie,\n' +
                        'avec l\'utilisation de terraform, ansible et des principes architecturaux.'}

                />
        </StyledExperience>
    );
})

const mapState = (state: RootState) => state.page

export default connect(mapState)(Experience);
