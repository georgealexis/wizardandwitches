import { useState, useEffect, React } from "react";
import ReactModal from "react-modal";
import Navbar from "../Navbar/Navbar";

function Wizardkind() {
  const [wizard, setWizard] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [wizardArray, setWizardArray] = useState([]);
  const [query, setQuery] = useState("");
  const [house, setHouse] = useState("");

  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters${house}`)
      .then((response) => response.json())
      .then((data) => setWizard(data));
  }, [house]);

  const filterWizard = (event) => {
    setHouse(`/house/${event.target.name}`);
  };

  const filterAllWizard = () => {
    return setHouse("");
  };

  const showWizardDetailsTrue = (event) => {
    setModalIsOpen(true);
    const selectedWizardArray = wizard.find((wizard) => {
      return wizard.name === event.target.value;
    });
    setWizardArray(selectedWizardArray);
  };

  const filterByName = (wizardname) => {
    if (query === "") {
      return wizardname;
    } else if (wizardname.name.toLowerCase().includes(query.toLowerCase())) {
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
        <button
          className="wizardName"
          key={wizard.name}
          onClick={showWizardDetailsTrue}
          value={wizard.name}
        >
          {wizard.name}
        </button>
      </div>
    ));
  }

  return (
    <>
      <h2 id="wizards"> Wizardkind: Wizards & Witches </h2>
      <Navbar />
      <button onClick={filterAllWizard} name="">
        All
      </button>
      <button onClick={filterWizard} name="Gryffindor">
        Gryffindor
      </button>
      <button onClick={filterWizard} name="Hufflepuff">
        Hufflepuff
      </button>
      <button onClick={filterWizard} name="Ravenclaw">
        Ravenclaw
      </button>
      <button onClick={filterWizard} name="Slytherin">
        Slytherin
      </button>
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

      {}

      <ReactModal
        className="modaloverlay"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <img src="" alt="No Wizard Found"></img>
      </ReactModal>

      <ReactModal
        className="modaloverlay"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h3>Profile</h3>
        <img
          className="wizardimageprofile"
          src={wizardArray?.image}
          onError={(e) =>
            (e.target.src =
              "https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png")
          }
          alt="No image found"
          key={wizardArray?.image}
        ></img>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{wizardArray.name}</td>
            </tr>
            <tr>
              <td>Species</td>
              <td>{wizardArray.species}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{wizardArray.gender}</td>
            </tr>
            <tr>
              <td>House</td>
              <td>{wizardArray.house}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{wizardArray.dateOfBirth}</td>
            </tr>
            <tr>
              <td>Ancestry</td>
              <td>{wizardArray.ancestry}</td>
            </tr>
            <tr>
              <td>Patronus</td>
              <td>{wizardArray.patronus}</td>
            </tr>
          </tbody>
        </table>
      </ReactModal>
    </>
  );
}

export default Wizardkind;
