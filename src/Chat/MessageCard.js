import ImageSms from "./ImageSms";
import VideoSms from "./VideoSms";
import VoiceSms from "./VoiceSms";

function MessageCard({text, inOut , date}){
    
    function rend(){
        var type = "Text";
        if(type == "Text")
            return text;
        else if(type == "image"){
            return <ImageSms text={text}/>
        }
        else if(type == "video"){
            return <VideoSms text={text}/>
        }
        else if(type == "voice"){
            return <VoiceSms text={text}/>
        }
    }

    function Class(){
        if (inOut == "false"){
            return "massageCardAccepted ";
        }
        else{
            return "messageCardSent"
        }
    }

    function color(){
        if (inOut == "false"){
            return "alert-secondary";
        }
        else{
            return "alert-dark"
        }
    }

    return(
        <div className={Class()}>
        <div className={"card " + color()}>
            <div className="card-body">
                {rend()}
            </div>
        </div>
        <span className="time_date"> {date}</span>
        </div>
    );
}

export default MessageCard; 