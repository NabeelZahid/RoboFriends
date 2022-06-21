import React from "react";

const Scroll = (props) => { //Even though no props passed in to Scroll component on App2.js, every component automatically has children property, in this case CardList as it wraps it
    // return <h1>Hi</h1>
    // return props.children
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '700px'}}> { /* JS expression with curly brackets, another pair of brackets for object - can use CSS styles */}
            {props.children}
        </div>
    );
}

export default Scroll;