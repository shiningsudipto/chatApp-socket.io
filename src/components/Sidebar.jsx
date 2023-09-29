import SActionIcons from "./SActionIcons";
import SSearchSection from "./SSearchSection";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <p>Sidebar</p>
            <SActionIcons />
            <SSearchSection />
        </div>
    );
};

export default Sidebar;