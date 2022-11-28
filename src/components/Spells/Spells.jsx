import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";

function Spells() {
  const [spells, setSpells] = useState([]);
  const [spellDetails, setSpellDetails] = useState([]);
  // const [searchingSpellName, setSearchingSpellName] = useState("");

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/spells")
      .then((response) => response.json())
      .then((data) => setSpells(data));
  }, []);

  const showSpellDetails = (value) => {
    const selectedSpell = spells.find((spell) => {
      return spell.name === value;
    });

    setSpellDetails(selectedSpell);
  };

  const searchSpell = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(spells);

    let filteredSpell = spells.filter((spell) => {
      return spell.name.toLowerCase() === event.target[0].value.toLowerCase();
    });
    console.log(filteredSpell);
    setSpellDetails(filteredSpell[0]);
  };

  return (
    <>
      <h2 id="spells">Books of Spells</h2>
      <Navbar />
      <form onSubmit={searchSpell}>
        <input type="search" placeholder="Searching for ..."></input>
        <button> Search</button>
      </form>
      <div id="listofspells">
        <ul>
          {spells.map((spell) => (
            <button
              className="spellName"
              key={spell.name}
              onClick={(event) => showSpellDetails(event.target.value)}
              value={spell.name}
            >
              {spell.name}
            </button>
          ))}
        </ul>
        <div id="descriptionOfSpells">
          <h4>Description</h4>
          <p>{spellDetails.description}</p>
        </div>
      </div>
    </>
  );
}

export default Spells;
