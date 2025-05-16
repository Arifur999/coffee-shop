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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://my-first-sarver.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "/add-coffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`https://my-first-sarver.vercel.app/coffees/${params.id}`),

        Component: CoffeeDetails,
      },
      {
        path: "/update-coffee/:id",
        loader: ({ params }) =>
          fetch(`https://my-first-sarver.vercel.app/coffees/${params.id}`),

        Component: UpdateCoffee,
      },
    ],
  },
]);
export default router;
