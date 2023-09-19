import {connect} from "react-redux";
import {RootState} from "../redux/redux";
import {styled} from "styled-components";
import React, {SetStateAction, useEffect, useState, Dispatch, ReactElement} from "react";
import HeaderButton from "./header/HeaderButton";
import constants from "../utility/constants";
import config from "../configs/config";
import HeaderSideMenu from "./header/HeaderSideMenu";
import Logo from "./header/HeaderLogo";


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
  background-color: ${constants.colorDark2};
  box-shadow: rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;
  
  .header-nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`


const Header = (): ReactElement => {

    const [windowsWidth, setWindowsWidth]: [number, Dispatch<SetStateAction<number>>] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowsWidth(window.innerWidth))
    }, [window.innerWidth > constants.maxWindowWidthForSideMenuButton]);

    const [isLoading, setIsLoading] = useState(true);

    return (
        <StyledHeader>
            <nav className={"header-nav"}>
                <Logo finishLoading={() => setIsLoading(false)}/>
                <StyledButtonContainer>
                    <div className={"buttonContainer"}>
                        {config.navLinks.map(({name, icon}, index) => (
                            <HeaderButton
                                index={index + 1}
                                icon={icon}
                                name={name}
                                display={windowsWidth > constants.maxWindowWidthForSideMenuButton ? "flex" : "none"}
                            />
                        ))}
                    </div>
                </StyledButtonContainer>
                <HeaderSideMenu/>
            </nav>
        </StyledHeader>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Header);