import {connect, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux";
import {css, styled} from "styled-components";
import React, {useEffect} from "react";
import Description from "./Description";
import SmallBlock from "./SmallBlock";
import laptopIcon from "../../assets/laptop.svg";
import ideaIcon from "../../assets/idea.svg";
import manIcon from "../../assets/man.svg";
import ButtonLinksContainer from "./ButtonLinksContainer";
import Box from "./Box";


type SmallBlockProps = {
}


const StyledLeftContainer = styled.section`


`

const loopButtonList = () => {
    let style = '';
    for(let i=0; i<= 5; i++){
        const animDuration: number = 2;
        style+= `
            StyledButton:nth-of-type(${i}){
                opacity: 0;
                animation-name: example;
                animation-fill-mode: forwards;
                animation-duration: ${animDuration}s;
                animation-delay:  ${i}s;
            } 
            .buttonColorContainer:nth-of-type(2){
                opacity: 0;
                background-color: blue;
                animation-name: example;
                animation-fill-mode: forwards;
                animation-duration: ${animDuration}s;
                animation-delay:  0s;
            } 
            @keyframes example {
                from {opacity: 0; left: -100px}
                to {opacity: 1; left: 0px}
            }
        `
    }
    return css`${style}`
}

const StyledButtonContainer = styled.section`
  .buttonContainer {
    display: flex;
    flex-direction: column;
  }
`


const buttonTabs = [
    {
        description: "PRESENTATION",
        icons: manIcon,
        pageName: "presentation"
    },
    {
        description: "EXPÉRIENCE PRO",
        icons: laptopIcon,
        pageName: "working",
    },
    {
        description: "ETUDES",
        icons: manIcon,
        pageName: "study"
    },
    {
        description: "PROJETS PERSO",
        icons: ideaIcon,
        pageName: "projects"
    },
    {
        description: "CONTACTEZ MOI",
        icons: manIcon,
        pageName: "contact"
    },
]

const LeftSectionBlock = (props : SmallBlockProps) =>  {

    useEffect(() => {
        //console.log(document.querySelectorAll('.buttonContainer .button:nth-of-type(2n)'))
    }, []);


    return(
        <div className={"leftBlockContainer"}>
            <div id={"leftBlockContent"}>
                <StyledButtonContainer>
                    <Box />
                    <Description />
                    <div className={"buttonContainer"}>
                        <SmallBlock key={1} index={1} description={'PRESENTATION'} icon={manIcon} pageName={'presentation'}/>
                        <SmallBlock key={2} index={2} description={'EXPÉRIENCE PRO'} icon={laptopIcon} pageName={'working'}/>
                        <SmallBlock key={3} index={3} description={'ETUDES'} icon={manIcon} pageName={'study'}/>
                        <SmallBlock key={4} index={4} description={'PROJETS PERSO'} icon={ideaIcon} pageName={'projects'}/>
                        <SmallBlock key={5} index={5} description={'CONTACTEZ MOI'} icon={ideaIcon} pageName={'contact'}/>
                    </div>
                </StyledButtonContainer>

            </div>
        </div>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(LeftSectionBlock);