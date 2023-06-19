import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, optio?
      </p>
      <nav>
        {/* we only need to provide the route not the parent route also, because we are nested */}
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      {/* and then we provide the Outlet (Children) */}
      <Outlet />
    </div>
  );
};

export default HelpLayout;
