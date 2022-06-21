import React from 'react';

// const Card = (props) => {
const Card = ({ name, email, id }) => { //Further destructuring after below step, adding it into the parameter/props
    // const { name, email, id } = props; // Destructuring, dont need to use props.whatever
    return ( //Return 1 element
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> {/* tachyons library for easy styling */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/> {/* template string to use ID from array to randomise icons from API */}
            <div>
                {/* <h2>{props.name}</h2> */}
                <h2>{name}</h2>
                {/* <p>{props.email}</p> */}
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;