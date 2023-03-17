import { createBrowserRouter } from "react-router-dom";

import Index from '../views/Enterance'
import List from "../views/List";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: ()=> import('../views/Enterance'),
    element: <Index />,
  },
  {
    path: "/list/:step",
    lazy: ()=> import('../views/List'),
    element: <List />,
  }
],{ basename: '/scrum' })

export default router