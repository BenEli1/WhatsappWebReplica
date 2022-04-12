function MessageCardSent({text, time, date}){
    return(
        <div className="messageCardSent">
        <div className="card alert-secondary">
            <div className="card-body">
                {text}
            </div>
        </div>
        <span class="time_date"> {time}    |    {date}</span>
        </div>
    );
}

export default MessageCardSent; 