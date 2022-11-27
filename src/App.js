import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import { ReactDOM } from 'react-dom';
import { RadioGroup,FormControl,FormLabel, FormControlLabel, Radio } from '@mui/material';

import Politician from "./components/Politician";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // const [total, setTotal] = useState(0)
  const [cart, setCart] = useState([])
  // const [value, setValue] = useState("all");
  const [filter, setFilter] = useState("all");

  // useEffect(() => {
  //   setFilter(data);
  // }, []);

  function filtering(ptype) {
    // let filter = data.filter(type => type.party === ptype);
    console.log(data)
    let filter = data.filter(item => item.party === ptype)
    console.log(filter)
    return filter;
  }

  function handleType(e) {
    let typeFilter = e.target.value;
    typeFilter !== "all"
      ? setFilter(filtering(typeFilter))
      : setFilter(data);
  }

  return (
    <div className="App">
      <h1>Vote Tracker</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="filter">

        <div>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Party</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={handleType}
            >
              <FormControlLabel value="democrat" eventkey="democrat" control={<Radio />} label="Democrat" />
              <FormControlLabel value="republican" eventkey="republican" control={<Radio />} label="Republican" />
              <FormControlLabel value="all" eventkey="All" control={<Radio />} label="All" />

            </RadioGroup>
          </FormControl>

        </div>

        <br></br>
        <br></br>

        <div>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Legislative Body</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
            >
              <FormControlLabel value="house" control={<Radio />} label="House" />
              <FormControlLabel value="senate" control={<Radio />} label="Senate" />
              <FormControlLabel value="all" control={<Radio />} label="All" />

            </RadioGroup>
          </FormControl>


        </div>

        <div>
          <h2>Supporters</h2>
          <h3>

            {
            cart.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            // <p>Bakery Item {index}</p> // replace with BakeryItem component
            <div>
              {item}
            </div>
            ))}

          </h3>
          {/* <h3>Total: {total}</h3> */}
    
          {/* TODO: render a list of items in the cart */}
        </div>

      </div>

      <div className="people">
        {data.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          // <p>Bakery Item {index}</p> // replace with BakeryItem componen
          <Politician name={item.name} title={item.title} leg={item.legislativebody} age={item.age} party={item.party} image={item.image} cart={cart} setCart={setCart} />
        ))}
      </div>

    </div>
    
  );
}

export default App;

