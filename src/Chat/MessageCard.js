import ImageSms from "./ImageSms";
import VideoSms from "./VideoSms";
import VoiceSms from "./VoiceSms";

function MessageCard({content, type, sent , created}){
    
    function rend(){
        if(type == "text")
            return content;
        else if(type == "image"){
            return <ImageSms text={content}/>
        }
        else if(type == "video"){
            return <VideoSms text={content}/>
        }
        else if(type == "voice"){
            return <VoiceSms text={content}/>
        }
    }

    function Class(){
        if (sent == "false"){
            return "massageCardAccepted ";
        }
        else{
            return "messageCardSent"
        }
    }

    function color(){
        if (sent == "false"){
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
        <span className="time_date"> {created}</span>
        </div>
    );
}

export default MessageCard; 