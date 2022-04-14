function VoiceSms({text}){

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
        <audio controls>
            <source src={text}></source>
            <source src={name() + ".ogg"} type="audio.ogg"></source>
            <source src={name() + ".mp3"} type="audio.mprg"></source>
        </audio>
    );
}

export default VoiceSms;