import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";

function Spells() {
  const [spells, setSpells] = useState([]);
  const [spellDetails, setSpellDetails] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://fedeperin-harry-potter-api-en.herokuapp.com/spells")
      .then((response) => response.json())
      .then((data) => setSpells(data));
  }, []);

  // fetch api

  const handleClick = (event) => {
    showSpellDetails(event.target.value);
  };
  // click spell button, exceute showspelldetails

  const showSpellDetails = (value) => {
    const selectedSpell = spells.find((spell) => {
      return spell.spell === value;
    });

    setSpellDetails(selectedSpell);
  };

  // takes event.target.value as value, find spell in the spell array where spell.spell (spell name) is equal to value

  const handleChange = (event) => {
    setSpellDetails([]);
    setQuery(event.target.value);
  };

  // when typing, set the description box to be empty
  // setQuery to whatever is written in the box

  const filterByName = (spellname) => {
    if (query === "") {
      return spellname;
    } else if (spellname.spell.toLowerCase().includes(query.toLowerCase())) {
      return spellname;
    }
  };

  // If the query is empty, return the spellname. If the spellname includes the query, return thespellname.
  // @returns the spellname if the query is empty or if the
  // spellname.spell.toLowerCase().includes(query.toLowerCase()) is true.

  const result = spells.filter(filterByName);

  let resultspells;

  if (result.length === 0) {
    resultspells = <button>no such spell</button>;
  } else {
    resultspells = result.map((spell) => (
      <button
        className="spellName"
        key={spell.id}
        onClick={handleClick}
        value={spell.spell}
      >
        {spell.spell}
      </button>
    ));
  }

  // If the result array is empty, then the resultspells will be a button that says "no such spell"
  // Mapping through the result array and returning a button for each spell in the array.

  return (
    <>
      <h2 id="spells">Books of Spells</h2>
      <Navbar />
      <input placeholder="Searching for ..." onChange={handleChange}></input>
      <div id="listofspells">
        <ul>{resultspells}</ul>
        <div id="descriptionOfSpells">
          <h4>Description</h4>
          <p>{spellDetails.use}</p>
        </div>
      </div>
    </>
  );
}

export default Spells;
