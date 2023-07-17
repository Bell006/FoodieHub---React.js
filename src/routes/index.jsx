import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { UserRoutes } from './user.routes';
import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
    const { user, adminCheck } = useAuth();

    return(
        <BrowserRouter>
            {user ? (adminCheck == 1 ? <AdminRoutes /> : <UserRoutes />) : <AuthRoutes />}
        </BrowserRouter>
    );
}