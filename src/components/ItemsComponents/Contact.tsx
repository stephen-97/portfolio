import React from 'react';
import {connect, useSelector} from "react-redux";
import {styled, ThemeProvider, css} from "styled-components";
import EmailIcon from "../../assets/email.svg"
import WhatsAppIcon from "../../assets/whatsapp.svg"
import LinkedinIcon from "../../assets/linkedin.svg"
import { RootState} from "../../redux/redux";
import computer from "../../assets/computer.svg";
import constants from "../../constants/constants";
import {inspect} from "util";


type SkillsProps = {
    animationDelay: number,
}


const theme = {
    duration: "2s",
    bgColor: "red",
}

const loopContactBlocks = () => {
    let style = '';

    for(let i=1; i<= 5; i++){
        style+= `
            .active-contact-block:nth-of-type(${i}) {
                animation: contactBlockAnimation 0.5s ease-in-out ${0.5*i/3}s forwards;
                @keyframes contactBlockAnimation {
                  to {
                    transform: scale(1);
                  }
                }
            } 
        `
    }
    return css`${style}`
}

const StyledSkills = styled.section`
    
  & {
    position: relative;
  }
  
  section {
    margin: 0;
    justify-content: space-around;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    position: relative;
  }
  
  .contact-block {
    position: relative;
    transform: scale(0);
    background-color: ${constants.color3};
    width: 300px;
    height: 200px;
    border-radius: 10px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    * {
      transition: inherit;
    }

    &:hover {
      background-color: ${constants.color5};
      >h5 {
        color: ${constants.colorBlack};
      }
      >span {
        color: ${constants.colorBlack};
      }
      > img {
        filter: invert(8%) sepia(9%) saturate(314%) hue-rotate(98deg) brightness(95%) contrast(92%);
      }
    }
    
    > h5 {
      margin: 10px 0;
      font-size: ${constants.fontSize4};
      font-weight: bolder;
      color: ${constants.colorWhite};
      text-decoration: inherit;
    }
    
    > span {
      color: ${constants.colorWhite};
      text-decoration: inherit;
    }
    
    > img {
      filter: invert(89%) sepia(1%) saturate(1344%) hue-rotate(102deg) brightness(106%) contrast(106%);
    }
  }
  ${loopContactBlocks()}
  
  
`
const Contact = (props : SkillsProps) =>  {

    return(
        <ThemeProvider theme={theme}>
            <StyledSkills>
                <section>
                    <a className={'contact-block'} href={"mailto:stephen@hotmail.com"} >
                        <img height={50} width={50} src={EmailIcon} alt={'Email icon'}/>
                        <h5>Email</h5>
                        <span>stephen.loiola@hotmail.com</span>
                    </a>
                    <a className={'contact-block'} href={"https://wa.me/33651662391"}>
                        <img height={50} width={50} src={WhatsAppIcon} alt={'Whatsapp Icon'}/>
                        <h5>Whatsapp</h5>
                        <span>+33651662391</span>
                    </a>
                    <a className={'contact-block'} href={"https://www.linkedin.com/in/stephen-loiola-bastos-04351814b/"} target="_blank">
                        <img height={50} width={50} src={LinkedinIcon} alt={'Linkedin image'}/>
                        <h5>Linkedin</h5>
                        <span>stephen-loiola-bastos-04351814b</span>
                    </a>
                </section>
            </StyledSkills>
        </ThemeProvider>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Contact);
