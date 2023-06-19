import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// createBrowserRouter, createRoutesFromElements, RouterProvider are the new way of doing things in React Router 6.4+

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// we create a new Browser Router
// and inside of that function we call another function createRoutesFromElements
// and inside here we create our tree of routes
// (!) we do not wrap it with <Routes> anymore but use a Root <Route> Component (and we don't need the Routes import up top)

// we can ASSIGN the "Root" Parent <Route> an Element
// and that Element Component will act as kind of Layout Component for any elements (in this case <Route path="/" /> etc) NESTED inside of it.
// that Element Component will WRAP the rest of the Page Components
// so we can put a Navigation in there for example, where we have Links/Nav Links
// and LInk/Nav Links will work because they are INSIDE THE SCOPE of the BrowserRouter

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

const App = () => {
  return (
    // [ the header Link/NavLink won't work outside because they MUST BE WITHIN THE SCOPE of the Browser]
    // and then we use the RouterProvider component and pass it the "router" we created above
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
