import React, {ForwardedRef, forwardRef} from 'react';
import "../style.scss"
import {connect, useSelector} from "react-redux";

import { RootState} from "../../redux/redux";


type ExperienceProps = {
    ref: HTMLDivElement | undefined
}

const Experience = forwardRef<HTMLDivElement, ExperienceProps>((props: ExperienceProps, ref: ForwardedRef<HTMLDivElement>) =>  {

    type ExperienceBlockProps = {
        date1: number,
        date2:  number,
        title: string,
        description: string,
    }


    const ExperienceBlock = (props: ExperienceBlockProps) => {
        return (
            <div className={'blockExperience'}>
                <div className={'titleAndDate'}>
                    <span className={'dateExperience'}>{`${props.date1} ${props.date2}`}</span>
                    <div>
                        <div className={'titleExperience'}>{`${props.title}`}</div>
                        <div className={'descriptionExperience'}> {`${props.description}`}</div>
                        <div className={'tagsExperience'}>
                            <span>CSS</span>
                            <span>React</span>
                            <span>Node</span>
                            <span>TypeScript</span>
                            <span>Ansible</span>
                            <span>Terraform</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        < >
            <div className={"experienceFaceContainer"}>
                <h2>Experience Profesionnel</h2>
                <ExperienceBlock
                    date1={2020}
                    date2={2023}
                    title={'Gendarmerie Nationale'}
                    description={'Developpeur Web et Devops en apprentissage, trois projets effectués en tant que\n' +
                        'déveleoppeur web dont deux utilisant ReactJS et NodeJs en TypeScript et un utilisant\n' +
                        'Symfony. Un projet en Devops pour introduire la solution Airflow dans la messagerie,\n' +
                        'avec l\'utilisation de terraform, ansible et des principes architecturaux.'}

                />
            </div>
        </>
    );
})

const mapState = (state: RootState) => state.page

export default connect(mapState)(Experience);
