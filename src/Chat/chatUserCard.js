function ChatUSerCard({nickName, image}){
    return(
        <div className="card">
            <div className="row">
                <div className="col-3">
                    <img src="saharofe.jpg" className="img-fluid rounded-start"></img>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="card-body">
                            <h5 className="card-title">{nickName}</h5>
                            <div className="card-text">hi, how are you?</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"><p><small class="text-muted">Last updated 3 mins ago</small></p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatUSerCard;