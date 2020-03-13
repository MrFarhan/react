import React from 'react';

function Digitalclock(props) {
    // console.log(props)
    return <div>
        <h1>Digital Clock</h1>
        {props.time}
    </div>

}


export default Digitalclock;