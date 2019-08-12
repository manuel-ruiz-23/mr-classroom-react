import React from 'react'

import styles from './navbarItem.module.css';

const NavItem = ({lesson, index, navigate, end}) => {

    const {title, comp} = lesson;

    let className = styles.navItem;
    if(comp) className = styles.navItemComp;

    return(
        <div className={className} onClick={() => navigate(index)}>
            <p>{title}</p>
        </div>
    )
}

export default NavItem;