import ChatUSerCard from "./chatUserCard";
import NavBarChat from "./NavBarChat";
import { Route, Routes, useNavigate } from "react-router-dom";
import $ from "jquery";
import Chatusers from "./Chatusers";
import React,{useState, useEffect} from 'react'
import InputMessage from "./InputMessage";
import MessageBox from "./MessageBox";

function Chat({UserName}){

    

    var data = null; 
    var mes = null;

    useEffect(() =>
    {if (UserName == '') navigate("/")}
    );
  
    //alert(JSON.stringify(data));
    var navigate = useNavigate();
        if (UserName == '' || UserName == null){
            navigate('/');
        }

    const [cardsList, setCardsList] = useState(data);

    const [messages, setMessages] = useState(mes);

    GetContacts().then(() => {
        if(cardsList == null){
            setCardsList(data)
        } 
    });

    function addedContact(){
        GetContacts().then(() => setCardsList(data));
    }

    const [changeState , setChangeState] = useState(false)
    const [contact, setContact] = useState('')

    useEffect(() => {
        document.querySelector('#scroolBotoom').scrollIntoView();
      });

    const chooseContact = function(contact){
        setContact(contact);
        setChangeState(!changeState);
    }

    GetMessages().then(()=> {
        if(messages == null){
            setMessages(mes);
        }
    })

    function getServer(){
        var card = cardsList.find(x => x.id == contact);
        return card.server;
    }

    /*public string id { get; set; }
    public string name { get; set; }
    public string server { get; set; }
    public string last { get; set; }
    public string lastdate { get; set; }
    public List<Message> Messages { get; set; }*/
    /*const doSearch = function(id,name, server,last,lastdate){
        let newChat = {
            "id":id,"name":name,"server":server,"last":last,"lastdate":lastdate, "Messages": []
        }
        data.push(newChat)
        setCardsList(data);
        setChangeState(!changeState)
    }*/

    async function addPostMessage(text){
        let date = new Date();
        let dateString = date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') 
        + " | " + date.getDate().toString().padStart(2, '0') + "." + (parseInt(date.getMonth()) + 1).toString().padStart(2, '0');
        const res = await fetch('https://localhost:7227/api/contacts/' + contact + '/messages?username=' + UserName, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': '*'
          },
          mode: 'cors',
          body: JSON.stringify({
            Id: 5,
            Text: text,
            Date: dateString,
            InOut: "true",
        })
        })
        //data = await res.json();
    }

    async function transferMessage(text){
        const res = await fetch('https://' + getServer() + '/api/transfer', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': '*'
            },
            mode: 'cors',
            body: JSON.stringify({
              from: UserName,
              to: contact,
              content: text 
          })
          })
    }

    const addMessage = async function(text, type){
        await addPostMessage(text);
        await transferMessage(text);
        GetMessages().then(() => setMessages(mes));
        GetContacts().then(() => setCardsList(data));
    }



    function findIndexContact(){
        for(let x in cardsList){
            if(cardsList[x].nickName === contact){
                return x;
            }
        }
    }

    function inputBox(){
        if (contact == ""){
            return "";
        }
        else{
            return <InputMessage addMessage={addMessage} />;
        }
    }

    async function GetMessages(){
        if (contact == ''){
            return;
        }
        const res = await fetch('https://localhost:7227/api/contacts/' +
                     contact + '/messages?username=' + UserName, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': '*'
          },
          mode: 'cors',
        })

        mes = await res.json();
    }

    async function GetContacts(){
        if(UserName != ''){
        const res = await fetch('https://localhost:7227/api/contacts?username=' + UserName, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': '*'
          },
          mode: 'cors',
        })
        data = await res.json();
        return
    }
    }

    return(
        <div className="container" id="Chat">
            <div className="row" id="ContactsRow">
                <div className="col-xl-4 col-lg-4 col-sm-4 col-4" id="leftChat">
                    <div className="row">
                     <NavBarChat added={addedContact} cardsList={cardsList} UserName={UserName}/>
                    </div>
                    <div className="row">
                        <Chatusers cardsList={cardsList} chooseContact={chooseContact} />
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-sm-8 col-8" id="rightChat"> 
                <MessageBox user={UserName} mes={messages} contact={contact} cardsList={cardsList} />
                {inputBox()}
                <div id="scroolBotoom"></div>
                </div>
                <div className="col-xl-0 col-lg-0 col-sm-0 col-0">
                </div>
                </div>
            </div>
    );
}

export default Chat;

