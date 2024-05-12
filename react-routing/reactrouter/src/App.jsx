import AbousUs from "./components/Body/AbousUs";
import ContactUs from "./components/Body/ContactUs";
import Main from "./components/Body/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "about",
    element: <AbousUs />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </>
  );
}

export default App;
