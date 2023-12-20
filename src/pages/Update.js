import {useState,useEffect} from 'react';
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom';


import '../App.css'

function Edit() {
  const use=useNavigate();
  const [input,setInput]=useState({});
  const {id}=useParams();
  const loaddata=async()=>{
    const res=await axios.get(`http://localhost:4000/${id}`);
    setInput(res.data);
  }
  useEffect(()=>{
    loaddata();
  },[]) 
  const change=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setInput({...input,[name]:value})
  }
   const edituser=async(e)=>{
    use("/")
    await axios.put(`http://localhost:4000/${id}`,input)
   }
   
  
  return (
    <div className="App">
     <div className='table'>
     <h1>Updata User</h1>
     <form onSubmit={edituser} >
        <label>Name </label>
        <input type="text" name="name" value={input.name} onChange={change}  />
        <label>Email</label>
        <input type="email" name="email" value={input.email} onChange={change}  />
        <label>Father </label>
        <input type="text" name="father" value={input.father} onChange={change}  />
        <label>Mobile </label>
        <input type="number" name="mobile" value={input.mobile} onChange={change}  />
        <button type='submit' className='add'>Edit Data</button>
      </form>
     </div>
    </div>
  );
}

export default Edit;
