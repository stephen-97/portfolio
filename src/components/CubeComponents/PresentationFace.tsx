import React from 'react';
import "../style.scss"
import {connect, useSelector} from "react-redux";

import { RootState} from "../../redux/redux";

type StudyFaceProps = {
}

const PresentationFace = (props : StudyFaceProps) =>  {


    return(
        <div >
            <h2>Présentation ! </h2>
            <p>
                Bienvenu dans mon monde, vous l'avez devinez ? Je suis
                jeune développeur TypeScript Junior
                et j'ai une énorme préférence pour les technologies React (Js et Native)!
                <br/><br/>
            </p>

            <p>
                Pour ajouter un peu d'origanilité à ce portefolio, j'ai rajouté ce cube
                où chaque face représente un détail concernant ma personne (expérience pro -
                projet personnels...). Vous pouvez vous amusez et intéragir avec.<br/><br/>
            </p>

            <p>
                Néanmoins l'interface est responsive design, si vous réduisez la fenêtre le cube
                disparaîtra !<br/><br/>
            </p>
        </div>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(PresentationFace);
