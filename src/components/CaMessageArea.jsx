import OthersMessage from "./OthersMessage";
import SelfMessage from "./SelfMessage";

const CaMessageArea = () => {
    return (
        <div className="caMessageArea">
            <OthersMessage />
            <SelfMessage />
        </div>
    );
};

export default CaMessageArea;