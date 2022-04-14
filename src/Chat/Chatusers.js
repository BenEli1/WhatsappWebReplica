import ChatUSerCard from "./chatUserCard";

function Chatusers({cardsList, chooseContact}){

    const todayDate = new Date()
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
        {...person} key={key}
         lastDate={date(person.messages.at(person.messages.length - 1)["time"],person.messages.at(person.messages.length - 1)["date"])} chooseContact={chooseContact} />
    
        });
    }

    function date(time, date){
        if (`${todayDate.getDate().toString()}.${(parseInt(todayDate.getMonth()) + 1).toString()}` == date){
            return time;
        }
        else{
            return date;
        }
    }

    return(
        <div>
            {userList}
        </div>
    );
}

export default Chatusers;