import { Link, NavLink } from "react-router-dom";

import './Navber.css'

const Navber = () => {
    return (
        
       <div>
         <h2>this is a navbar</h2>

         <nav>
          <Link to='/'>Home</Link>
          <NavLink to='/users'>Users</NavLink>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          
          <Link to='/posts'>Posts</Link>
         
         </nav>
       </div>
    );
};

export default Navber;