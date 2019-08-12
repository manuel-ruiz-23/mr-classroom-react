import React from 'react';

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

export default Navbar;