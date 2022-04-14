import React from "react";
import { useState } from 'react'
import $ from "jquery";
function BtnGrp() {

    return (
        <div>
            <div className="btn-group" role="group">
            <button className="btn btn-secondary " type="button" onClick={importData} id="button-addon2">
                <i className="material-icons">add_photo_alternate</i>

                </button>

                <button className="btn btn-secondary " type="button" onClick={importData} id="button-addon2">
                    <i className="material-icons">videocam</i>
                </button>

                <button className="btn btn-secondary " type="button" id="button-addon2">
                    <i className="material-icons">keyboard_voice</i>
                </button>


            </div>
        </div>
    );
}

function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
              let files =   Array.from(input.files);
              console.log(files);
          };
    input.click();
    
  }
export default BtnGrp;
