import React from 'react';
import "../style.scss"
import {styled} from "styled-components";
import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import TwitterIcon from "../../assets/twitter.svg"
import CVIcon from "../../assets/cv.svg"

const StyledButtonsLinksContainer = styled.section`
  
  
  div {
    display: flex;
    
    >a{
      >img {
        height: 40px;
        width: 40px;
        margin: 0 15px 0 0;

        &:hover{
          cursor: pointer;
          transition: 0.2s ease;
          filter: invert(25%) sepia(0%) saturate(63%) hue-rotate(285deg) brightness(94%) contrast(83%);
        }
      }
    }
     
    
    .githubIcon {
      background-color: red;
      -webkit-mask: url('../../assets/github.svg') no-repeat center;
      mask: url('../../assets/github.svg') no-repeat center;
    }
    
  }
`

const ButtonLinksContainer = () =>  {

    return(
        <StyledButtonsLinksContainer>
            <div>
                <div className={'githubIcon'}></div>
                <a href={"https://github.com/stephen-97?tab=repositories"} target="_blank" rel={"noreferrer"}>
                    <img src={GithubIcon} alt="Github Icon" onClick={() => null}/>
                </a>
                <a href={"https://www.linkedin.com/in/stephen-loiola-bastos-04351814b/"} target="_blank" rel={"noreferrer"}>
                    <img src={LinkedinIcon} alt="Linkedin Icon" onClick={() => null}/>
                </a>
                <a  href={""} target="_blank" rel={"noreferrer"}>
                    <img src={TwitterIcon} alt="Twitter Icon" onClick={() => null}/>
                </a>
            </div>
        </StyledButtonsLinksContainer>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default ButtonLinksContainer;
