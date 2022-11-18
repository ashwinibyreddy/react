import './form.css';

function Loginfrom() {
    const userjsondata = localStorage.getItem("Registration");
    const userdata = JSON.parse(userjsondata);
    console.log(userdata)
    return (<div>
        <h1 className='text-primary submit'>Your registration is successfull</h1>
    </div>);
}
export default Loginfrom;