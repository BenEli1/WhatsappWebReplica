import ChatUSerCard from "./chatUserCard";
import NavBarChat from "./NavBarChat";
import Messages from "./Messages";
import { Route, Routes } from "react-router-dom";
import $ from "jquery";
import Chatusers from "./Chatusers";
import {useState} from 'react'
import dataBaseMessages from "../Users/dataBaseMessages";
function Chat(){

    const [cardsList, setCardsList] = useState(dataBaseMessages);

    const doSearch = function(n, i){
        alert("starttt");
        setCardsList(cardsList.push({nickName :n, img :i }));
    }

    return(
        <div className="container" id="Chat">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-sm-4 col-4" id="leftChat">
                    <div className="row">
                     <NavBarChat doSearch={doSearch} />
                    </div>
                    <div className="row">
                        <Chatusers cards={cardsList} />
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
/* <Route path={`/Chat?userName=$`} element={ <Messages/>}>
              </Route>*/