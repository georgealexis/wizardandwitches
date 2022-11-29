import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";

function Spells() {
  const [spells, setSpells] = useState([]);
  const [spellDetails, setSpellDetails] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/spells")
      .then((response) => response.json())
      .then((data) => setSpells(data));
  }, []);

  const handleClick = (event) => {
    showSpellDetails(event.target.value);
  };

  const handleChange = (event) => {
    setSpellDetails([]);
    setQuery(event.target.value);
  };

  const showSpellDetails = (value) => {
    const selectedSpell = spells.find((spell) => {
      return spell.name === value;
    });

    setSpellDetails(selectedSpell);
  };

  const filterByName = (spellname) => {
    if (query === "") {
      return spellname;
    } else if (spellname.name.toLowerCase().includes(query.toLowerCase())) {
      return spellname;
    }
  };

  const result = spells.filter(filterByName);

  let resultspells;

  if (result.length === 0) {
    resultspells = <button>no such spell</button>;
  } else {
    resultspells = result.map((spell) => (
      <button
        className="spellName"
        key={spell.name}
        onClick={handleClick}
        value={spell.name}
      >
        {spell.name}
      </button>
    ));
  }

  return (
    <>
      <h2 id="spells">Books of Spells</h2>
      <Navbar />
      <input placeholder="Searching for ..." onChange={handleChange}></input>
      <div id="listofspells">
        <ul>{resultspells}</ul>
        <div id="descriptionOfSpells">
          <h4>Description</h4>
          <p>{spellDetails.description}</p>
        </div>
      </div>
    </>
  );
}

export default Spells;
