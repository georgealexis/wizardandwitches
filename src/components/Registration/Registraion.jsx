import { useNavigate } from "react-router-dom";

function Registration() {
  const Registered = () => {
    return alert(
      "You have been registered for Hogwarts! Keep a lookout for out Owl Postal Service! "
    );
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
      <table className="enrolltable">
        <tbody>
          <tr>
            <td>Full Name:</td>
            <td className="enrolldata">
              <input className="enrollinput" type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Species:</td>
            <td className="enrolldata">
              <input className="enrollinput" type="text"></input>
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
                <option value="Pure">Pure-Blood</option>
                <option value="Half">Half-Blood</option>
                <option value="Muggle">Muggleborn</option>
              </select>
            </td>
          </tr>
          <button onClick={Registered}>Register</button>
        </tbody>
      </table>
    </>
  );
}

export default Registration;
