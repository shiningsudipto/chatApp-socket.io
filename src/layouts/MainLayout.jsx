import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="mainLayout">
            <p>Main Layout</p>
            <Outlet />
        </div>
    );
};

export default MainLayout;