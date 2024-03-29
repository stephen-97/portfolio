import React, {createRef, Dispatch, ReactElement, RefObject, SetStateAction, useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import {useOnClickOutside} from "usehooks-ts";
import {styled } from "styled-components";
import constants from "../../utility/constants";
import config from "../../configs/config";


const StyledMenu = styled.button<{$menuToggle: boolean}>`
  display: none;

  @media (max-width: ${constants.maxWindowWidthForSideMenuButton}px) {
    display: block;
    position: fixed;
    background-color: ${constants.colorDark2};
    border: none;
    z-index: 1;
    min-width: min(75vw, 400px);
    padding: 0;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: -10px 0 30px -15px ${constants.colorDark2};
    transition: ease-in-out 0.3s;
    transform: translateX(${props => props.$menuToggle ? 0 : 100}vw);
    transform-origin: right;
    visibility: ${props => props.$menuToggle ? 'visible' : 'hidden'};
  }

  #side-menu-button-container {

    ol {
      text-align: left;
      margin: 0 35px;

      ul {
        display: table;
        padding: 0;
        vertical-align: center;
        margin: 25px 0;
        font-size: ${constants.fontSize2};
        cursor: pointer;
        color: ${constants.colorLight1};

        &:hover {
          color: ${constants.colorLightGreen};

          img {
            filter: ${constants.colorLightGreenFilter};
          }
        }

        img {
          filter: ${constants.colorWhiteFilter}
        }

        .side-menu-button-name {
          display: table-cell;
          vertical-align: middle;
          padding: 0 20px;
          font-size: 17px;
        }
      }
    }

    #socialMedia-links-container {
      display: flex;
      flex-direction: row;
      padding: 0;
      justify-content: space-around;
      margin-top: 70px;

      #side-menu-button-socialMedia {
        padding: 0;
        margin: 0;
      }
    }
  }
`
const deg: number = 135;
const StyledButtonMenu = styled.div`
  display: none;
  
  @media (max-width: ${constants.maxWindowWidthForSideMenuButton}px ){
    display: block;
  }
  
  .menu-button {
    position: relative;
    float: right;
    overflow: hidden;
    z-index: 10;
    margin: 0;
    padding: 0;
    width: 96px;
    height: 56px;
    font-size: 0;
    text-indent: -9999px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
  }
  
  .menu-button:focus {
    outline: none;
  }
  
  .menu-button span {
    display: block;
    position: absolute;
    left: 20px;
    right: 20px;
    height: 8px;
    background-color: white;
    border-radius: 50px;
  }
  
  .menu-button span::before, .menu-button span::after {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: white;
    content: "";
    border-radius: 50px;

  }
  .menu-button span::before {
    top: -15px;
  }
  .menu-button span::after {
    bottom: -15px;
  }
  .lines {
     background: none;
   }
  .lines span {
    -webkit-transition: background 0s 0.3s;
    transition: background 0s 0.3s;
  }
  .lines span::before,
  .lines span::after {
    -webkit-transition-duration: 0.3s, 0.3s;
    transition-duration: 0.3s, 0.3s;
    -webkit-transition-delay: 0.3s, 0s;
    transition-delay: 0.3s, 0s;
  }
  .lines span::before {
    -webkit-transition-property: top, -webkit-transform;
    transition-property: top, transform;
  }
  .lines span::after {
    -webkit-transition-property: bottom, -webkit-transform;
    transition-property: bottom, transform;
  }
  .lines.close {
    background: none;
  }
  .lines.close span {
    background: none;
  }
  .lines.close span::before {
    top: 0;
    -ms-transform: rotate(${deg}deg);
    transform: rotate(${deg}deg);
  }
  .lines.close span::after {
    bottom: 0;
    -ms-transform: rotate(-${deg}deg);
    transform: rotate(-${deg}deg);
  }
  .lines.close span::before,
  .lines.close span::after {
    -webkit-transition-delay: 0s, 0.3s;
    transition-delay: 0s, 0.3s;
  }
`

const HeaderSideMenu = (): ReactElement =>  {

    const [menuToggle, setMenuToggle]:  [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)

    const checkingWindowWidth: boolean = window.innerWidth > constants.maxWindowWidthForSideMenuButton

    useEffect((): void => {
        if(checkingWindowWidth) setMenuToggle(false);
    }, [checkingWindowWidth]);

    const StyledButtonMenuRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    const handleClickOutside = (): void => {
        setMenuToggle(false);
    }
    useOnClickOutside(StyledButtonMenuRef, handleClickOutside);

    return(
        <StyledButtonMenu ref={StyledButtonMenuRef} >
            <Helmet>
                <body className={menuToggle ? 'sideMenuOpened' : ''} />
            </Helmet>
            <button className={`menu-button lines ${menuToggle ? `close` : null}`} onClick={() => setMenuToggle((current: boolean) => !current)}>
                <span></span>
            </button>
            <StyledMenu
                $menuToggle={menuToggle}
            >
                <nav id={'side-menu-button-container'}>
                    <ol>
                        {config.navLinks.map(({name, icon, alt}, index) => (
                            <ul className={'side-menu-button'} onClick={() => setMenuToggle(false)} key={index}>
                                <img src={icon} alt={alt} height={40}  width={40}/>
                                <span className={'side-menu-button-name'}>{name}</span>
                            </ul>
                        ))}
                    </ol>
                    <ol id={'socialMedia-links-container'}>
                        {config.socialMediaLinks.map(({name, icon, alt, url}, i) => (
                            <ul id={'side-menu-button-socialMedia'} key={i}>
                                <a href={url} target={'_blank'} rel={'noreferrer'} content={name}>
                                    <img src={icon} alt={alt} height={30}/>
                                </a>
                            </ul>
                        ))}
                    </ol>
                </nav>
            </StyledMenu>
        </StyledButtonMenu>
    );
}

export default HeaderSideMenu;
