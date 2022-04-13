import { Link } from 'react-router-dom'
import $ from "jquery";
import React from 'react';
import 'bootstrap';
import ChatUSerCard from './chatUserCard';
import dataBase from '../Users/dataBaseObject';
import dataBaseMessages from "./dataBaseMessages.json"
import Chat from './Chat';
function NavBarChat({ doSearch }) {

    const addContact = function () {
        let nickname = document.getElementById('floatingInput').value;
        let user = (dataBase.getUserByNickName(nickname));
        var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        var alertTrigger = document.getElementById('sign');
        function alert(message, type) {
            $('div').remove("#liveAlertPlaceholder div");
            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
            alertPlaceholder.append(wrapper);
        }
        console.log(JSON.stringify(dataBaseMessages.dataBaseMessages));

        var valid=JSON.stringify(dataBaseMessages.dataBaseMessages).includes(nickname);
        console.log(valid);

        if (user&&!valid) {
            let img = user.image;
            doSearch(nickname, img)
            setTimeout( function ( ) { alert( 'You have added a contact successfully','success' ); }, 0 );
        } else {
            setTimeout(function () { alert('Nickname not found/already added', 'danger'); }, 0);
        }
    }

    return (
        <nav id="navbar1" data-bs-spy="scroll" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Hello Ben</span>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item'>


                            <button className="nav-link dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg> add contact
                            </button>

                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Add new contact</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="nickname"></input>
                                                <label htmlFor="floatingInput">Contact's Identifier</label>
                                            </div>
                                            <div id="liveAlertPlaceholder"></div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" id="sign" onClick={addContact} className="btn btn-primary" >Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="dropdown-item nav-link">Log-out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}



export default NavBarChat;

//nickName={nickname} image={img} date="0"