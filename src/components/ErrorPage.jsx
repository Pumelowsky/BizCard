import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom'
import './ErrorPage.css'
function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="ErrorPage">
            <h1>{error.status}</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText}</p>
            <Link to={'/'}>Back to main page!</Link>
        </div>
    )
}

export default ErrorPage
