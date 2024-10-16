import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center space-y-4">
                <h1 className="text-5xl">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/"><button className="btn mt-4">Go to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;