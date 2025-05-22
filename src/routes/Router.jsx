
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [],
        }
    ]
);