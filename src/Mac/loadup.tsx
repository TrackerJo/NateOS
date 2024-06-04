


import './loadup.css'

import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'

import AppleLogo from './assets/applelogo.png'
import MacStartupSound from './assets/macStartup.mp3'
import PowerOn from './assets/power.png'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Loadup />
  </React.StrictMode>,
)


function Loadup() {
    const audio = useRef<HTMLAudioElement>(null);

    function playSound() {
        audio.current?.play();
    }

    document.addEventListener("click", () => {
        playSound();
        document.getElementById("powerOn").classList.add("hidden");
        document.getElementById("LoadProgress_Status").classList.remove("hidden");
        update();
    });

    function update() {
        
        var element = document.getElementById("LoadProgress");   
        var width = 1;
        var identity = setInterval(scene, 30);
        function scene() {
            if (width >= 100) {
                clearInterval(identity);
                window.location.href = "/Mac/";
            } else {
            width++; 
            element.style.width = width + '%'; 
            }
        }
    }

  return (
    <>
        
        <div className="loadup">
        
            <img src={AppleLogo} alt="Apple logo" className="aLogo"/>
            <div id="LoadProgress_Status" className="hidden">
                <div id="LoadProgress"></div>
            </div>
         
        </div>
        <audio src={MacStartupSound} ref={audio}></audio>


        <img id="powerOn" src={PowerOn} alt="Power On" onClick={playSound}/>
    </>
  )
}

export default Loadup
