import React from 'react';
import "../style.scss"
import {connect, useSelector} from "react-redux";
import { RootState} from "../../redux/redux";
import {styled} from "styled-components";
import Briefcase from "../../assets/briefcase.svg";
import Wave from "../../assets/wave.svg"

type PresentationProps = {

}

const StyledPresentation = styled.section`
  // PRESENTATION BLOCK

  .title {
    height: 100px;
    position: relative;
    
    .line {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-bottom: 1px solid black;
      width: 75%;
      
    }
    > img {
      position: absolute;
      height: 4em;
      top: 50%;
      transform: translateY(-50%);
      right: 10%;
    }
  }
`

const Presentation = (props : PresentationProps) =>  {


    return(
        <StyledPresentation>
            <p>
                Bienvenu dans mon monde, vous l'avez devinez ? Je suis
                jeune développeur TypeScript Junior
                et j'ai une énorme préférence pour les technologies React (Js et Native)!
                <br/>
            </p>

            <p>
                Pour ajouter un peu d'origanilité à ce portefolio, j'ai rajouté ce cube
                où chaque face représente un détail concernant ma personne (expérience pro -
                projet personnels...). Vous pouvez vous amusez et intéragir avec.<br/>
            </p>

            <p>
                Néanmoins l'interface est responsive design, si vous réduisez la fenêtre le cube
                disparaîtra !<br/>
            </p>
        </StyledPresentation>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Presentation);
