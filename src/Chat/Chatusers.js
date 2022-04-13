import ChatUSerCard from "./chatUserCard";

function Chatusers({cardsList, chooseContact}){
    var userList = cardsList.map((person,key) =>
    {return <ChatUSerCard lastMessage={person.Messages} {...person} key={key} chooseContact={chooseContact} />}
    );

    return(
        <div>
            {userList}
        </div>
    );
}

export default Chatusers;