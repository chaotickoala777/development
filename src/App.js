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

  const [party, setParty] = useState("all");
  const [chamber, setChamber] = useState("all");

  // const [flag, setFlag] = useState(0);


  useEffect(() => {
    let matchesParty = false
    let matchesChamber = false
    const newFilter = data.filter(el => {
      if (party !== "all") {
        matchesParty = el.party == party
      } else {
        matchesParty = true
      }
      if (chamber !== "all") {
        matchesChamber = el.legislativebody == chamber
      } else {
        matchesChamber = true
      }
      return matchesParty && matchesChamber
      // conditionals to filter the list depending on party and chamber
    })
    setFilter(newFilter)
    // the following states will trigger useEffect automatically
  }, [party, chamber])



  // let party_global = "all"
  // let chamber_global = "all"

  // useEffect(() => {
  //   setFilter(data);
  // }, []);

  // function filtering_p(ptype) {
  //   // setFilter(data.filter(item => item.party === ptype))
  //   // let filtering = data.filter(item => item.party === ptype)
  //   // console.log(filtering)
  //   // return filtering;
  //   // if (chamber !== "all" && flag === 0) {
  //   //   let filtering = filtering_c(chamber).filter(item => item.party === ptype)
  //   //   // setFlag(0);
  //   //   return filtering;
  //   // } else {
  //     if (chamber !== "all") {
  //       let filtering = data.filter(item => item.party === chamber).filter(item => item.party === ptype)
  //       return filtering;
  //     } else {
  //       let filtering = data.filter(item => item.party === ptype)
  //       return filtering;
  //     }
  //     // setFlag(0);
      
  //   // }
  // }

  function handleType_p(e) {
    // let typeFilter = e.target.value;
    setParty(e.target.value);
    // setFlag(1);
    // console.log(flag)
    // if (typeFilter !== "all") {
    //   setFilter(filtering_p(typeFilter))
    // } else {
    //   if (chamber !== "all") {
    //     setFilter(data.filter(item => item.party === chamber));
    //   } else {
    //     setFilter(data)
    //   }
    // }
  }

  // function filtering_c(ptype) {
  //   // setFilter(data.filter(item => item.party === ptype))
  //   // if (party !== "all" && flag === 0) {
  //   //   let filtering = filtering_p(party).filter(item => item.legislativebody === ptype)
  //   //   // setFlag(0);
  //   //   return filtering;
  //   // } else {
  //     if (party !== "all") {
  //       let filtering = data.filter(item => item.party === party).filter(item => item.legislativebody === ptype)
  //       return filtering;
  //     } else {
  //       let filtering = data.filter(item => item.legislativebody === ptype)
  //       return filtering;
  //     }
  //     // setFlag(0);
      
  //   // }
  // }

  function handleType_c(e) {
    // let typeFilter = e.target.value;
    setChamber(e.target.value);
    // setFlag(1);
    // console.log(flag)
    // if (typeFilter !== "all") {
    //   setFilter(filtering_c(typeFilter))
    // } else {
    //   if (party !== "all") {
    //     setFilter(data.filter(item => item.party === party))
    //   } else {
    //     setFilter(data)
    //   }
    // }
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
      setFilter([...filter])
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
              <FormControlLabel value="reset" control={<Radio />} label="Unsort" />

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

