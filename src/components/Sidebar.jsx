import SActionIcons from "./SActionIcons";
import SSearchSection from "./SSearchSection";
import SbUsers from "./SbUsers";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SActionIcons />
            <SSearchSection />
            <SbUsers />
        </div>
    );
};

export default Sidebar;