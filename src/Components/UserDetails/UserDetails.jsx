import { useLoaderData, useNavigate } from "react-router-dom";



const UserDetails = () => {

    const user = useLoaderData();

    const {id , name , email, number} = user;

    const navigate = useNavigate();

    const HandalBackClickBtn = () =>{
            
        navigate(-1)
        // (-1)  dawa mane holo ak dhap nicha jawa 
    }
    return (
        
        <div>
           <h1>{id}</h1>
           <h1>{name}</h1>
           <h1>{email}</h1>
           <h1>{number}</h1>

           <button onClick={HandalBackClickBtn}>Back</button>
        </div>
    );
};

export default UserDetails;