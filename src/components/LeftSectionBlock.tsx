import {connect, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/redux";
import { styled} from "styled-components";
import React from "react";
import Description from "./Description";
import SmallBlock from "./SmallBlock";
import laptopIcon from "../assets/laptop.svg";
import ideaIcon from "../assets/idea.svg";
import manIcon from "../assets/man.svg";


type SmallBlockProps = {
}

const StyledButtonContainer = styled.section`
  .buttonContainer {
    top: 400px;
    left: 50px;
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

    return(
        <div className={"leftBlockContainer"}>
            <div id={"leftBlockContent"}>
                <StyledButtonContainer>
                    <Description />
                    <div className={"buttonContainer"}>
                        {buttonTabs.map((item, index: number) => <SmallBlock key={index} index={index} description={item.description} icon={item.icons} pageName={item.pageName}/>)}
                    </div>
                </StyledButtonContainer>
            </div>
        </div>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(LeftSectionBlock);