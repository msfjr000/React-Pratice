import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.route";

export function Routes() {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}