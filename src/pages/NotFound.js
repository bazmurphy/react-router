import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem amet,
        quisquam sapiente ea veritatis beatae corporis illo quis adipisci sed!
      </p>
      <p>
        Go to the <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
