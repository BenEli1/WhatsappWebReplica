import ChatUSerCard from "./chatUserCard";
import NavBarChat from "./NavBarChat";
function Chat(){
    return(
        <div className="container" id="Chat">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-sm-4 col-4" id="leftChat">
                    <div className="row">
                        <NavBarChat />
                    </div>
                    <div className="row">
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
                </div>
                <div className="col-xl-8 col-lg-8 col-sm-8 col-8" id="rightChat">
                </div>
                <div className="col-xl-0 col-lg-0 col-sm-0 col-0">
                </div>
            </div>
        </div>
    );
}

export default Chat;