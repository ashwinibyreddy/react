import './form.css';
import { useNavigate } from "react-router-dom";

function Loginfrom() {
    const userjsondata = localStorage.getItem("Registration");
    const userdata = JSON.parse(userjsondata);
    console.log(userdata)
    const navigate = useNavigate();
    const Home = () => {
        navigate(-1);
    }
    return (<div className='nextpage'>
        <h1 className='text-primary submit'>Your registration is successfull</h1>
        <h1 className="display-details">FirstName:
            {userdata.FirstName}
        </h1>
        <h1 className="display-details">LastName:
            {userdata.LastName}
        </h1>
        <h1 className="display-details">PhoneNumber:
            {userdata.PhoneNumber}
        </h1>
        <h1 className="display-details">Email:
            {userdata.Email}
        </h1>

        <button className="back-button" onClick={Home}>Back To Page</button>

    </div>);
}
export default Loginfrom;