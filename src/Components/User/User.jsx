import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {

    const {id , name , email, phone } = user;

    const navigate = useNavigate();

    const HandalShoeClick = () => {
        
        navigate(`/user/${id}`);

    }

    const userStyle = {

        border: '2px solid tomato',
        padding: '10px',
        margin: '10px'
    }
    return (
        
       <div style={userStyle}>
          <h1>{name}</h1>
          <p>{email}</p>
          <p>{phone}</p>
          <Link to={`/user/${id}`}>User-Details</Link>
        <div>
            <button onClick={HandalShoeClick}> Show-Details</button>
        </div>
       </div>
    );
};

export default User;