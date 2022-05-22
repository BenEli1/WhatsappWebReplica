import ChatUSerCard from "./chatUserCard";
import NavBarChat from "./NavBarChat";
import { Route, Routes } from "react-router-dom";
import $ from "jquery";
import Chatusers from "./Chatusers";
import React,{useState, useEffect} from 'react'
import InputMessage from "./InputMessage";
import MessageBox from "./MessageBox";

function Chat({UserName}){


    var data = null; 
    
    async function GetContacts(){
    
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
    }

    //alert(JSON.stringify(data));
    const [cardsList, setCardsList] = useState(data);

    GetContacts().then(() => {
        if(cardsList == null){
            setCardsList(data)
        } 
    });
   
    const [changeState , setChangeState] = useState(false)
    const [contact, setContact] = useState('')

    useEffect(() => {
        document.querySelector('#scroolBotoom').scrollIntoView();
      });

    const chooseContact = function(contact){
        setContact(contact);
        setChangeState(!changeState);
    }

    /*public string id { get; set; }
    public string name { get; set; }
    public string server { get; set; }
    public string last { get; set; }
    public string lastdate { get; set; }
    public List<Message> Messages { get; set; }*/
    const doSearch = function(id,name, server,last,lastdate){
        let newChat = {
            "id":id,"name":name,"server":server,"last":last,"lastdate":lastdate, "Messages": []
        }
        data.push(newChat)
        setCardsList(data);
        setChangeState(!changeState)
    }

    async function addPostMessage(text){
        let date = new Date();
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
            Date: date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') +
                    date.getDate().toString().padStart(2, '0') + "." + (parseInt(date.getMonth()) + 1).toString().padStart(2, '0') ,
            InOut: "true",
        })
        })
        data = await res.json();
    }

    const addMessage = function(text, type){
        addPostMessage(text).then( () => setChangeState(!changeState));
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

    return(
        <div className="container" id="Chat">
            <div className="row" id="ContactsRow">
                <div className="col-xl-4 col-lg-4 col-sm-4 col-4" id="leftChat">
                    <div className="row">
                     <NavBarChat doSearch={doSearch} cardsList={cardsList} UserName={UserName}/>
                    </div>
                    <div className="row">
                        <Chatusers cardsList={cardsList} chooseContact={chooseContact} />
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-sm-8 col-8" id="rightChat"> 
                <MessageBox user={UserName} contact={contact} cardsList={cardsList} />
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

