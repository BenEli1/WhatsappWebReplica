import ChatUSerCard from "./chatUserCard";

function Chat(){
    return(
        <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-4 col-sm-4">
            <ChatUSerCard nickName="sahar" />
          </div>
          <div className="col-xl-6 col-lg-8 col-sm-10">
            chat
          </div>
          <div className="col-xl-1 col-lg-0 col-sm-0">
          </div>
        </div>
      </div>
    );
}

export default Chat;