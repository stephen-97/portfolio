import React from 'react';
import "../style.scss"
import {styled} from "styled-components";
import ButtonLinksContainer from "./ButtonLinksContainer";


const StyledDescription = styled.section`

  #leftContainerPresentation {
    padding: 100px 0 0 0;
    margin-bottom: 50px;

    h1 {
      font-weight: bolder;
      font-size: 33px;
      color: #3b3a3a;
      margin: 10px 0;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: bolder;
      font-size: 23px;
      color: lightslategray;
    }

    .Name {
      margin-top: 50px;
      padding: 2% 0;
      font-weight: bolder;
      font-size: 40px;
      color: #3b3a3a;
    }

    .Description {
      margin-top: 35px;
      font-size: 20px;
      color: #3b3a3a;
      top: 200px;
      left: 50px;
    }

    .firstDescription  {
      padding: 2% 0;
      font-weight: bolder;
      border-radius: 5px;
      height: auto;
      width: auto;
      top: 130px;
      left: 50px;
      font-size: 23px;
      color: lightslategray;
    }

  }
`

const Description = () =>  {

    return(
        <StyledDescription>
            <div id={'leftContainerPresentation'}>
                <h1>
                    STEPHEN LOIOLA BASTOS
                </h1>
                <h2>
                    Software Engineer - Team Typescript
                </h2>
                <ButtonLinksContainer />
                <div className={"Description"}>
                    Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque
                    discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum
                    rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut
                    nisi impetraverint, non inmorantur.
                </div>
            </div>
        </StyledDescription>
);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default Description;
