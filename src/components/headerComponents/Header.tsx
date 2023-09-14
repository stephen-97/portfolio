import {connect, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux";
import {css, styled} from "styled-components";
import React, {SetStateAction, useEffect, useState, Dispatch} from "react";
import HeaderButton from "./HeaderButton";
import constants from "../../constants/constants";
import WaveIcon from "../../assets/wave.svg";
import BriefCaseIcon from "../../assets/briefcase.svg"
import GraduationIcon from "../../assets/casquette-de-graduation.svg"
import IdeaIcon from "../../assets/exchange-ideas.svg"
import LetterIcon from "../../assets/letter.svg"
import MenuIcon from "../../assets/menu.svg"
import HeaderSideMenu from "./HeaderSideMenu";

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

const StyledHeader = styled.header`


  position: fixed;
  z-index: 1;
  height: ${constants.headerSize}px;
  width: 100vw;
  min-width: 150px;
  background-color: ${constants.color1};
  box-shadow: 0 0 15px 10px ${constants.color1};
  
 
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


const Header = (props : SmallBlockProps) =>  {


    const [windowsWidth, setWindowsWidth]: [number, Dispatch<SetStateAction<number>>] = useState(window.innerWidth);

    const [toSmall, setTooSmall ] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(window.innerWidth < 1100)

    useEffect(() => {
        window.addEventListener("resize", () => setWindowsWidth(window.innerWidth) )

    }, [window.innerWidth > 1100]);

    
    return(
        <StyledHeader>
            <nav className={"leftBlockContent"}>
                <div className={'logoContainer'}>
                    <span>
                        S.L
                    </span>
                </div>
                <StyledButtonContainer>
                    <div className={"buttonContainer"}>
                        <HeaderButton index={1} id={'PresentationButton'} icon={WaveIcon} display={windowsWidth > 1100 ? "flex" : "none"}/>
                        <HeaderButton index={2} id={'WorkingButton'} icon={BriefCaseIcon} display={windowsWidth > 1100 ? "flex" : "none"}/>
                        <HeaderButton index={3} id={'StudyButton'} icon={GraduationIcon} display={windowsWidth > 1100 ? "flex" : "none"}/>
                        <HeaderButton index={4} id={'ProjectsButton'} icon={IdeaIcon} display={windowsWidth > 1100 ? "flex" : "none"}/>
                        <HeaderButton index={5} id={'ContactButton'} icon={LetterIcon} display={windowsWidth > 1100 ? "flex" : "none"}/>
                    </div>
                </StyledButtonContainer>
                <HeaderSideMenu />
                </nav>
        </StyledHeader>
    );
}

/**
 * <HeaderButton id={'MenuButton'} icon={MenuIcon} display={windowsWidth <= 1100 ? "flex" : "none"}/>
 *
 *
 * {windowsWidth > 1100 ?
 *                                 buttonTabs.map((item, index: number) => <HeaderButton key={index} index={index} icon={item.icons}/>)
 *                                 :
 *                                 null
 *                             }
 * @param state
 */
const mapState = (state: RootState) => state.page

export default connect(mapState)(Header);