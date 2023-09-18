import React, {ReactElement} from "react";
import { styled} from "styled-components";
import constants from "../utility/constants";

type TagProps = {
    name: string,
}

const StyledTag = styled.li`
  & {
    display: inline;
    padding: 5px 10px 5px 10px;
    background-color: ${constants.colorDark2};
    border-radius: 10px;
    margin: 10px 10px 0 0;
    list-style-type: none;
    color: ${constants.color2};
  }
`
const Tag = (props: TagProps): ReactElement =>  {
    return(
        <StyledTag>{props.name}</StyledTag>
    );
}


export default Tag;
