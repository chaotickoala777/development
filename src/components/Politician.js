import "./politician.css";
import { useState } from "react";

export default function Politician({name, title, leg, age, party, image, cart, setCart}) {

    // const name = props.name;
    // const description = props.description;
    // const price = props.price;
    // const image = props.image;


	return (

        <div className="border">
            <h4>
                <img src={image} width="300rem" height="330rem"/>
            </h4>
            <h4>
                {name}
            </h4>
            <h5>
                Title: {title}
                <br/>
                Legislative Body: {leg}
                <br/>
                Age: {age}
                <br/>
                Party: {party}
            </h5>

            <button onClick={() => {
                    // setTotal(total + price) 
                    setCart([...cart, name])
                }
            }>In Support</button>

        </div>


	);
}



