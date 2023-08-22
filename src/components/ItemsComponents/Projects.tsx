import React from 'react';
import {connect, useSelector} from "react-redux";
import {styled} from "styled-components";


import { RootState} from "../../redux/redux";


type ProjectProps = {
}

const StyledProject = styled.section`
 

`




const Projects = (props : ProjectProps) =>  {

    return(
        <StyledProject>
            <div className={'ProjectContainer'}>
                <div className={'projectItemContainer'}>
                    <div className={'project'}>
                        <div className={'projectDescription'}>
                            "Adoptez Moi" est un projet en React Native que j'ai préparé pour la validation de la
                            formation "Concepteur et développeur d'application". J'ai effectué ce projet avec les technologies
                            React Native, Symfony et Dokcer. Ce fut une expérience très enrichissante, j'ai apprit à
                        </div>
                    </div>
                    <div className={'project'}>
                        <div className={'projectDescription'}>
                            EasyScan est un de mes projets en préparation, j'essaye de reproduire une application de lecture
                            de scan de BD/Manga. Cliquez pour jetez un oeil et potentiellement me donner un avis.
                        </div>
                    </div>
                </div>
            </div>
        </StyledProject>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Projects);
