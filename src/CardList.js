import React from "react";
import Card from "./Card";

const CardList = ({ robots2 }) => { //( props ) => { destructed to just robots2
    // const cardsArray = robots.map((user, i) => {
    //     return (
    //         <Card
    //             key={i}
    //             id={robots[i].id}
    //             name={robots[i].name}
    //             email={robots[i].email} /> //Key should be something unique like ID, something which doesnt change, i here could change
    //     )
    // })
    return (
        <div>
            {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
            {/* {cardsArray} */}
            { //JS syntax so can move code here from above without calling cardsArray as its JS
                robots2.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots2[i].id} //id={props.robots2[i].id}
                            name={robots2[i].name}
                            email={robots2[i].email}
                        /> //Key should be something unique like ID, something which doesnt change, i here could change
                    );
                })
            }
        </div>
    );
}

export default CardList;