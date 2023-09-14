import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import {styled, css} from "styled-components";
import constants from "../../constants/constants";

type MenuProps = {

}

const loopButtonList = () => {
    let style: string = '';
    for(let i: number=0; i<= 5; i++){
        const animDuration: number = 0.5;
        style+= `
            &:nth-of-type(${i}) > .button {
                opacity: 0;
                animation-name: example;
                animation-fill-mode: forwards;
                animation-duration: ${animDuration}s;
                animation-delay:  ${constants.headerAnim*i/5}s;
            }
            @keyframes example {
                from {opacity: 0; left: -100px}
                to {opacity: 1; left: 0px}
            }
        `
    }
    return css`${style}`
}


const StyledMenu = styled.button`
  display: none;
  
  @media (max-width: 1100px){
    display: block;
    position: fixed;
    background-color: red;
    z-index: 0;
    width: 70vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
  }
`

const StyledButtonMenu = styled.div`
  display: none;
  
  @media (max-width: 1099px ){
    display: block;
  }
  
  .menu-button {
    position: relative;
    float: right;
    overflow: hidden;
    z-index: 1;
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
    
    &:hover {
      background-color: ${constants.color5};
    }
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
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
    background-color: ${constants.color5};
  }
  .lines.close span::after {
    bottom: 0;
    -ms-transform: rotate(-225deg);
    transform: rotate(-225deg);
    background-color: ${constants.color5};
  }
  .lines.close span::before,
  .lines.close span::after {
    -webkit-transition-delay: 0s, 0.3s;
    transition-delay: 0s, 0.3s;
  }
`



const SideMenu = (props : MenuProps) =>  {

    const [menuToggle, setMenuToggle]:  [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)


    useEffect(() => {
        console.log(menuToggle)
    }, [menuToggle]);
    return(
        <StyledButtonMenu>
            <Helmet>
                <body className={menuToggle ? 'sideMenuOpened' : ''} />
            </Helmet>
            <button className={`menu-button lines ${menuToggle ? `close` : null}`} onClick={() => setMenuToggle((current: boolean) => !current)}>
                <span></span>
            </button>
            <StyledMenu>
                <section>

                </section>
            </StyledMenu>
        </StyledButtonMenu>
    );
}


export default SideMenu;
