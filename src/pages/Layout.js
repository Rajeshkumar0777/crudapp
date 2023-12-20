import { Outlet,Link  } from "react-router-dom";
import '../App.css';
const Layout=()=>{
    return(
        
      < >
      <div className="A">
       <ul>
            <li className="active">
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add">Add User</Link>
            </li>
        </ul>
       </div>
       <Outlet/>
      </>
      
        
    )
}

export default Layout;