import { createBrowserRouter } from "react-router-dom";

import Index from '../views/Enterance'
import List from "../views/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/list/:step",
    element: <List />,
  }
])

export default router