import ChatUSerCard from "./chatUserCard";

function Chatusers({cardsList, chooseContact}){

    const todayDate = new Date()
    var userList = list()
    
    function list(){
        if(cardsList == null){
            return '';
        }
        return cardsList.map((person,key) =>
        {
                return <ChatUSerCard 
                {...person} key={key} chooseContact={chooseContact} />
        });
    }

    function date(time, date){
        if (`${todayDate.getDate().toString().padStart(2, '0')}.${(parseInt(todayDate.getMonth()) + 1).toString().padStart(2, '0')}` == date){
            return time;
        }
        else{
            return date;
        }
    }

    function lastMessage(person){
        if(person.messages.at(person.messages.length - 1)["type"] == "text"){
            return person.messages.at(person.messages.length - 1)["text"];
        }
        else{
            return person.messages.at(person.messages.length - 1)["type"];
        }
    }

    return(
        <div>
            {userList}
        </div>
    );
}

export default Chatusers;