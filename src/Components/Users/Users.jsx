import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'



const Users = () => {

    const users = useLoaderData();

    

    return (
        
       <div>
        <h1>This is a user section </h1>

          <h2>Totsl user : {users.length}</h2>
          <div className="users">
            {
                users.map( user => <User key={user.id} user={user} ></User> )
            }
          </div>
       </div>
)};

export default Users;