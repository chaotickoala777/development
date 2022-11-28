import "./politician.css";
import { useState } from "react";


export default function Politician({name, title, leg, age, party, image, cart, setCart, count, setCount}) {

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
                    setCount(count + 1)
                }
            }>In Support</button>

            <button onClick={() => {
                    console.log({name})
                    const newList = cart.filter((item) => item.name !== {name});
                    setCart(newList)
                    count !== 0
                    ? setCount(count - 1)
                    : setCount(0)
                    
                    console.log(newList)
                    console.log(cart)
                }
            }>Opposed</button>

        </div>


	);
}



