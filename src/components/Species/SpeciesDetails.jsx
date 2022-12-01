import { elementTypeAcceptingRef } from "@mui/utils";
import { useState, useEffect } from "react";

function SpeciesDetails({ speciesDetails, id }) {
  const [chosenSpecies, setChosenSpecies] = useState([]);

  useEffect(() => {
    fetch(`https://legacy--api.herokuapp.com/api/v1/species/${id}`)
      .then((response) => response.json())
      .then((data) => setChosenSpecies(data));
  }, [id]);

  return (
    <div className="speciesbox">
      <table id="speciestable">
        <thead>
          <tr>
            <th colSpan={2}>{speciesDetails.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Native:</td>
            <td>{speciesDetails.native}</td>
          </tr>
          <tr>
            <td>Mortality:</td>
            <td>{chosenSpecies.mortality}</td>
          </tr>
          <tr>
            <td>Eyes:</td>
            <td>{chosenSpecies.eyes}</td>
          </tr>
          <tr>
            <td>Hair:</td>
            <td>{chosenSpecies.hair}</td>
          </tr>
          <tr>
            <td>Distinctions:</td>
            <td>
              {chosenSpecies.distinctions?.map((element) => (
                <li key={element.id}>{element.content}</li>
              ))}
            </td>
          </tr>
          <tr>
            <td>Related Species:</td>
            <td>
              {chosenSpecies.related_species?.map((element) => (
                <li key={element.id}>{element.name}</li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpeciesDetails;
