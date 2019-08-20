import React from 'react'
import PropTypes from 'prop-types';


import styles from './navbarItem.module.css';

const NavItem = ({lesson, index, navigate}) => {

    const {title, comp} = lesson;

    let className = styles.navItem;
    if(comp) className = styles.navItemComp;

    return(
        <div className={className} onClick={() => navigate(index)}>
            <p>{title}</p>
        </div>
    )
}

NavItem.propTypes = {
    lesson: PropTypes.shape({
        title: PropTypes.string.isRequired,
        comp: PropTypes.bool,
    }),
    index: PropTypes.number.isRequired,
    navigate: PropTypes.func.isRequired,

}

export default NavItem;