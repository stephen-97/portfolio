import React, {Component, ReactElement} from 'react';
import PropTypes from 'prop-types';
import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import Any = jasmine.Any;

const Icon = (props: any) => {
    const styles = {
        svg: {
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        path: {
            fill: props.color,
        },
    };

    const selectIcon = (props: any) => {
        switch (props.iconName) {
            case 'GitHub':
                return <GithubIcon />
            case 'Linkedin':
                return <LinkedinIcon />
        }
    }

    return (
        <>
            {selectIcon}
        </>
    );


};

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string
};
Icon.defaultProps = {
    size: 16
};

export default Icon
