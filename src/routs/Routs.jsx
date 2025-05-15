import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import App from "../App";
import AddCoffee from "../pages/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "/add-coffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),

        Component: CoffeeDetails,
      },
      {
        path: "/update-coffee/:id",
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),

        Component: UpdateCoffee,
      },
    ],
  },
]);
export default router;
