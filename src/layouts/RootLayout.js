import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumb";

// Outlet is where we output/render the Child <Route> Page Components defined in the createBrowserRouter/createRoutesFromElements

// We create a Component that is similar to a Layout
// This is the "Root" Parent <Route> inside createBrowserRouter(createRoutesFromElements()
// So in this case the Pages will share the same header

// We can create breadcrumbs, which are the series of steps taken to get to the current page
// We have to look at the URL and break it down eg. /help/contact
// it would be help > contact
// there is a useLocation hook that will help us
// We can add the Breadcrumbs after the nav inside the header

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>React Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
