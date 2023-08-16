import React, {useState, useRef, useEffect} from 'react';
import "./style.scss"
import styled from "styled-components";
import {connect, useDispatch, useSelector} from "react-redux";
import {setPage, setPageSliceScroll} from "../redux/redux";
import {AppDispatch, RootState} from "../redux/redux";


type SmallBlockProps = {
    description: string;
    icon:  string,
    pageName: string,
    index: number,
}

const StyledButton = styled.section`
  .button {
    height: 50px;
    width: 200px;
    border-radius: 20px;
    background-color: #cbded9;
    margin: 15px 0px;
  }

  .activeButton {
    border-bottom: 5px solid firebrick;
  }
`

const SmallBlock = (props : SmallBlockProps) =>  {

    const page = useSelector((state: RootState) => state.page)
    const dispatch: AppDispatch = useDispatch();

    const dispatchPage = () => {
        dispatch(setPage({name: props.pageName}))
    }

    return(
        <StyledButton>
            <div className={`button button${props.index + 1}`} onClick={() => dispatchPage() }>
                <span> {props.description}</span>
            </div>
        </StyledButton>
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

/**
 *
 *
 * <div className={`${checkSelectedPage() ? 'smallBlockClicked' : 'smallBlock'}`} onClick={() => dispatchPage() }>
 *             <span> {props.description}</span>
 *             <img src={props.icon} alt="React Logo" />
 *         </div>
 */