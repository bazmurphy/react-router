import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// createBrowserRouter, createRoutesFromElements, RouterProvider are the new way of doing things in React Router 6.4+

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import NotFound from "./pages/NotFound";

// we create a new Browser Router
// and inside of that function we call another function createRoutesFromElements
// and inside here we create our tree of routes
// (!) we do not wrap it with <Routes> anymore but use a Root <Route> Component (and we don't need the Routes import up top)

// we can ASSIGN the "Root" Parent <Route> an Element
// and that Element Component will act as kind of Layout Component for any elements (in this case <Route path="/" /> etc) NESTED inside of it.
// that Element Component will WRAP the rest of the Page Components
// so we can put a Navigation in there for example, where we have Links/Nav Links
// and Link/NavLink will work because they are INSIDE THE SCOPE of the BrowserRouter

// we can create deeper Nested Routes, see the help/faq, help/contact examples

// for handling route requests that do not exist, one way is to create a catchall at the end of the Route Tree
// where the path is a catch all "*" with a NotFound component

// Loaders are a way that we can load data into a Component before it renders
// We might have a products page component that lists a lot of products that come from an API
// And a Loader would allow us to fetch those products from the API BEFORE THE COMPONENT RENDERS IN THE BROWSER
// And inside that Component we then don't need to worry about using a useEffect hook to fetch the data when the Component renders
// Because the Loader function does that all for us AHEAD of time.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        {/* it runs the "careersLoader" function "ahead of time" and fetches the data and returns the json data as a Promise to the Careers component */}
        <Route index element={<Careers />} loader={careersLoader} />
        {/* using route parameters */}
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
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
