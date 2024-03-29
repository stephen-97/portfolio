import React, {ReactElement} from "react";
import {styled} from "styled-components";
import constants from "../utility/constants";

type TagProps = {
    name: string,
    isBgColorLight: boolean,
}

const StyledTag = styled.li`
  font-size: clamp(15px, 2vw, 18px);
  display: inline;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  margin: 10px 10px 0 0;
  list-style-type: none;
`

const Tag = (props: TagProps): ReactElement => {

    const styleObject = {
        backgroundColor: props.isBgColorLight ? constants.colorLight1 : constants.colorDark1,
        color: props.isBgColorLight ? constants.colorDarkGreen : constants.colorLightGreen
    }
    return (
        <StyledTag style={styleObject}>{props.name}</StyledTag>
    );
}


export default Tag;
