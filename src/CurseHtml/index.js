import React from 'react';
import Classroom from '../Classroom';

const uno = () => (<div>uno</div>);
const dos = () => (<div>dos</div>);
const tres = () => (<div>tres</div>);

const lessons = [
    {title: 'uno', view: uno},
    {title: 'dos', view: dos},
    {title: 'tres', view: tres},
]

const HTMLCurse = () => {

    return(
        <Classroom lessons={lessons} />
    )
}

export default HTMLCurse;