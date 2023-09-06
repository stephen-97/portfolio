import {connect, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux";
import {css, styled} from "styled-components";
import React, {useEffect} from "react";
import Description from "./Description";
import SmallBlock from "./SmallBlock";
import laptopIcon from "../../assets/laptop.svg";
import ideaIcon from "../../assets/idea.svg";
import App from "../../App";
import Box from "./Box";

import Wave from "../../assets/wave.svg";
import BriefCase from "../../assets/briefcase.svg"
import Graduation from "../../assets/casquette-de-graduation.svg"
import Idea from "../../assets/exchange-ideas.svg"
import Skill from "../../assets/skill.svg"


type SmallBlockProps = {
}


const StyledButtonContainer = styled.section`
  .buttonContainer {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width:1000px){
    .buttonContainer {
      flex-direction: row;
      height: 100%;
    }
  }
`

const StyledLeftContainer = styled.section`
  

  .leftBlockContent {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width:1000px){
    .leftBlockContent {
      flex-direction: row;
      width: 100vw;
      height: 100%;
    }
  }
`


const buttonTabs = [
    {
        description: "PRESENTATION",
        icons: Wave,
        pageName: "presentation"
    },
    {
        description: "EXPÉRIENCE PRO",
        icons: BriefCase,
        pageName: "working",
    },
    {
        description: "ETUDES",
        icons: Graduation,
        pageName: "study"
    },
    {
        description: "PROJETS PERSO",
        icons: Idea,
        pageName: "projects"
    },
    {
        description: "CONTACTEZ MOI",
        icons: Skill,
        pageName: "contact"
    },
]


const LeftSectionBlock = (props : SmallBlockProps) =>  {

    return(
        <StyledLeftContainer>
                <div className={"leftBlockContent"}>
                    <Description />
                    <StyledButtonContainer>
                        <div className={"buttonContainer"}>
                            {buttonTabs.map((item, index: number) => <SmallBlock key={index} index={index} description={item.description} icon={item.icons} pageName={item.pageName}/>)}
                        </div>
                    </StyledButtonContainer>
                </div>
        </StyledLeftContainer>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(LeftSectionBlock);