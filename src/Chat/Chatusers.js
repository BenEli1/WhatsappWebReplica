import ChatUSerCard from "./chatUserCard";

function Chatusers({cardsList, chooseContact}){

    var userList = list()
    
    function list(){
        if(cardsList.length == 0){
            return '';
        }
        return cardsList.map((person,key) =>
        {
            if(person.messages.length == 0){
                return <ChatUSerCard lastMessage="" 
                {...person} key={key} chooseContact={chooseContact} />
            }
            return <ChatUSerCard lastMessage={person.messages.at(person.messages.length - 1)["text"]} 
        {...person} key={key} chooseContact={chooseContact} />
    
        });
    }

    return(
        <div>
            {userList}
        </div>
    );
}

export default Chatusers;