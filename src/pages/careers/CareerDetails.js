import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  // we can access the route parameter using a special hook from React Router "useParams"
  // the key needs to match whatever name you gave it in the <Route path=":xxxx" />
  const { id } = useParams();
  console.log(id);

  // we get the careerDetailsLoader function return Promise and resolve it
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit
        ratione distinctio hic explicabo quia quisquam facere, quasi similique
        suscipit!
      </div>
    </div>
  );
};

export default CareerDetails;

// we will create another Loader function
export const careerDetailsLoader = async ({ params }) => {
  // React Router gives us argument that we can extract the "params" property from
  // and as above it must match the name provided in the <Route path=":xxxx" />
  const { id } = params;
  const response = await fetch(`http://localhost:4000/careers/${id}`);

  // for error handling if that career id does not exist:
  if (!response.ok) {
    throw Error("Could not that find that career");
  }

  return response.json();
};
