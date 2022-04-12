function MessageCardAccepted({text, time, date}){
    return(
        <div className="massageCardAccepted">
        <div className="card alert-secondary">
            <div className="card-body">
                {text}
            </div>
        </div>
        <span className="time_date"> {time}    |    {date}</span>
        </div>
    );
}

export default MessageCardAccepted; 