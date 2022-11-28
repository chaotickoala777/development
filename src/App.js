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
  const [filter, setFilter] = useState(data);

  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(0);



  // useEffect(() => {
  //   setFilter(data);
  // }, []);

  function filtering_p(ptype) {
    // setFilter(data.filter(item => item.party === ptype))
    let filtering = data.filter(item => item.party === ptype)
    console.log(filtering)
    return filtering;
  }

  function handleType_p(e) {
    let typeFilter = e.target.value;
    typeFilter !== "all"
      ? setFilter(filtering_p(typeFilter))
      : setFilter(data);
  }

  function filtering_c(ptype) {
    // setFilter(data.filter(item => item.party === ptype))
    let filtering = data.filter(item => item.legislativebody === ptype)
    return filtering;
  }

  function handleType_c(e) {
    let typeFilter = e.target.value;
    typeFilter !== "all"
      ? setFilter(filtering_c(typeFilter))
      : setFilter(data);
  }

  function age_change(e) {
    let typeFilter = e.target.value;
    if (typeFilter === "agea") {
      setFilter([...filter].sort((a, b) => a.age - b.age))
    }
    if (typeFilter === "aged") {
      setFilter([...filter].sort((a, b) => b.age - a.age))
    }
    if (typeFilter === "reset") {
      setFilter(data)
    }
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
              onChange={handleType_p}
            >
              <FormControlLabel value="Democrat" eventkey="democrat" control={<Radio />} label="Democrat" />
              <FormControlLabel value="Republican" eventkey="republican" control={<Radio />} label="Republican" />
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
              onChange={handleType_c}
            >
              <FormControlLabel value="House of Representatives" control={<Radio />} label="House" />
              <FormControlLabel value="Senate" control={<Radio />} label="Senate" />
              <FormControlLabel value="all" control={<Radio />} label="All" />

            </RadioGroup>
          </FormControl>

        </div>

        <br></br>
        <br></br>

        {/* onChange={setFilter([...data].sort((a, b) => a.age - b.age))}  */}

        <div>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sort by:</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="reset"
              name="radio-buttons-group"
              onChange={age_change}
            >
              <FormControlLabel value="agea" control={<Radio />} label="Age (ascending)" />
              <FormControlLabel value="aged" control={<Radio />} label="Age (descending)" />
              <FormControlLabel value="reset" control={<Radio />} label="Reset" />

            </RadioGroup>
          </FormControl>

            {/* <button onClick={() => {
                  setFilter([...filter].sort((a, b) => a.age - b.age))
                }
            }>Sort by: Age - ascending</button>


            <button onClick={() => {
                  setFilter([...filter].sort((a, b) => b.age - a.age))
                }
            }>Sort by: Age - descending</button> */}

        </div>

        <div>
          <h3>Supporters</h3>
          <div>

            {
            cart.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            // <p>Bakery Item {index}</p> // replace with BakeryItem component
            <div>
              {item}
            </div>
            ))}

          </div>
          <p>Votes: {count}</p>
          <p>Lobbyist funding: {money}</p>
    
          {/* TODO: render a list of items in the cart */}
        </div>

      </div>

      <div className="people">
        {filter.map((item) => ( // TODO: map bakeryData to BakeryItem components
          // <p>Bakery Item {index}</p> // replace with BakeryItem componen
          <Politician name={item.name} title={item.title} leg={item.legislativebody} age={item.age} party={item.party} lobby={item.lobby} image={item.image} cart={cart} setCart={setCart} count={count} setCount={setCount} money={money} setMoney={setMoney} />
        ))}
      </div>

    </div>
    
  );
}

export default App;

