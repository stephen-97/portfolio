import React, {ReactElement} from "react";
import { styled, ThemeProvider} from "styled-components";
import constants from "../utility/constants";

type TagProps = {
    name: string,
    isBgColorLight: boolean,
}

const Tag = (props: TagProps): ReactElement =>  {

    const theme = {
        isBgColorLight: props.isBgColorLight,
    }

    const StyledTag = styled.li`
      & {
        display: inline;
        padding: 5px 10px 5px 10px;
        background-color: ${props => props.theme.isBgColorLight ? constants.colorLight1 : constants.colorDark2};
        border-radius: 10px;
        margin: 10px 10px 0 0;
        list-style-type: none;
        color: ${props => props.theme.isBgColorLight ? constants.color4 : constants.color2};
        font-weight: bolder;
      }
    `
    return(
        <ThemeProvider theme={theme}>
            <StyledTag>{props.name}</StyledTag>
        </ThemeProvider>
    );
}


export default Tag;
