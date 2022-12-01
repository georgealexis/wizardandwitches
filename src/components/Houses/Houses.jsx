import Navbar from "../Navbar/Navbar";
import HogwartsLogo from "../Images/HogwartsLogo.png";
import { useNavigate } from "react-router-dom";

function House({ callback }) {
  let navigate = useNavigate();
  const showHouseDetails = (event) => {
    callback(event.target.value);

    // gives the value from the button to the callback and returns it to the app.jsx file

    navigate(`${event.target.value}`);

    // navigates to the housedetails page
  };

  return (
    <>
      <h2 id="house">The Four Houses of Hogwarts</h2>
      <Navbar />
      <div className="logobox">
        <img src={HogwartsLogo} alt="HogwartsLogo" id="hogwartslogo"></img>
      </div>
      <div id="hogwartshouses">
        <div className="houses">
          <button id="Gryffindor" onClick={showHouseDetails} value="1">
            Gryffindor
          </button>
        </div>
        <div className="houses">
          <button id="Slytherin" onClick={showHouseDetails} value="2">
            Slytherin
          </button>
        </div>
        <div className="houses">
          <button id="Hufflepuff" onClick={showHouseDetails} value="3">
            Hufflepuff
          </button>
        </div>
        <div className="houses">
          <button id="Ravenclaw" onClick={showHouseDetails} value="4">
            Ravenclaw
          </button>
        </div>
      </div>
    </>
  );
}
export default House;
