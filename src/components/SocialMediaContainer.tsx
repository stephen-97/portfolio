import React from "react";
import { styled} from "styled-components";
import constants from "../constants/constants";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg"

type SmallBlockProps = {
}

const StyledSocialMediaContainer = styled.div`
  display: none;

  @media screen and (min-width: ${constants.maxWindowWidthForSideMenuButton}px) {
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    position: fixed;
    left: 50px;
    bottom: 0;
    height: 40vh;
    border: 1px dashed;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom: none;
    padding: 10px;
  }
    
  img {
    margin-bottom: 30px;
    cursor: pointer;
    transition: ease 0.5s;
    &:hover {
      filter: ${constants.color5Filter};
    }
  }
  .vertical-line{
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: black;
    translate: transform(-50%);
    left: 50%;
    z-index: -1;
    border: 1px;
  }
`
const SocialMediaContainer = (props : SmallBlockProps) =>  {


    return(
        <StyledSocialMediaContainer>
            <img height={60} src={GithubIcon} alt="Github Icon" onClick={() => null}/>
            <img height={60} src={LinkedinIcon} alt="Github Icon" onClick={() => null}/>
            <img height={60} src={TwitterIcon} alt="Github Icon" onClick={() => null}/>
            <img height={60} src={GithubIcon} alt="Github Icon" onClick={() => null}/>
            <div className={'vertical-line'}></div>
        </StyledSocialMediaContainer>
    );
}


export default SocialMediaContainer;
