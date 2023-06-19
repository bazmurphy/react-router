import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  // we are emulating a user being logged in here with some local state
  const [user, setUser] = useState("Baz");

  // and when the user logs out we want to redirect the user
  if (!user) {
    // and we use the Navigate component and tell it where we want to navigate to
    // it preserves the previous page in History, so you can click back on the Browser
    // so if we want to replace it in History, we can use replace={true} and it will replace that with the to="/"
    // so that we cannot go back to the About Page
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit odio
        minima voluptatibus. Quis sint mollitia ex, ipsa nam labore totam
        doloribus distinctio repellendus assumenda recusandae delectus magni
        minima adipisci hic doloremque cupiditate, sequi similique excepturi
        iste. Porro cupiditate culpa asperiores, nobis delectus nesciunt
        repudiandae maxime est nam? Quos, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit odio
        minima voluptatibus. Quis sint mollitia ex, ipsa nam labore totam
        doloribus distinctio repellendus assumenda recusandae delectus magni
        minima adipisci hic doloremque cupiditate, sequi similique excepturi
        iste. Porro cupiditate culpa asperiores, nobis delectus nesciunt
        repudiandae maxime est nam? Quos, ipsam!
      </p>
      {/* here we are simulating a User Logging out */}
      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  );
}
