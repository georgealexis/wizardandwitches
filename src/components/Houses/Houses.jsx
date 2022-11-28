import Navbar from "../Navbar/Navbar";
import HogwartsLogo from "../Images/HogwartsLogo.png";
import { useNavigate } from "react-router-dom";

function House() {
  let navigate = useNavigate();
  const showHouseDetails = (event) => {
    navigate(`/Houses/${event.target.value}`);
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
          <button id="gryffindor" onClick={showHouseDetails} value="Gryffindor">
            Gryffindor
          </button>
        </div>
        <div className="houses">
          <button id="hufflepuff" onClick={showHouseDetails} value="Hufflepuff">
            Hufflepuff
          </button>
        </div>
        <div className="houses">
          <button id="ravenclaw" onClick={showHouseDetails} value="Ravenclaw">
            Ravenclaw
          </button>
        </div>
        <div className="houses">
          <button id="slytherin" onClick={showHouseDetails} value="Slytherin">
            Slytherin
          </button>
        </div>
      </div>
    </>
  );
}

export default House;
