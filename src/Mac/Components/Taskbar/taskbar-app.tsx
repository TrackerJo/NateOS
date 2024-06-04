import "./taskbar-app.css"

import Dot from "../../assets/dot.png"
import FinderIcon from "../../assets/finder.png"
import LaunchpadIcon from "../../assets/launchpad.png"
import VSCodeIcon from "../../assets/vscode.png"
import ChromeIcon from "../../assets/googlechrome.png"
import UnityIcon from "../../assets/unity.png"
import SteamIcon from "../../assets/steam.png"
import AlfredIcon from "../../assets/alfred.png"
import { useState } from "react"
import TaskbarContextMenu from "./taskbar-context-menu"

type TaskbarAppProps = {
    appName: string;
    appId: string;
    contextMenuOpen: string;
    setContextMenuOpen: (contextMenuOpen: string) => void;
    setTaskbarOpen: (taskbarOpen: boolean) => void;
    openWindows: Map<string, string>[];
    setOpenWindows: (openWindows: Map<string, string>[]) => void;
    setSelectedApp: (selectedApp: string) => void;
}

function TaskbarApp({appName, appId, contextMenuOpen, setContextMenuOpen, setTaskbarOpen, openWindows, setOpenWindows, setSelectedApp}: TaskbarAppProps){
    const [appClicked, setAppClicked] = useState(false);

    const icons: {[key: string]: string} = {
        finder: FinderIcon,
        launchpad: LaunchpadIcon,
        vscode: VSCodeIcon,
        chrome: ChromeIcon,
        unity: UnityIcon,
        steam: SteamIcon,
        alfred: AlfredIcon
    }

    function showContextMenu(e: React.MouseEvent){
        e.preventDefault();
      //Check if context menu is already open
      if(contextMenuOpen !== ""){
       
        setContextMenuOpen("");


        return;
      }
      
      //Create context menu and have it appaer where the mouse is
      setContextMenuOpen(appId);




      document.onclick = () => { 
        setAppClicked(false);
        setContextMenuOpen("");

        setTaskbarOpen(false);
        document.onclick = null;
      }
    }

    function onMouseUp(){
        setAppClicked(false);
    }

    function onMouseDown(){
        setAppClicked(true);
        console.log("Mouse down");
    }

    function onClick(){
        if(!isAppOpen()){
            const windowID = appId + "-" + openWindows.length;
            setOpenWindows([...openWindows, {id: windowID, type: appId}]);

        }

        setSelectedApp(appId);
    }

    function isAppOpen(){
        for(let i = 0; i < openWindows.length; i++){
            if(openWindows[i].type == appId){
                return true;
            }
        }
        return false;
    }
    return (
        <div className={"taskbar-app " + (contextMenuOpen == appId ? "context-menu-open " : " ") + (isAppOpen() ? "taskbar-app-open " : " ")} id="icon-finder" onContextMenu={showContextMenu}>
            <div className="taskbar-tooltip">
                <label className="tooltip-label">{appName}</label>
            </div>
            <div className="taskbar-app-contents">
                <img className={"taskbar-app-icon " + (appClicked ? "taskbar-app-clicked " : " ")} src={icons[appId]} id={"icon-" + appId} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onClick={onClick}/>
                <img className="app-open-dot" src={Dot} alt="App Open indicator" />
            </div>
            {contextMenuOpen == appId && <TaskbarContextMenu appId={appId} setOpenWindows={setOpenWindows} openWindows={openWindows} setSelectedApp={setSelectedApp}/>}
        </div>
    )
}

export default TaskbarApp