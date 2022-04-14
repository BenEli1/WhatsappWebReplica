import React from "react";
import { useState } from 'react'
import $ from "jquery";
function BtnGrp({addMessage}) {

    function importImage() {
        let input = document.createElement('input');
        input.setAttribute('id', 'loadImage')
        input.setAttribute('accept', 'image/*')
        input.type = 'file';
        input.click();
        input.onchange = () => {
          // you can use this method to get file and perform respective operations
                  let image = URL.createObjectURL(input.files[0]);
                  addMessage(image, "image");
              };

      }
     
      function importVideo() {
        let input = document.createElement('input');
        input.setAttribute('id','loadVideo')
        input.setAttribute('accept','video/*')
        input.type = 'file';
        input.click();
        input.onchange = () => {
          // you can use this method to get file and perform respective operations
                  let video = URL.createObjectURL(input.files[0]);
                  addMessage(video, "video");
              };
        
      }
      function importVoice(){
        let audioIN = { audio: true };
        navigator.mediaDevices.getUserMedia(audioIN)
          .then(function (mediaStreamObj) {
            
            let stop = document.getElementById('btnStop-');
            let mediaRecorder = new MediaRecorder(mediaStreamObj);
            mediaRecorder.start();
            stop.addEventListener('click', function (ev) {
              mediaRecorder.stop();
            },{once:true});
            mediaRecorder.ondataavailable = function (ev) {
                dataArray.push(ev.data);
            }
            let dataArray = [];
            mediaRecorder.onstop = function (ev) {
              let audioData = new Blob(dataArray,
                        { 'type': 'audio/mp3;' });
              dataArray = [];
              let audioSrc = window.URL
                  .createObjectURL(audioData);
              addMessage(audioSrc, "voice");
            }
          })
      }

    return (
        <div>
            <div className="btn-group" role="group">
            <button className="btn btn-secondary " type="button" onClick={importImage} id="button-addon2">
                <i className="material-icons">add_photo_alternate</i>
                </button>

                

                <button className="btn btn-secondary " type="button" onClick={importVideo} id="button-addon2">
                    <i className="material-icons">videocam</i>
                </button>

                <button className="btn btn-secondary " type="button" onClick={importVoice} id="btnStart-">
                    <i className="material-icons">keyboard_voice</i>
                </button>
                <button className="btn btn-secondary " type="button" id="btnStop-">
                    stop
                </button>

            </div>
        </div>
    );
}


  
  
export default BtnGrp;
