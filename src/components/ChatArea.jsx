import CaHeader from "./CaHeader";
import CaInputArea from "./CaInputArea";
import CaMessageArea from "./CaMessageArea";

const ChatArea = () => {
    return (
        <div className="chatArea">
            {/* Header */}
            <CaHeader />
            {/* Message Area */}
            <CaMessageArea />
            {/* Input Area */}
            <CaInputArea />
        </div>
    );
};

export default ChatArea;