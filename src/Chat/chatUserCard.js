import "./CharUserCard.css"

function ChatUSerCard({nickName, image}){
    return(
        <div className="btn-outline-light chat_list border-dark">
            <div className="chat_people row">
                <div className="col-md-2 col-1" onClick={}> 
                    <img src="saharofe.jpg" className="imgChat img-fluid"></img>
                </div>
                <div className="chat_ib col-md-10">
                    <h5>{nickName}<span className="chat_date">Dec 25</span></h5>
                    <p>hi, how are you?</p>
                </div>
            </div>
        </div>
    );
}

export default ChatUSerCard;