import React, { ReactElement} from 'react';
import CSS from 'csstype'
import { ReactComponent as GithubLogo} from "../assets/github.svg"
import './style.scss'
import PropTypes from "prop-types";

const Link = (props: any) => {

    const renderSwitchIcon = (): ReactElement=> {
        switch(props.iconName) {
            case 'Github':
                return <GithubLogo height={"40px"} width={"40px"} className={'link'}/>;
            case 'Linkedin':
                return <GithubLogo height={"40px"} width={"40px"} className={'link'}/>;
            default:
                return <div> </div>;
        }
    }

    return (
        <div style={container}>
            <a href={"/"}>
                {renderSwitchIcon()}
            </a>
        </div>
    );
}

const container: CSS.Properties = {
    backgroundColor: "#cbded9",
    padding: "20px",
    borderRadius: "20px",
    margin: "30px 0px 30px 0px"
}

Link.propTypes = {
    iconName: PropTypes.string.isRequired,
};


export default Link;
