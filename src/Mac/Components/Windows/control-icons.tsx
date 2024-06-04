import "./control-icons.css"

import QuitIcon from "../../assets/quit_icon.png"
import MinimizeIcon from "../../assets/minimize_icon.png"
import MaximizeIcon from "../../assets/maximize_icon.png"
import QuitIconHovered from "../../assets/quit_icon_hovered.png"
import MinimizeIconHovered from "../../assets/minimize_icon_hovered.png"
import MaximizeIconHovered from "../../assets/maximize_icon_hovered.png"

import { useState } from "react";

type ControlIconsProps = {
    setMaximized: (maximized: boolean) => void;
    maximizeWindow: () => void;
    closeWindow: () => void;
}

function ControlIcons({setMaximized, maximizeWindow, closeWindow} : ControlIconsProps) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [maxClicked, setMaxClicked] = useState<boolean>(false);
    const [minClicked, setMinClicked] = useState<boolean>(false);
    const [quitClicked, setQuitClicked] = useState<boolean>(false);

    function toggleMax() {
        //check if mouse is still over the element
        if(maxClicked) {
            if(isMaximized) {
      
                setIsMaximized(false);
                setMaximized(false);
                maximizeWindow();
            //Stop the animation from affecting the window's style after it's done
         
            
            
      
          } else {
            setIsMaximized(true);
            setMaximized(true);
            maximizeWindow();
              
            // Animate the window increasing in size
            
            
          }
        }

        setMaxClicked(false);
  
    }

    function maxMouseEnter(e) {
        setIsHovered(true);
        //If mouse is down, set maxClicked to true
        if(e.buttons === 1) {
            setMaxClicked(true);
        }
    }

    function maxMouseLeave() {
        setIsHovered(false);
        setMaxClicked(false);
    }

    function maxMouseDown() {
        setMaxClicked(true);
    }

    function minMouseEnter() {
        setIsHovered(true);
        setMinClicked(true);
    }

    function minMouseLeave() {
        setIsHovered(false);
        setMinClicked(false);
    }

    function minMouseDown() {
        setMinClicked(true);
    }

    function quitMouseEnter() {
        setIsHovered(true);
        setQuitClicked(true);
    }

    function quitMouseLeave() {
        setIsHovered(false);
        setQuitClicked(false);
    }

    function quitMouseDown() {
        setQuitClicked(true);
    }

    function quitMouseUp() {
        if(quitClicked) {
            closeWindow();
        }
        setQuitClicked(false);
    }

    return (
        <div className="window-control-icons window-draggable">
            <img className={"window-control-icon quit-icon " + (quitClicked ? "window-control-icon-clicked" : "")} src={isHovered ? QuitIconHovered : QuitIcon } onMouseEnter={quitMouseEnter} onMouseLeave={quitMouseLeave} onMouseUp={quitMouseUp} onMouseDown={quitMouseDown}/>
            <img className={"window-control-icon min-icon " + (minClicked ? "window-control-icon-clicked" : "")} src={isHovered ? MinimizeIconHovered : MinimizeIcon} onMouseEnter={minMouseEnter} onMouseLeave={minMouseLeave} onMouseDown={minMouseDown}/>
            <img className={"window-control-icon max-icon " + (maxClicked ? "window-control-icon-clicked" : "")} src={isHovered ? MaximizeIconHovered : MaximizeIcon} onMouseEnter={maxMouseEnter} onMouseLeave={maxMouseLeave} onMouseUp={toggleMax} onMouseDown={maxMouseDown}/>
        </div>
    )
}

export default ControlIcons