import ChatUSerCard from "./chatUserCard";
import NavBarChat from "./NavBarChat";

function Chat(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-sm-4">
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
                <div className="col-xl-7 col-lg-8 col-sm-10">
                </div>
                <div className="col-xl-1 col-lg-0 col-sm-0">
                </div>
            </div>
        </div>
    );
}

export default Chat;