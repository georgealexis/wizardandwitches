import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function HouseDetails({ id }) {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    fetch(`https://legacy--api.herokuapp.com/api/v1/houses/${id}`)
      .then((response) => response.json())
      .then((data) => setHouse(data));
  });

  // fetching data from API based on the Id, 1 2 3 4

  let navigate = useNavigate();
  const returnToHouses = () => {
    navigate("/Houses");
  };

  // back button returns user to house page

  return (
    <>
      <h3 className="house" id={house.name}>
        {house.name}
      </h3>
      <div className="logobox">
        <img src={house.image_url} alt="HouseLogo"></img>
      </div>
      <div className="houseDetails" id={house.name}>
        <div className="details">Founder : {house.founder}</div>
        <div className="details">Animal : {house.animal}</div>
        <div className="details">Traits : {house.traits}</div>
        <div className="details">Element : {house.element}</div>
        <div className="details">Colors : {house.colors}</div>
        <div className="details">Ghost : {house.ghost}</div>
        <div className="details">Common Room : {house.common_room}</div>
      </div>
      <button onClick={returnToHouses}> Back </button>
    </>
  );
}
export default HouseDetails;

//data from API id will be shown
