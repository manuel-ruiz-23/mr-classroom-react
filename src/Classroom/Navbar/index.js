import React from 'react';
import PropTypes from 'prop-types';

import NavItem from './NavItem'; 

import styles from './navbar.module.css';

const Navbar = ({lessons, navigate}) => {
    
    console.log('lessons from nav', lessons.length);

    return (
        <div className={styles.navbar}>
            {lessons.map((lesson, index) => (
                <NavItem 
                    key={index} 
                    lesson={lesson}
                    index={index}
                    end={index === lessons.length-1}
                    navigate={navigate}    
                />
            ))}
        </div>
    )
}

Navbar.propTypes = {
    lessons: PropTypes.array,
    navigate: PropTypes.func,
}

export default Navbar;