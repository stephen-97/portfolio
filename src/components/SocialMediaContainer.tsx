import React, {ReactElement} from "react";
import { styled} from "styled-components";
import constants from "../utility/constants";
import config from "../configs/config";


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
    filter: ${constants.colorWhiteFilter};
    &:hover {
      filter: ${constants.color1Filter};
    }
  }
  
  ol {
    display: flex;
    flex-direction: column;
    padding: 0;
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
const SocialMediaContainer = (): ReactElement =>  {

    return(
        <StyledSocialMediaContainer>
            <nav>
                <ol className={'socialMedia-links-container'}>
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
