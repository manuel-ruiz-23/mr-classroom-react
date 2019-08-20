import React from 'react';
import Classroom from '../Classroom';

import Intro from './lessons/Uno';

const dos = () => (<div>dos</div>);
const tres = () => (<div>tres</div>);

const lessons = [
    // {title: 'uno', view: Intro},
    {title: 'uno', view: Intro},
    {title: 'dos', view: dos},
    {title: 'tres', view: tres},
]

const HTMLCurse = () => {

    return(
        <Classroom lessons={lessons} />
    )
}

export default HTMLCurse;