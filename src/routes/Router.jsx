
import Root from "@/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/Home/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },

            ],
        }
    ]
);