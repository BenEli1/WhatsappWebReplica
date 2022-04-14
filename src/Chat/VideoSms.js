function VideoSms({text}){

    function format(){
        return text.split(".")[text.split(".").length - 1];
    }

    function name(){
        let name = '';
        for(let i = 0; i < text.split(".").length - 1; i++){
            name += text.split(".")[i]
        }
        return name;
    }

    return(
        <video className="imagesms" controls>
            <source src={text}></source>
            <source src={name() + ".mp4"} type="video.mp4"></source>
            <source src={name() + ".ogg"} type="video.ogg"></source>
        </video>
    );
}

export default VideoSms;