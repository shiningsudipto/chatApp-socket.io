import SActionIcons from "./SActionIcons";
import SSearchSection from "./SSearchSection";
import SbUsers from "./SbUsers";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <p>Sidebar</p>
            <SActionIcons />
            <SSearchSection />
            <SbUsers />
        </div>
    );
};

export default Sidebar;