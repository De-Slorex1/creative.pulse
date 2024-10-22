import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import RootLayout from "./layout/rootlayout";
import WorksPage from "./pages/works";
import ServicePage from "./pages/services";
import FAQsPage from "./pages/faqs";
import BookCallPage from "./pages/bookCall";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="services" element={<ServicePage />} />
            <Route path="faqs" element={<FAQsPage />} />
            <Route path="bookcall" element={<BookCallPage />} />
        </Route>
    )
)