import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Explore from "./pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: 'search',
        element: (
          <div>
            hello search
          </div>
        )
      },
      {
        path: 'explore',
        element: <Explore />
      }
    ]
  },
])

export default router