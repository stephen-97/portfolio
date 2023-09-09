import {connect, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux";
import {css, styled} from "styled-components";
import React, {useEffect} from "react";
import HeaderButton from "./HeaderButton";
import constants from "../../constants/constants";
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
    flex-direction: row;
    height: 100%;
    align-items: center;
  }

`

const StyledLeftContainer = styled.section`
  
  .header {
    position: fixed;
    z-index: 1;
    height: ${constants.headerSize}px;
    width: 100vw;
    min-width: 150px;
    background-color: #282c34;
    box-shadow: 0 0 15px 10px #282c34;
  }
  .leftBlockContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .logoContainer {
    display: table;
    font-weight: bolder;
    background-color: red;
    align-items: center;
    margin-left: 2vw;
    
    > span {
      display: table-cell;
      vertical-align: middle;
      background-color: rebeccapurple;
      letter-spacing: .15em;
      font-size: 38px;
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


const Header = (props : SmallBlockProps) =>  {

    return(
        <StyledLeftContainer>
            <main className={'header'}>
                <nav className={"leftBlockContent"}>
                    <div className={'logoContainer'}>
                        <span>
                            S.L
                        </span>
                    </div>
                    <StyledButtonContainer>
                        <div className={"buttonContainer"}>
                            {buttonTabs.map((item, index: number) => <HeaderButton key={index} index={index} description={item.description} icon={item.icons} pageName={item.pageName}/>)}
                        </div>
                    </StyledButtonContainer>
                </nav>
            </main>
        </StyledLeftContainer>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Header);