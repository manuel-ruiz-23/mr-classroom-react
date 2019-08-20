import React from 'react';
import PropTypes from 'prop-types';

import styles from './bottomNav.module.css';

const BottomNav = ({nextLesson, current, lessons}) => { 
    const finalLesson = current === lessons.length -1;

    let bottomText = ''

    if(!finalLesson){
        bottomText = 'Siguiente lección: ' + lessons[current+1].title;
    } else {
        bottomText = 'Felicidades Completaste el Curso!';
    }

    return (
        <div className={styles.wrapper}>
            <p>{bottomText}</p>
            
            {!finalLesson && (
                <button onClick={() => nextLesson(current)}>
                    next
                </button>
            )}
            
        </div>
    )
};

BottomNav.propTypes = {
    nextLesson: PropTypes.func,
    current: PropTypes.number,
    lessons: PropTypes.array,
}

export default BottomNav;

