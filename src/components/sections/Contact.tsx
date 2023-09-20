import React, {useEffect, useState, Dispatch, SetStateAction} from 'react';
import {styled, css, ThemeProvider} from "styled-components";
import EmailIcon from "../../assets/email.svg"
import WhatsAppIcon from "../../assets/whatsapp.svg"
import LinkedinIcon from "../../assets/linkedin.svg"
import constants from "../../utility/constants";
import functions from "../../utility/functions";


type ContactProps = {
    isBgColorLight: boolean,
}

const loopContactBlocks = () => {
    let style: string = '';
    for (let i: number = 0; i <= 5; i++) {
        style += `
            .active-contact-block:nth-of-type(${i}) {
                animation: contactBlockAnimation 0.5s ease-in-out ${i / 3}s forwards;
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
    justify-content: space-between;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    position: relative;
    align-items: center;
  }

  .contact-block {
    position: relative;
    transform: scale(0);
    background-color: ${props => props.theme.isBgColorLight ? constants.colorLight2 : constants.colorDark1};
    width: 300px;
    height: 200px;
    border-radius: ${constants.borderRadius1}px;
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
      background-color: ${props => props.theme.isBgColorLight ? constants.color4 : constants.color2};

      > h5 {
        color: ${props => props.theme.isBgColorLight ? constants.colorLight1 : constants.colorDark1};
      }

      > span {
        color: ${props => props.theme.isBgColorLight ? constants.colorLight1 : constants.colorDark1};
      }

      > img {
        filter: ${props => props.theme.isBgColorLight ? constants.colorWhiteFilter : constants.colorDarkFilter};
      }
    }

    > h5 {
      margin: 10px 0;
      font-size: ${constants.fontSize4};
      font-weight: bolder;
      color: ${props => props.theme.isBgColorLight ? constants.colorDark1 : constants.colorLight1};
      text-decoration: inherit;
    }

    > span {
      color: ${props => props.theme.isBgColorLight ? constants.colorDark1 : constants.colorLight1};
      text-decoration: inherit;
    }

    > img {
      filter: ${props => props.theme.isBgColorLight ? constants.colorDarkFilter : constants.colorWhiteFilter};
    }
  }

  ${loopContactBlocks()}


`
const Contact = (props: ContactProps) => {


    const [windowsWidth, setWindowsWidth]: [number, Dispatch<SetStateAction<number>>] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowsWidth(window.innerWidth))
        if (functions.detectWrap('contact-block'))
            (document.getElementById('section-contact-block') as HTMLElement).style.justifyContent = 'center'
        else
            (document.getElementById('section-contact-block') as HTMLElement).style.justifyContent = 'space-between'
    }, [windowsWidth]);

    const theme = {
        isBgColorLight: props.isBgColorLight,
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledSkills>
                <section id={'section-contact-block'}>
                    <a className={'contact-block'} href={"mailto:stephen@hotmail.com"}>
                        <img height={50} width={50} src={EmailIcon} alt={'Email icon'}/>
                        <h5>Email</h5>
                        <span>stephen.loiola@hotmail.com</span>
                    </a>
                    <a className={'contact-block'} href={"https://wa.me/33651662391"}>
                        <img height={50} width={50} src={WhatsAppIcon} alt={'Whatsapp Icon'}/>
                        <h5>Whatsapp</h5>
                        <span>+33651662391</span>
                    </a>
                    <a className={'contact-block'} href={"https://www.linkedin.com/in/stephen-loiola-bastos-04351814b/"}
                       target="_blank">
                        <img height={50} width={50} src={LinkedinIcon} alt={'Linkedin image'}/>
                        <h5>Linkedin</h5>
                        <span>stephen-loiola-bastos-04351814b</span>
                    </a>
                </section>
                <h2>Merci pour votre lecture</h2>
            </StyledSkills>
        </ThemeProvider>
    );
}

export default Contact;
