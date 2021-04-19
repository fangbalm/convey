import React from 'react';
import {Image} from "react-bootstrap";

function RightSide() {
    const loginImageStyles = {
        border: "none", 
        width: "100%", 
        height: "100%"
    }


    return (
        <div>
           <Image src="https://i.imgur.com/ksDVWOJ.jpg" style={loginImageStyles} />
        </div>
    )
}

export default RightSide;