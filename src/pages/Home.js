import {useEffect, useState,} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios'
import '../App.css';
import { Link } from 'react-router-dom';

function Home(){
    const {id}=useParams();
    const [output,setOutput]=useState([]);

    const calldata=async()=>{
        const {data}=await axios.get("http://localhost:4000");
        setOutput(data);
    }

    useEffect(()=>{
        calldata();
    },[])
    const deletdata=async(id)=>{
        await axios.delete(`http://localhost:4000/${id}`);
        calldata();
    }
    return(
        <>
    <div className='App'>
        <div  className='table' >
        <h1>Table Information</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Father</th>
                <th>Mobile</th>
                <th>Action</th>
            </tr>
            {output.map((data)=>(
                <>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.father}</td>
                    <td>{data.mobile}</td>
                    <td><Link to={`/update/${data._id}`}><button>Edit</button></Link><button onClick={()=>{if(window.confirm("Are you sure to delete?")){deletdata(data._id)};}} className="delete" >Delete</button>
                    <Link to={`/veiw/${data._id}`}><button>Veiw</button></Link></td>
                </tr>
                </>
            ))}
        </table>
        </div>
   
    </div>
    </>
    )
}


export default Home;