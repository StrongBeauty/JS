import React, { useState } from 'react';
import './lesson_5';

const Lesson5 = () => {

    const handleClick = () => {
        const result = document.querySelectorAll('.Test');
        console.log(result);
        //@ts-ignore
        //console.log([...result].filter(item => item.innerText !== 'Two'));
        //@ts-ignore
            console.log([].filter.call(result, item => item.innerText !== 'Two'));
    }

    return (
        <div>
            <div className='Test'>One</div>
            <div className='Test'>Two</div>
            <div className='Test'>Three</div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
export default Lesson5;