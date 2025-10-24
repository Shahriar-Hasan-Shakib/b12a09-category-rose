import { createBrowserRouter } from "react-router";
import { Root } from "../layout/Root";
import { Home, About, Services, Contact, Auth, NotFound, Profile, ServiceDetails, ForgotPassword } from "@/pages";
import { PrivateRoute } from "../components/privateRoute/PrivateRoute";
import { ABOUT, AUTH, CONTACT, NOT_FOUND, SERVICES, PROFILE, SERVICE_DETAILS, FORGOT_PASSWORD } from "../../constant/routes";
import { SERVICES_JSON } from "@/constant";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true,            element: <Home />, loader: () => fetch(SERVICES_JSON) },
            { path:  ABOUT,           element: <About /> },
            { path:  SERVICES,        element: <Services />, loader: () => fetch(SERVICES_JSON) },
            { path:  SERVICE_DETAILS, element: <PrivateRoute><ServiceDetails /></PrivateRoute> },
            { path:  PROFILE,         element: <PrivateRoute><Profile /></PrivateRoute> },
            { path:  CONTACT,         element: <Contact /> },
            { path:  AUTH,            element: <Auth /> },
            { path:  FORGOT_PASSWORD, element: <ForgotPassword /> },
            { path:  NOT_FOUND,       element: <NotFound /> },
        ]
    },
])