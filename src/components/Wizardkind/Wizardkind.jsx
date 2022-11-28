import { useState, useEffect, React } from "react";
import ReactModal from "react-modal";
import Navbar from "../Navbar/Navbar";

function Wizardkind() {
  const [wizard, setWizard] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [wizardArray, setWizardArray] = useState([]);

  const searchWizard = (event) => {
    event.preventDefault();
    console.log("searching");
  };

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((data) => setWizard(data));
  }, []);

  const showWizardDetailsTrue = (event) => {
    setModalIsOpen(true);
    // console.log(wizard);
    // console.log(event.target.value);

    const selectedWizardArray = wizard.find((wizard) => {
      return wizard.name === event.target.value;
    });
    setWizardArray(selectedWizardArray);
  };

  const showWizardDetailsFalse = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <h2 id="wizards"> Wizardkind: Wizards & Witches </h2>
      <Navbar />
      <label for="myCheck">Name:</label>
      <input type="checkbox" onclick="myFunction()"></input>
      <label for="myCheck">House:</label>
      <input type="checkbox" onclick="myFunction()"></input>
      <label for="myCheck">Ancestry:</label>
      <input type="checkbox" onclick="myFunction()"></input>
      <form onSubmit={searchWizard}>
        <input type="search" placeholder="Searching for ..."></input>
        <button> Search</button>
      </form>
      <div id="listofwizards">
        <div>
          {wizard.slice(0, 25).map((wizard) => (
            <div id="wizardrow">
              <img
                className="wizardimage"
                src={wizard.image}
                alt="No image found"
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
                  alt="No image found"
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
                    {/* <tr>
                      <td>Wand Wood</td>
                      <td>{wizardArray.wand["wood"]}</td>
                    </tr> */}
                    <tr>
                      <td>Patronus</td>
                      <td>{wizardArray.patronus}</td>
                    </tr>
                    {/* <tr>
                      <td>Played by</td>
                      <td>{wizardArray.actor}</td>
                    </tr> */}
                  </tbody>
                </table>
                <button id="modalbutton" onClick={showWizardDetailsFalse}>
                  x
                </button>
              </ReactModal>
            </div>
          ))}
        </div>
        <hr></hr>
        <div>
          {wizard.slice(25).map((wizard) => (
            <div id="wizardrow">
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
    </>
  );
}

export default Wizardkind;
