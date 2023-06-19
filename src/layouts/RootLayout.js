import { NavLink, Outlet } from "react-router-dom";

// Outlet is where we output/render the Child <Route> Page Components defined in the createBrowserRouter/createRoutesFromElements

// We create a Component that is similar to a Layout
// This is the "Root" Parent <Route> inside createBrowserRouter(createRoutesFromElements()
// So in this case the Pages will share the same header

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <h1>Job Router</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
