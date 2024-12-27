import { Link, useRouteError } from "react-router-dom";



const Error = () => {

    const error = useRouteError();

    

    return (
        
       <div>
          <h2>Oops!!</h2>
          <div>
            {
                error.statusText || error.massage
            }
            {
                error.status === 404 && <div>

                    <p>page not found </p>

                    
                </div>
            }
             <Link to='/'> Go home</Link>
          </div>
       </div>
    );
};

export default Error;