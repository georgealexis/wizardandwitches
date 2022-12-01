import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import SpeciesDetails from "./SpeciesDetails";

function Species({ callback }) {
  const [species, setSpecies] = useState([]);
  const [speciesDetails, setSpeciesDetails] = useState([]);

  useEffect(() => {
    fetch(`https://legacy--api.herokuapp.com/api/v1/species`)
      .then((response) => response.json())
      .then((data) => setSpecies(data));
  }, []);

  const handleClick = (event) => {
    showSpeciesDetails(event.target.value);
  };

  const showSpeciesDetails = (value) => {
    const selectedSpecies = species.find((species) => {
      return species.name === value;
    });
    setSpeciesDetails(selectedSpecies);
  };

  return (
    <>
      <h2>Types of Species</h2>
      <Navbar />
      <div id="listofspecies">
        {species.map((species) => (
          <button
            className="speciesName"
            key={species.id}
            onClick={handleClick}
            value={species.name}
          >
            {species.name}
          </button>
        ))}
        <SpeciesDetails speciesDetails={speciesDetails} />
      </div>
    </>
  );
}

export default Species;
