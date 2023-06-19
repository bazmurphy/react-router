import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  // INSTEAD OF NORMALLY DOING THIS:
  // const [data, setData] = useState([]);
  // useEffect(() => {}, []);

  // WE CAN USE A LOADER FUNCTION INSTEAD
  // So we don't need to useEffect and store the data in useState

  // we use a special hook that React Router gives us "useLoaderData"
  // it resolves the Promise that the "careersLoader" gives us
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => {
        return (
          // we dynamically insert the career.id to create Links
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Careers;

// we make a function outside of the Component itself (it can even be in another file)
// and it runs the Loader function whenever we click on whichever Link is associated with that Loader
// and we will associate the Loader with the Route later

// we need to export this function so we can import it in App, so that we can associate it with a Route

export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careerss");
  // this is a Promise, but that doesn't matter, React Router is going to resolve that Promise
  // and get the data for us which we can then access later using the useLoaderData Hook inside the Component

  // we add error handling
  if (!response.ok) {
    throw Error("Could not fetch the careers");
  }
  return response.json();
};
