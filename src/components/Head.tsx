
import {styled} from "styled-components";
import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";

type HeadProps = {
    title: string | undefined,
    description: string | undefined,
    image: string | undefined,
}

const Head = (props: HeadProps): ReactElement => {

    return (
        <Helmet>
            <html lang="en" />
            <meta name="description" content={props.description} />
            <meta name="image" content={props.image} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />
            <meta property="og:url" content={'a'} />
            <meta property="og:type" content="website" />
            <title>Stephen Loiola Bastos</title>
        </Helmet>
    );
}


export default Head;