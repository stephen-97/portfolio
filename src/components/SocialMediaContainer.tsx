import React, {ReactElement, useEffect} from "react";
import { styled} from "styled-components";
import constants from "../utility/constants";
import config from "../configs/config";
import Box from "./Box";



const socialMediaAnimationDelay = 4.5;

const StyledSocialMediaContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  animation: animSocialMediaContainer 0.5s ease-in-out ${socialMediaAnimationDelay}s forwards;
  @keyframes animSocialMediaContainer {
    to {
      opacity: 1;
    }
  }
  
  @media screen and (min-width: ${constants.maxWindowWidthForSideMenuButton}px) {
    visibility: visible;
    display: block;
    flex-direction: column;
    box-sizing: content-box;
    position: fixed;
    left: 50px;
    bottom: 0;
    border-bottom: none;
  }
  
  nav {
    display: block;
    border: 1px dashed;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom: none;
    position: relative;
    height: 350px;
    padding: 10px;
  }
  img {
    margin-bottom: 30px;
    cursor: pointer;
    filter: ${constants.colorWhiteFilter};
    &:hover {
      filter: ${constants.color1Filter};
    }
  }
  ol {
    display: flex;
    flex-direction: column;
    padding: 0;
    a {
      text-align: center;
    }
  }
  
  #box-container {
    top: 10px;
    position: relative;
  }
`
const SocialMediaContainer = (): ReactElement =>  {


    useEffect(() => {

    }, []);

    return(
        <StyledSocialMediaContainer>
            <div id={'box-container'}>
                <Box />
            </div>
            <nav>
                <ol id={'socialMedia-links-container'}>
                    {config.socialMediaLinks.map(({name, icon, alt, url}) => (
                        <a href={url} target={'_blank'} >
                            <img height={50} src={icon} alt={alt} />
                        </a>
                    ))}
                </ol>
            </nav>
        </StyledSocialMediaContainer>
    );
}


export default SocialMediaContainer;
