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

  p {
    font-size: 17px;
  }
`

const Presentation = (props : PresentationProps) =>  {


    return(
        <StyledPresentation>
            <p>
                Bonjour et bienvenu sur mon portefolio! Je suis jeune développeur TypeScript Junior ayant
                suivi des formations en alternance à Paris du bac jusqu'au bac+5.
                Je maîtrise plusieurs langages de programmation comme HTML, CSS, TypeScript, PHP.. Par contre j'ai
                une grande préférence énorme préférence pour le TypeScript et les bibliothèques comme
                React et React Native !
                <br/>
            </p>

            <p>
                Je suis actuellement en quête de nouvelles opportunités pour développer mes compétences dans
                le développement web et mobile.<br/>
            </p>

            <p>
                En dehors de l'aspect profesionnel, je suis un jeune homme de 25 ans qui a plusieurs passions comme les
                jeux vidéos, les sports de combats et les mangas.<br/>
            </p>
        </StyledPresentation>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Presentation);
