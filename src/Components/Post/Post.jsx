import { Link } from "react-router-dom";



const Post = ({post}) => {
    
    const {id , title } =post;

    const postStyle = {

        border: '2px solid tomato',
        padding: '10px',
        margin: '10px'
    }
    return (
        
        <div style={postStyle}>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;