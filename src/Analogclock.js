import React from 'react';


function Analogclock(props) {
    console.log(props.time)
    let time = new Date(props.time);

    const clockContainer = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'


    }

    const secondHand = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((time.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    }


    const minuteHand = {

        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid grey',
        width: '40%',
        height: 3,
        transform: 'rotate(' + ((time.getMinutes() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'gray'
    }

    const hourHand = {
        position: 'relative',
        top: 92,
        left: 100,
        border: '1px solid gray',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((time.getHours() / 12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'gray'
    }



    return (
        <div>
            <h1>Analog clock</h1>
            <div style={clockContainer}>
                <div style={secondHand}></div>
                <div style={minuteHand}></div>
                <div style={hourHand}></div>
            </div>
        </div >

    )

}


export default Analogclock;