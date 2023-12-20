import {useState} from 'react';
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from 'react-router-dom';

import '../App.css'

function App() {
  const[input,setInput]=useState({});
  const use=useNavigate();
  const change=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setInput({...input,[name]:value})
  }
  const submit=async(e)=>{
    window.alert("Data add Successfully")
    use("/")
    // await axios.post("https://crudappaplicvation.onrender.com",input);
    await axios.post("http://localhost:4000",input);


  }
  
  return (
    <>
    <div className="App">
      <div className='table'>
        <h1>Add User</h1>

       <form onSubmit={submit}>
        <label>Name </label>
        <input type="text" name="name" value={input.name} onChange={change} required  />
         <label>Email </label>
        <input type="email" name="email" value={input.email} onChange={change} required />
        <label>Father </label>
       <input type="text" name="father" value={input.father} onChange={change} required />
        <label>Mobile</label>
        <input type="number" max="9999999999" min="1000000000"  name="mobile" value={input.mobile} onChange={change} required />
        <button type='submit' className='add'>Add User</button>
         </form>
      </div>
    </div>
    </>
  );
}

export default App;