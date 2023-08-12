import React, {useState, useRef} from 'react';
import "./style.scss"
import {connect, useDispatch, useSelector} from "react-redux";
import {setPage} from "../redux/redux";
import {AppDispatch, RootState} from "../redux/redux";


type SmallBlockProps = {
    description: string;
    icon:  string,
    pageName: string,
}

const SmallBlock = (props : SmallBlockProps) =>  {

    const page = useSelector((state: RootState) => state.page)
    const dispatch: AppDispatch = useDispatch();
    const ref = useRef<null | HTMLDivElement>(null);

    const checkSelectedPage = () :boolean => {
        return page.name === props.pageName;
    }


    return(
        <div className={`${checkSelectedPage() ? 'smallBlockClicked' : 'smallBlock'}`} onClick={() => dispatch(setPage({name : props.pageName})) }>
            <span> {props.description}</span>
            <img src={props.icon} alt="React Logo" />
        </div>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(SmallBlock);

/**
 *
 * <div className={`${checkSelectedPage() ? 'smallBlockClicked' : 'smallBlock'}`} onClick={() => dispatch(setPage({name : props.pageName}))}>
 *             <span> {props.description}</span>
 *             <img src={props.icon} alt="React Logo" />
 *         </div>
 */