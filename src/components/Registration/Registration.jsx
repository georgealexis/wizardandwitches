import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import { useState } from "react";
import HogwartsLogo from "../Images/HogwartsLogo.png";

function Registration() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [ancestry, setAncestry] = useState("");

  const RegisteredTrue = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setSpecies(event.target[1].value);
    setGender(event.target[2].value);
    setDob(event.target[3].value);
    setAncestry(event.target[4].value);
    setModalIsOpen(true);
  };

  let navigate = useNavigate();
  const backToHomepage = () => {
    navigate("/");
  };
  return (
    <>
      <h2>
        Enrollment to <span onClick={backToHomepage}>Hogwarts</span>
      </h2>
      <h4>
        Congratulations on accessing the link! Only those with magic are able to
        access it.
      </h4>

      <form onSubmit={RegisteredTrue}>
        <table className="enrolltable">
          <tbody>
            <tr>
              <td>Full Name:</td>
              <td className="enrolldata">
                <input
                  className="enrollinput"
                  type="text"
                  defaultValue=""
                  id="name"
                ></input>
              </td>
            </tr>
            <tr>
              <td>Species:</td>
              <td className="enrolldata">
                <select className="enrollinput">
                  <option value="Human">Human</option>
                  <option value="Giant">Giants</option>
                  <option value="Goblin">Goblins</option>
                  <option value="Vampire">Vampires</option>
                  <option value="Hag">Hags</option>
                  <option value="Elf">Elves</option>
                  <option value="Veela">Veela</option>
                  <option value="Merpeople">Merpeople</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td className="enrolldata">
                <select className="enrollinput">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td className="enrolldata">
                <input className="enrollinput" type="date"></input>
              </td>
            </tr>
            <tr>
              <td>Ancestry:</td>
              <td className="enrolldata">
                <select className="enrollinput">
                  <option value="Pure-Blood">Pure-Blood</option>
                  <option value="Half-Blood">Half-Blood</option>
                  <option value="Muggleborn">Muggleborn</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Register</button>
      </form>
      <ReactModal
        className="modalregister"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <img id="enrolledimage" src={HogwartsLogo}></img>
        <h4>HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY</h4>
        <p>Dear {name} , </p>
        <p>
          A {ancestry} {species} {gender}, born on {dob}, We are pleased to
          inform you that you have been accepted at Hogwarts School of
          Witchcraft and Wizardry. Please find enclosed a list of all necessary
          books and equipment. Term begins on 1 September. We await your owl by
          no later than 31 July.
        </p>
        <p> Yours sincerely, </p>
        <p> George Alexis </p>
        <p> Deputy Headmaster </p>
      </ReactModal>
    </>
  );
}

export default Registration;
