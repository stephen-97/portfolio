import React from 'react';
import "../style.scss"
import {connect, useSelector} from "react-redux";


import { RootState} from "../../redux/redux";


type ProjectProps = {
}


const Projects = (props : ProjectProps) =>  {

    return(
        <>
            <h2>Projets ! </h2>
            <div className={'projectItemContainer'}>
                <div className={'project'}></div>
                <div className={'project'}></div>
            </div>
        </>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Projects);
