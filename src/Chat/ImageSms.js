function ImageSms({text}){
    return(
        <img src={text} type={"video/" + text.split(".")[text.split(".").length - 1]} className="imagesms"></img>
    );
}

export default ImageSms;