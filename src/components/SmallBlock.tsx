import React, {useState} from 'react';
import "./style.scss"
import {connect, useSelector} from "react-redux";
import {RootState} from "../redux/redux";


type SmallBlockProps = {
    description: string;
    icon:  string,
    pageName: string,
}

const SmallBlock = (props : SmallBlockProps) =>  {

    const page = useSelector((state: RootState) => state.page)

    const checkSelectedPage = () :boolean => {
        return page.name === props.pageName;
    }

    const [selected, SetSelected] = useState()
    console.error(page)
    return(
        <div className={`${checkSelectedPage() ? 'smallBlock' : 'smallBlockClicked'}`} onClick={() => null}>
            <span> {props.description}</span>
            <img src={props.icon} alt="React Logo" />
        </div>
    );
}

const mapState = (state: RootState) => state.page
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default connect(mapState)(SmallBlock);