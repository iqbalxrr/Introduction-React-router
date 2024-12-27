import { useLoaderData } from "react-router-dom";



const PostDetails = () => {

    const post = useLoaderData();

    const {id , title , body} = post;

    return (
        
       <div>

         <h1>{id}</h1>
         <h1>{title}</h1>
        <p>{body}</p>

       </div>
    );
};

export default PostDetails;