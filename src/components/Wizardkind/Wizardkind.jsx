import { useState, useEffect, React } from "react";
import Navbar from "../Navbar/Navbar";

function Wizardkind() {
  const [wizard, setWizard] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters`)
      .then((response) => response.json())
      .then((data) => setWizard(data));
  }, []);

  const filterByName = (wizardname) => {
    if (query === "") {
      return wizardname;
    } else if (
      wizardname.character.toLowerCase().includes(query.toLowerCase())
    ) {
      return wizardname;
    }
  };

  const result = wizard.filter(filterByName);

  let resultwizard;

  if (result.length === 0) {
    resultwizard = <h3>no such wizard ...</h3>;
  } else {
    resultwizard = result.map((wizard, index) => (
      <div className="grid-item" key={index}>
        <img
          className="wizardimage"
          src={wizard.image}
          onError={(e) =>
            (e.target.src =
              "https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png")
          }
          alt="No Image Found"
          key={wizard.image}
        ></img>
        <br></br>
        <p className="wizardName" key={wizard.id}>
          {wizard.character}
        </p>
      </div>
    ));
  }

  return (
    <>
      <h2 id="wizards"> Wizardkind: Wizards & Witches </h2>
      <Navbar />
      <div>
        <input
          placeholder="Searching for ..."
          name=""
          onChange={(event) => setQuery(event.target.value)}
        ></input>
      </div>
      <div id="listofwizards">
        <div className="grid-container">{resultwizard}</div>
      </div>
    </>
  );
}

export default Wizardkind;
