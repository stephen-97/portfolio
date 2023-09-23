import React, {ReactElement} from "react";
import {styled} from "styled-components";
// @ts-ignore
import cv from '../assets/stephenLoiolaBastosCv.pdf'

const StyledCVpdf = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`

const CVpdf = (): ReactElement => {

    return (
        <StyledCVpdf>
            <object data={cv} type="application/pdf" width="100%" height="100%" aria-label={'CV Stephen'}/>
        </StyledCVpdf>

    )
}

export default CVpdf;
