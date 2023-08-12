import {connect, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/redux";
import React from "react";
import Description from "./Description";
import SmallBlock from "./SmallBlock";
import laptopIcon from "../assets/laptop.svg";
import ideaIcon from "../assets/idea.svg";
import manIcon from "../assets/man.svg";


type SmallBlockProps = {
}


const buttonTabs = [
    {
        description: "EXPÉRIENCE PRO",
        icons: laptopIcon,
        pageName: "working",
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
    {
        description: "Presentation",
        icons: manIcon,
        pageName: "presentation"
    }
]

const LeftSectionBlock = (props : SmallBlockProps) =>  {

    return(
        <div className={"leftBlockContainer"}>
            <div id={"leftBlockContent"}>
                <Description />
                <div className={"smallBlocksContainer"}>
                    {buttonTabs.map((item) => <SmallBlock description={item.description} icon={item.icons} pageName={item.pageName}/>)}
                </div>
            </div>
        </div>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(LeftSectionBlock);