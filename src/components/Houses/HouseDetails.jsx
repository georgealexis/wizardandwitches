import { useNavigate } from "react-router-dom";
import Gryffindor from "../Images/Gryffindor.jpg";
import Hufflepuff from "../Images/Hufflepuff.jpg";
import Ravenclaw from "../Images/Ravenclaw.jpg";
import Slytherin from "../Images/Slytherin.jpg";

function HouseDetails() {
  let navigate = useNavigate();
  const returnToHouses = () => {
    navigate("/Houses");
  };

  if (window.location.pathname === "/Houses/Gryffindor")
    return (
      <>
        <h3 className="house" id="Gryffindor">
          Gryffindor
        </h3>
        <div className="logobox">
          <img src={Gryffindor} alt="GryffindorLogo"></img>
        </div>
        <p className="houseDetails" id="Gryffindor">
          Gryffindor valued bravery, daring, nerve, and chivalry. Its emblematic
          animal was the lion, it's representative gemstone was rubies, and its
          colours were scarlet and gold. The founder of the House was Godric
          Gryffindor. Gryffindor corresponded to the element of fire.
        </p>
        <button onClick={returnToHouses}> Back </button>
      </>
    );
  if (window.location.pathname === "/Houses/Hufflepuff")
    return (
      <>
        <h3 className="house" id="Hufflepuff">
          Hufflepuff
        </h3>
        <div className="logobox">
          <img src={Hufflepuff} alt="HufflepuffLogo"></img>
        </div>
        <p className="houseDetails" id="Hufflepuff">
          Hufflepuff valued hard work, dedication, patience, loyalty, and fair
          play. Its emblematic animal was the badger, it's representative
          gemstone was yellow diamonds, and yellow and black were its colours.
          The founder of the House was Helga Hufflepuff. Hufflepuff corresponded
          to the element of earth.
        </p>
        <button onClick={returnToHouses}> Back </button>
      </>
    );
  if (window.location.pathname === "/Houses/Ravenclaw")
    return (
      <>
        <h3 className="house" id="Ravenclaw">
          Ravenclaw
        </h3>
        <div className="logobox">
          <img src={Ravenclaw} alt="RavenclawLogo"></img>
        </div>
        <p className="houseDetails" id="Ravenclaw">
          Ravenclaw valued intelligence, knowledge, curiosity, creativity and
          wit. Its emblematic animal was the eagle, it's representative gemstone
          was sapphires, and its colours were blue and bronze. The founder of
          the House was Rowena Ravenclaw. Ravenclaw corresponded to the element
          of air.
        </p>
        <button onClick={returnToHouses}> Back </button>
      </>
    );
  if (window.location.pathname === "/Houses/Slytherin")
    return (
      <>
        <h3 className="house" id="Slytherin">
          Slytherin
        </h3>
        <div className="logobox">
          <img src={Slytherin} alt="SlytherinLogo"></img>
        </div>
        <p className="houseDetails" id="Slytherin">
          Slytherin valued ambition, leadership, self-preservation, cunning and
          resourcefulness. Its emblematic animal was the serpent, it's
          representative gemstone was emeralds, and its colours were emerald
          green and silver. The founder of the House was Salazar Slytherin.
          Slytherin corresponded to the element of water.
        </p>
        <button onClick={returnToHouses}> Back </button>
      </>
    );
}
export default HouseDetails;
