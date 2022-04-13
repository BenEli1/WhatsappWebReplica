import ImageSms from "./ImageSms";

function MessageCardAccepted({text, type ,time, date}){

    function rend(){
        if(type == "text")
            return text;
        else if(type == "image"){
            return <ImageSms text={text}/>
        }
    }

    return(
        <div className="massageCardAccepted">
        <div className="card alert-secondary">
            <div className="card-body">
                {rend()}
            </div>
        </div>
        <span className="time_date"> {time}    |    {date}</span>
        </div>
    );
}

export default MessageCardAccepted; 