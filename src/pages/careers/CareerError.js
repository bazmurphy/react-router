import { useRouteError, Link } from "react-router-dom";

// we build an Error Component to display upon Error if the "Loader" is not successful
const CareerError = () => {
  // we can access the "Error" that is thrown by the "Loader" using a special hook from React Router
  const error = useRouteError();

  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Home Page</Link>
    </div>
  );
};

export default CareerError;
