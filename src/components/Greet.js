import React from "react";

// function Greet() {
//     return <h1>Hi Silvia</h1>
// }

const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>Hi {name} a.k.a {heroName}</h1>
        </div>
    )
}
export default Greet;