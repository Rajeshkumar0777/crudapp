import {useState,useEffect} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { useNavigate,useParams,Link } from 'react-router-dom';


import '../App.css'

function Veiw(){
    const {id}=useParams();
   const [veiw, setVeiw]=useState([]);
   const getdata=async()=>{
   const {data}= await axios.get(`http://localhost:4000/${id}`);
    setVeiw(data);

   }

   useEffect(()=>{
    getdata();
   },[])

   const generate=()=>{
    const doc=new jsPDF('p','pt','letter','a4');
  doc.setTextColor("red")
    doc.text(150,50, `Welcome ! ${veiw.name}` )
    doc.setTextColor("green")
    doc.text(150,100, `Name:  ${veiw.name}` )
    doc.text(150,150,`Father:  ${veiw.father}`)
    doc.text(150,200,`Email:  ${veiw.email}`)
    
    doc.text(150,250,`Mobile:  ${veiw.mobile}`)
    doc.setTextColor("blue")
    doc.setFontSize(12)
    doc.text(20,400,`Hi ${veiw.name} !`)
    doc.text(20,430,`My name is ANUJ KUMAR and I am very happy to welcome you.Thanks for showing your interest. Best `)
    doc.text(20,450,"wishes for your future.")
    doc.setTextColor("black")
    doc.text(450,780,"Produced By Anuj Kumar")
    doc.save('User.pdf')
  }
 

    return(
       <div className="App">
       <div className=" table"></div>
       <h1>Welcome !  <span className='span'>{veiw.name}</span></h1>
        <h2>Name: <span> {veiw.name}</span></h2>
        <h2>Father: <span> {veiw.father}</span></h2>
        <h2>Email: <span> {veiw.email}</span></h2>
        <h2>Mobile: <span> {veiw.mobile}</span></h2>
        <button onClick={generate}>Download</button>
        </div>
    )
}
export default Veiw;