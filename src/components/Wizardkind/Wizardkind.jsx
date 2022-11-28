import { useState, useEffect, React } from "react";
import ReactModal from "react-modal";
import Navbar from "../Navbar/Navbar";

function Wizardkind() {
  const [wizard, setWizard] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [wizardArray, setWizardArray] = useState([]);

  const filterWizard = (event) => {
    return console.log(event.target.name);
  };

  const searchWizard = (event) => {
    event.preventDefault();
    setModalIsOpen(true);

    // console.log(event.target[0].value);
    // console.log(wizard);

    const filteredWizard = wizard.filter((wizard) => {
      return wizard.name.toLowerCase() === event.target[0].value.toLowerCase();
    });
    console.log(filteredWizard[0]);
    setWizardArray(filteredWizard[0]);
  };

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((data) => setWizard(data));
  }, []);

  const showWizardDetailsTrue = (event) => {
    setModalIsOpen(true);
    const selectedWizardArray = wizard.find((wizard) => {
      return wizard.name === event.target.value;
    });
    console.log(selectedWizardArray);
    setWizardArray(selectedWizardArray);
  };

  const showWizardDetailsFalse = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <h2 id="wizards"> Wizardkind: Wizards & Witches </h2>
      <Navbar />
      <label>Gryffindor:</label>
      <input type="checkbox" onClick={filterWizard} name="Gryffindor"></input>
      <label>Hufflepuff:</label>
      <input type="checkbox" onClick={filterWizard} name="Hufflepuff"></input>
      <label>Ravenclaw:</label>
      <input type="checkbox" onClick={filterWizard} name="Ravenclaw"></input>
      <label>Slytherin:</label>
      <input type="checkbox" onClick={filterWizard} name="Slytherin"></input>
      <label>Pure-blood:</label>
      <input type="checkbox" onClick={filterWizard} name="pure-blood"></input>
      <label>Half-blood:</label>
      <input type="checkbox" onClick={filterWizard} name="half-blood"></input>
      <label>Muggleborn:</label>
      <input type="checkbox" onClick={filterWizard} name="muggleborn"></input>
      <form onSubmit={searchWizard}>
        <input type="search" placeholder="Searching for ..." name=""></input>
        <button> Search</button>
      </form>
      <div id="listofwizards">
        <div>
          {wizard.map((wizard, index) => (
            <div id="wizardrow" key={index}>
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
          ))}
        </div>
      </div>
      <ReactModal
        className="modaloverlay"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h3>Profile</h3>
        <img
          className="wizardimageprofile"
          src={wizardArray.image}
          onError={(e) =>
            (e.target.src =
              "https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png")
          }
          alt="No image found"
          key={wizardArray.image}
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
        <button id="modalbutton" onClick={showWizardDetailsFalse}>
          x
        </button>
      </ReactModal>
    </>
  );
}

export default Wizardkind;
