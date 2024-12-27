import { Outlet } from "react-router-dom";
import Navber from "../Navbar/Navber";



const Home = () => {
    return (
        
     <div>
        <Navber></Navber>
        <h2>This is a home section</h2>
        <Outlet></Outlet>
     </div>
    );
};

export default Home;