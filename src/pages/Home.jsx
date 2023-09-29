import ChatArea from "../components/ChatArea";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="home">
            <div className="homeLayout">
                <Sidebar />
                <ChatArea />
            </div>
        </div>
    );
};

export default Home;