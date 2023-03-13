import {Link, Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Routes>
            {/*<Route path={'/about'} element={<AboutPage />} />*/}
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(element)}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;