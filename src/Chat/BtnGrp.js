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


    let audioIN = { audio: true };
    navigator.mediaDevices.getUserMedia(audioIN)
        .then(function (mediaStreamObj) {
            let start = document.getElementById('btn-Start');
            let stop = document.getElementById('btn-Stop');
            let mediaRecorder = new MediaRecorder(mediaStreamObj);

            
            start.addEventListener('click', function (ev) {
                mediaRecorder.start();
            })

            stop.addEventListener('click', function (ev) {
                mediaRecorder.stop();
            });

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
                stop.removeEventListener('click', function (ev) {
                    mediaRecorder.stop();
                });
                start.removeEventListener('click', function (ev) {
                    mediaRecorder.start();
                })
            }
        })

    
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

    return (
        <div>
            <div className="btn-group" role="group">
            <button className="btn btn-secondary " type="button" onClick={importImage} id="button-addon2">
                <i className="material-icons">add_photo_alternate</i>
                </button>

                

                <button className="btn btn-secondary " type="button" onClick={importVideo} id="button-addon2">
                    <i className="material-icons">videocam</i>
                </button>

                <audio id="audio1"></audio>

                <button className="btn btn-secondary " type="button">
                    <i className="material-icons">keyboard_voice</i>
                </button>
                <button type="button" id="btn-Start">start</button>
                <button type="button" id="btn-Stop">stop</button>


            </div>
        </div>
    );
}


  
  
export default BtnGrp;
