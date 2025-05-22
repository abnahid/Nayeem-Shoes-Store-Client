
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [],
        }
    ]
);