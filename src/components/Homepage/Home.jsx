import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const registerStudent = () => {
    navigate("/Registration");
  };
  return (
    <>
      <div>
        <h1>WizarDex</h1>
        <img src="https://cdn.pixabay.com/photo/2018/06/15/11/16/hogwarts-3476786_960_720.png" />
        <Navbar />
        <h3>
          welcome to the world of <span onClick={registerStudent}>magic</span>!
        </h3>
      </div>
    </>
  );
}

export default Home;
