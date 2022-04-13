import ChatUSerCard from "./chatUserCard";

function Chatusers({cardsList}){
    var userList = cardsList.map((person,key) =>
    {return <ChatUSerCard {...person} key={key} />}
    );

    return(
        <div>
            {userList}
        </div>
    );
}

export default Chatusers;