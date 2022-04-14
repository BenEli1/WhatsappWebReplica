import React from "react";
import { useState } from 'react'
import $ from "jquery";
function BtnGrp({addMessage}) {

    function importImage() {
        let input = document.createElement('input');
        input.setAttribute('id','loadImage')
        input.setAttribute('accept','image/*')
        input.type = 'file';
        input.click();
        input.onchange = () => {
          // you can use this method to get file and perform respective operations
                  let image = URL.createObjectURL(input.files[0]);
                  addMessage(image, "image");
              };
        
    
      }

      function importVoive(){
        let audioIN = { audio: true };
      
        // Access 
        navigator.mediaDevices.getUserMedia(audioIN)
     
          // 'then()' method returns a Promise
          .then(function (mediaStreamObj) {
            // Connect the media stream to the
            // first audio element
            let audio = document.querySelector('audio');
            //returns the recorded audio via 'audio' tag
            // 'srcObject' is a property which
            // takes the media object
            // This is supported in the newer browsers
            if ("srcObject" in audio) {
              audio.srcObject = mediaStreamObj;
            }
            else {   // Old version
              audio.src = window.URL
                .createObjectURL(mediaStreamObj);
            }
            // It will play the audio
            audio.onloadedmetadata = function (ev) {
              // Play the audio in the 2nd audio
              // element what is being recorded
              audio.play();
            };
     
            // Start record
            let start = document.getElementById('btnStart');
     
            // Stop record
            let stop = document.getElementById('btnStop');
     
            // 2nd audio tag for play the audio
            let playAudio = document.getElementById('adioPlay');
     
            // This is the main thing to recorded
            // the audio 'MediaRecorder' API
            let mediaRecorder = new MediaRecorder(mediaStreamObj);
            // Pass the audio stream
     
            // Start event
            start.addEventListener('click', function (ev) {
              mediaRecorder.start();
              // console.log(mediaRecorder.state);
            })
     
            // Stop event
            stop.addEventListener('click', function (ev) {
              mediaRecorder.stop();
              // console.log(mediaRecorder.state);
            });
     
            // If audio data available then push
            // it to the chunk array
            mediaRecorder.ondataavailable = function (ev) {
              dataArray.push(ev.data);
            }
     
            // Chunk array to store the audio data
            let dataArray = [];
     
            // Convert the audio data in to blob
            // after stopping the recording
            mediaRecorder.onstop = function (ev) {
     
              // blob of type mp3
              let audioData = new Blob(dataArray,
                        { 'type': 'audio/mp3;' });
               
              // After fill up the chunk
              // array make it empty
              dataArray = [];
     
              // Creating audio url with reference
              // of created blob named 'audioData'
              let audioSrc = window.URL
                  .createObjectURL(audioData);
     
              // Pass the audio url to the 2nd video tag
              playAudio.src = audioSrc;
            }
          })
     
          // If any error occurs then handles the error
          .catch(function (err) {
            console.log(err.name, err.message);
          });
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

    return (
        <div>
            <div className="btn-group" role="group">
            <button className="btn btn-secondary " type="button" onClick={importImage} id="button-addon2">
                <i className="material-icons">add_photo_alternate</i>

                </button>

                <button className="btn btn-secondary " type="button" onClick={importVideo} id="button-addon2">
                    <i className="material-icons">videocam</i>
                </button>

                <button className="btn btn-secondary " type="button" onClick={importVoive} id="button-addon2">
                    <i className="material-icons">keyboard_voice</i>
                </button>


            </div>
        </div>
    );
}


  
  
export default BtnGrp;
