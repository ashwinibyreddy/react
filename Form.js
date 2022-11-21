import './form.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";




const Form = () => {
    const navigate = useNavigate();
    const [inputdata, setData] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Email: "",
        Password: ""

    })

    const { FirstName, LastName, PhoneNumber, Email, Password } = inputdata;
    const data = e => {
        setData({ ...inputdata, [e.target.name]: [e.target.value] })
    }
    const submitHandle = e => {
        e.preventDefault();


        localStorage.setItem("Registration", JSON.stringify(inputdata));
        navigate("/loginfrom")



    }
    return (
        <div className="App">
            <h1 className="form">Registration Form </h1>
            <form>
                <div className="container d-flex flex-column justify-content-center" >
                    <h2 className="Heading-names">First Name
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </h2>
                    <div>
                        <input className="Box" type="text" placeholder="First Name" name="FirstName" value={FirstName} onChange={data} />

                    </div>
                    <h2 className="Heading-names">Last Name
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </h2>
                    <div>
                        <input className="Box" type="text" placeholder="Last Name" name="LastName" value={LastName} onChange={data} />
                    </div>
                    <h2 className="Heading-mobile">Mobile Number
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                    </h2>
                    <div>
                        <input className="Box" type="text" placeholder="Mobile Number" name="PhoneNumber" value={PhoneNumber} onChange={data} />
                    </div>
                    <h2 className="Heading-email">Email
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                    </h2>
                    <div>
                        <input className="Box" type="text" placeholder="Email(optional)" name="Email" value={Email} onChange={data} />
                    </div>
                    <h2 className="Heading-password">Password
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-file-earmark-lock-fill" viewBox="0 0 16 16">
                            <path d="M7 7a1 1 0 0 1 2 0v1H7V7zM6 9.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 9h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 12h-3a.637.637 0 0 1-.395-.125C6.02 11.807 6 11.742 6 11.7V9.3z" />
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0z" />
                        </svg>
                    </h2>
                    <div>
                        <input className="Box" type="password" placeholder="At least 6 characters" name="Password" value={Password} onChange={data} />
                    </div>
                    <p className="paragraph"><span className="login text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-info" viewBox="0 0 16 16">
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg></span>password must be atleast 6 characters
                    </p>
                    <div>
                        <button className="btn-primary button" onClick={submitHandle}>Register</button>
                    </div>
                    <p className="paragraph-account">Already have an account?<span className="login">Login here</span></p>
                </div>
            </form>
        </div>

    );
}

export default Form; 