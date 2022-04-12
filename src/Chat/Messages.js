import MessageCardAccepted from "./MessageCardAccepted";
import MessageCardSent from "./MessageCardSent";


function Messages({userName}) {
    return(
        <>
            <MessageCardAccepted text="hii" time="9:00 AM" date="Jun 15" />
            <MessageCardSent text="hii" time="9:00 AM" date="Jun 15" />
        </>
    );
}

export default Messages;