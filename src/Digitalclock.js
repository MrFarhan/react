import React from 'react';

function Digitalclock(props) {
    console.log(props)
    return <div>
        {props.time}
    </div>

}


export default Digitalclock;