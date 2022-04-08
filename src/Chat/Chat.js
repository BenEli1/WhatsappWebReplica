import ChatUSerCard from "./chatUserCard";
import NavBarChat from "./NavBarChat";

function Chat(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-sm-4 col-4">
                    <NavBarChat />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                    <ChatUSerCard nickName="sahar" />
                </div>
                <div className="col-xl-8 col-lg-8 col-sm-8 col-8">
                </div>
                <div className="col-xl-0 col-lg-0 col-sm-0 col-6">
                </div>
            </div>
        </div>
    );
}

export default Chat;