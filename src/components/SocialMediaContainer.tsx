import React, {ReactElement, useEffect, useState, Dispatch, SetStateAction} from "react";
import {styled, ThemeProvider} from "styled-components";
import constants from "../utility/constants";
import config from "../configs/config";
import Box from "./Box";

const socialMediaAnimationDelay: number = 4.5;

const StyledSocialMediaContainer = styled.div`
  visibility: hidden;
  display: none;
  opacity: 0;
  mix-blend-mode: difference;

  @media screen and (min-width: ${constants.maxWindowWidthForSideMenuButton}px) {
    visibility: visible;
    display: block;
    flex-direction: column;
    box-sizing: content-box;
    position: fixed;
    left: 50px;
    bottom: 0;
    border-bottom: none;
    opacity: ${props => props.theme.animIsFinished ? 1 : 0};
    animation: animSocialMediaContainer 0.5s ease-in-out ${socialMediaAnimationDelay}s forwards;
    @keyframes animSocialMediaContainer {
      to {
        opacity: 1;
      }
    }
  }

  nav {
    display: block;
    border: 1px dashed;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom: none;
    mix-blend-mode: difference;
    position: relative;
    height: 270px;
    padding: 10px;
  }

  .social-media-logo {
    margin-bottom: 20px;
    cursor: pointer;
    filter: ${constants.colorWhiteFilter};
    &:hover {
      opacity: 0.6;
    }
  }

  ol {
    display: flex;
    flex-direction: column;
    padding: 0;

    a {
      text-align: center;

      img {
        filter: invert(100%);
      }
    }
  }

  #box-container {
    top: 10px;
    position: relative;
  }
`

const SocialMediaContainer = (): ReactElement => {

    const [animSocialMediaFinished, setAnimSocialMediaFinished]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    const theme = {
        animIsFinished: animSocialMediaFinished,
    }

    useEffect(() => {
        setTimeout(() => {
            setAnimSocialMediaFinished(true)
        }, socialMediaAnimationDelay * 1000 + 600);

    }, []);

    return (
        <ThemeProvider theme={theme}>
            <StyledSocialMediaContainer>
                <div id={'box-container'}>
                    <Box/>
                </div>
                <nav>
                    <ol id={'socialMedia-links-container'}>
                        {config.socialMediaLinks.map(({name, icon, alt, url}, i) => (
                            <a key={i} href={url} target={'_blank'} rel={'noreferrer'}>
                                <img className={'social-media-logo'} height={40} src={icon} alt={alt}/>
                            </a>
                        ))}
                    </ol>
                </nav>
            </StyledSocialMediaContainer>
        </ThemeProvider>
    );
}

export default SocialMediaContainer;
