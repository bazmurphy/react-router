import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  // React Router comes with the ability to handle Forms more elegantly
  // It will bundle all of the form data and pass it to a Form Action Function
  // We convert <form> to <Form> using the Form Component from React Router
  // we specify the method="post" (but this will NOT send the Request)
  // and we will access that method later in our Form Action Function
  // we specify an action function (similar to a loader function)
  // and it will fire when the Form is submitted
  // we do not give it a function name, instead we specify a Route Path (in the example below, we use the same route as the form, it doesn't have to be the same route)
  // (we will make an Action Function and then attach an action to a Specific Route)
  // so its saying Find the Action that is ASSOCIATED with this route

  // we can access the object that we returned below to simulate an errorusing a React Router hook called useActionData()
  const data = useActionData();

  return (
    <div className="contact" action="/help/contact">
      <h3>Contact Us</h3>
      <Form method="post">
        <label htmlFor="email">
          <span>Your Email:</span>
          <input type="email" name="email" required />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea name="message" required />
        </label>
        <button>Submit</button>
        {/* if there is an error with the form, we render the error below: */}
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export default Contact;

// we create a Form Action Function
// on the Action we get a Request Property
// the Request property contains ALL OF THE FORM DATA (you must give NAME attributes to all the inputs etc.)
export const contactAction = async ({ request }) => {
  console.log("request:", request);
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log("submission:", submission);

  // this is where you would use the submission as a body
  // and send a POST request to an API and save it to a Database etc.

  // we can emulate an error:
  if (submission.message.length < 10) {
    // we return an object which is some data we can access in the Contact Component above
    return { error: "Message must be over 10 characters long" };
  }

  // for now we need to return something
  // we will use the "redirect" function from React Router
  // in this case to return to Home Page as an example
  return redirect("/");
};
