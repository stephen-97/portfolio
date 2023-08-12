import React from 'react';
import "../style.scss"
import {connect, useSelector} from "react-redux";


import { RootState} from "../../redux/redux";

type StudyProps = {
}



const Study = (props : StudyProps) =>  {


    return(
        <>
            <h2>Etudes </h2>
            <div className={'blockStudy'}>
                <h2>RNCP36009 Directeur de projet informatique (Bac+5)</h2>
                <div>Aston Ecole</div>
                <p>
                    <span>Architecture Logiciel</span>
                    <span>Cloud Azure</span>
                    <span>Sécurité</span>
                    <span>Gestion de projet</span>
                    <span>Budgétisations</span>
                    <span>Normes ISO</span>
                </p>
            </div>
            <div className={'blockStudy'}>
                <h2>RNCP31678 Concepteur et Développeur d'application (Bac+3/4)</h2>
                <div>2iTech Academy by M2i</div>
                <p>
                    <span>Merise</span>
                    <span>UML</span>
                    <span>Javascript / TypeScript</span>
                    <span>Symfony</span>
                    <span>React</span>
                    <span>Node / Express</span>
                    <span>React Native</span>
                    <span>AWS</span>
                </p>
            </div>
            <div className={'blockStudy'}>
                <h2>L2 Informatique (Bac+2)</h2>
                <div>Paris Descartes</div>
                <p>
                    <span>Merise</span>
                    <span>UML</span>
                    <span>Javascript / TypeScript</span>
                    <span>Symfony</span>
                    <span>React</span>
                    <span>Node / Express</span>
                    <span>React Native</span>
                    <span>AWS</span>
                </p>
            </div>
        </>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Study);
